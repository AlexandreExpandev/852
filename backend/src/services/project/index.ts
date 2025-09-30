import { db } from '../../instances/database';
import { ProjectEntity, ProjectCreateInput, ProjectUpdateInput } from './projectTypes';

/**
 * Retrieves all active projects
 */
export async function projectList(): Promise<ProjectEntity[]> {
  try {
    return db.project.findMany({
      where: { deleted: false },
      orderBy: { createdAt: 'desc' }
    });
  } catch (error) {
    throw new Error('Failed to retrieve projects');
  }
}

/**
 * Retrieves a specific project by ID
 */
export async function projectGet(id: number): Promise<ProjectEntity | null> {
  try {
    return db.project.findUnique({
      where: { id, deleted: false }
    });
  } catch (error) {
    throw new Error('Failed to retrieve project');
  }
}

/**
 * Creates a new project
 */
export async function projectCreate(data: ProjectCreateInput): Promise<ProjectEntity> {
  try {
    return db.project.create({
      data: {
        ...data,
        technologies: data.technologies || [],
        featured: data.featured || false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deleted: false
      }
    });
  } catch (error) {
    throw new Error('Failed to create project');
  }
}

/**
 * Updates an existing project
 */
export async function projectUpdate(id: number, data: ProjectUpdateInput): Promise<ProjectEntity | null> {
  try {
    const project = await db.project.findUnique({
      where: { id, deleted: false }
    });

    if (!project) {
      return null;
    }

    return db.project.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date()
      }
    });
  } catch (error) {
    throw new Error('Failed to update project');
  }
}

/**
 * Soft deletes a project
 */
export async function projectDelete(id: number): Promise<boolean> {
  try {
    const project = await db.project.findUnique({
      where: { id, deleted: false }
    });

    if (!project) {
      return false;
    }

    await db.project.update({
      where: { id },
      data: {
        deleted: true,
        updatedAt: new Date()
      }
    });

    return true;
  } catch (error) {
    throw new Error('Failed to delete project');
  }
}
