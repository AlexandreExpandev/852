import { db } from '../../instances/database';
import { TestimonialEntity, TestimonialCreateInput, TestimonialUpdateInput } from './testimonialTypes';

/**
 * Retrieves all active testimonials
 */
export async function testimonialList(): Promise<TestimonialEntity[]> {
  try {
    // This would be replaced with actual database query
    return db.testimonial.findMany({
      where: { deleted: false },
      orderBy: { createdAt: 'desc' }
    });
  } catch (error) {
    throw new Error('Failed to retrieve testimonials');
  }
}

/**
 * Retrieves a specific testimonial by ID
 */
export async function testimonialGet(id: number): Promise<TestimonialEntity | null> {
  try {
    return db.testimonial.findUnique({
      where: { id, deleted: false }
    });
  } catch (error) {
    throw new Error('Failed to retrieve testimonial');
  }
}

/**
 * Creates a new testimonial
 */
export async function testimonialCreate(data: TestimonialCreateInput): Promise<TestimonialEntity> {
  try {
    return db.testimonial.create({
      data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
        deleted: false
      }
    });
  } catch (error) {
    throw new Error('Failed to create testimonial');
  }
}

/**
 * Updates an existing testimonial
 */
export async function testimonialUpdate(id: number, data: TestimonialUpdateInput): Promise<TestimonialEntity | null> {
  try {
    const testimonial = await db.testimonial.findUnique({
      where: { id, deleted: false }
    });

    if (!testimonial) {
      return null;
    }

    return db.testimonial.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date()
      }
    });
  } catch (error) {
    throw new Error('Failed to update testimonial');
  }
}

/**
 * Soft deletes a testimonial
 */
export async function testimonialDelete(id: number): Promise<boolean> {
  try {
    const testimonial = await db.testimonial.findUnique({
      where: { id, deleted: false }
    });

    if (!testimonial) {
      return false;
    }

    await db.testimonial.update({
      where: { id },
      data: {
        deleted: true,
        updatedAt: new Date()
      }
    });

    return true;
  } catch (error) {
    throw new Error('Failed to delete testimonial');
  }
}
