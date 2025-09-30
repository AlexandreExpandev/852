import { db } from '../../instances/database';
import { ContactEntity, ContactCreateInput, ContactUpdateInput } from './contactTypes';
import { sendEmail } from '../../utils/emailService';

/**
 * Retrieves all contact form submissions
 */
export async function contactList(): Promise<ContactEntity[]> {
  try {
    return db.contact.findMany({
      where: { deleted: false },
      orderBy: { createdAt: 'desc' }
    });
  } catch (error) {
    throw new Error('Failed to retrieve contacts');
  }
}

/**
 * Retrieves a specific contact by ID
 */
export async function contactGet(id: number): Promise<ContactEntity | null> {
  try {
    return db.contact.findUnique({
      where: { id, deleted: false }
    });
  } catch (error) {
    throw new Error('Failed to retrieve contact');
  }
}

/**
 * Creates a new contact form submission
 */
export async function contactCreate(data: ContactCreateInput): Promise<ContactEntity> {
  try {
    // Create contact record
    const contact = await db.contact.create({
      data: {
        ...data,
        status: 'new',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleted: false
      }
    });

    // Send notification email
    await sendEmail({
      to: 'admin@tddconsulting.com',
      subject: 'New Contact Form Submission',
      text: `New contact from ${data.name} (${data.email}): ${data.subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `
    });

    return contact;
  } catch (error) {
    throw new Error('Failed to create contact');
  }
}

/**
 * Updates an existing contact
 */
export async function contactUpdate(id: number, data: ContactUpdateInput): Promise<ContactEntity | null> {
  try {
    const contact = await db.contact.findUnique({
      where: { id, deleted: false }
    });

    if (!contact) {
      return null;
    }

    return db.contact.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date()
      }
    });
  } catch (error) {
    throw new Error('Failed to update contact');
  }
}

/**
 * Soft deletes a contact
 */
export async function contactDelete(id: number): Promise<boolean> {
  try {
    const contact = await db.contact.findUnique({
      where: { id, deleted: false }
    });

    if (!contact) {
      return false;
    }

    await db.contact.update({
      where: { id },
      data: {
        deleted: true,
        updatedAt: new Date()
      }
    });

    return true;
  } catch (error) {
    throw new Error('Failed to delete contact');
  }
}
