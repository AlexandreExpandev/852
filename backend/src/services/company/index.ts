import { db } from '../../instances/database';
import { CompanyEntity, CompanyUpdateInput } from './companyTypes';

/**
 * Retrieves company information
 */
export async function companyGet(): Promise<CompanyEntity | null> {
  try {
    // Assuming there's only one company record
    return db.company.findFirst();
  } catch (error) {
    throw new Error('Failed to retrieve company information');
  }
}

/**
 * Updates company information
 */
export async function companyUpdate(data: CompanyUpdateInput): Promise<CompanyEntity> {
  try {
    const company = await db.company.findFirst();

    if (company) {
      // Update existing record
      return db.company.update({
        where: { id: company.id },
        data: {
          ...data,
          updatedAt: new Date()
        }
      });
    } else {
      // Create new record if none exists
      return db.company.create({
        data: {
          ...data,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
    }
  } catch (error) {
    throw new Error('Failed to update company information');
  }
}
