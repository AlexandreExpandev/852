import { db } from '../../instances/database';
import { ServiceEntity, ServiceCreateInput, ServiceUpdateInput } from './serviceTypes';

/**
 * Retrieves all active services
 */
export async function serviceList(): Promise<ServiceEntity[]> {
  try {
    return db.service.findMany({
      where: { deleted: false },
      orderBy: { order: 'asc' }
    });
  } catch (error) {
    throw new Error('Failed to retrieve services');
  }
}

/**
 * Retrieves a specific service by ID
 */
export async function serviceGet(id: number): Promise<ServiceEntity | null> {
  try {
    return db.service.findUnique({
      where: { id, deleted: false }
    });
  } catch (error) {
    throw new Error('Failed to retrieve service');
  }
}

/**
 * Creates a new service
 */
export async function serviceCreate(data: ServiceCreateInput): Promise<ServiceEntity> {
  try {
    return db.service.create({
      data: {
        ...data,
        benefits: data.benefits || [],
        methodologies: data.methodologies || [],
        featured: data.featured || false,
        order: data.order || 999,
        createdAt: new Date(),
        updatedAt: new Date(),
        deleted: false
      }
    });
  } catch (error) {
    throw new Error('Failed to create service');
  }
}

/**
 * Updates an existing service
 */
export async function serviceUpdate(id: number, data: ServiceUpdateInput): Promise<ServiceEntity | null> {
  try {
    const service = await db.service.findUnique({
      where: { id, deleted: false }
    });

    if (!service) {
      return null;
    }

    return db.service.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date()
      }
    });
  } catch (error) {
    throw new Error('Failed to update service');
  }
}

/**
 * Soft deletes a service
 */
export async function serviceDelete(id: number): Promise<boolean> {
  try {
    const service = await db.service.findUnique({
      where: { id, deleted: false }
    });

    if (!service) {
      return false;
    }

    await db.service.update({
      where: { id },
      data: {
        deleted: true,
        updatedAt: new Date()
      }
    });

    return true;
  } catch (error) {
    throw new Error('Failed to delete service');
  }
}
