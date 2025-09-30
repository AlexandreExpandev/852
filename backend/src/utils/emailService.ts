import nodemailer from 'nodemailer';
import { config } from '../config';
import { logger } from './logger';

interface EmailOptions {
  to: string | string[];
  subject: string;
  text: string;
  html: string;
  from?: string;
  attachments?: Array<{
    filename: string;
    content: Buffer | string;
    contentType?: string;
  }>;
}

/**
 * Sends an email using the configured email service
 */
export async function sendEmail(options: EmailOptions): Promise<void> {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: config.email.host,
      port: config.email.port,
      secure: config.email.secure,
      auth: {
        user: config.email.auth.user,
        pass: config.email.auth.pass
      }
    });

    // Send email
    await transporter.sendMail({
      from: options.from || config.email.defaultFrom,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
      attachments: options.attachments
    });

    logger.info('Email sent successfully', {
      to: options.to,
      subject: options.subject
    });
  } catch (error) {
    logger.error('Failed to send email', { error });
    throw new Error('Failed to send email');
  }
}
