import api from '@/core/lib/api';
import { ProjectEntity } from '../types';

/**
 * @service projectService
 * @summary Provides methods for project-related API operations.
 * @domain project
 */
export const projectService = {
  /**
   * @method getProjects
   * @summary Fetches a list of all projects.
   */
  getProjects: async (): Promise<ProjectEntity[]> => {
    const data = await api.get<ProjectEntity[]>('/external/projects');
    return data;
  },

  /**
   * @method getProjectById
   * @summary Fetches a single project by its ID.
   */
  getProjectById: async (id: number): Promise<ProjectEntity> => {
    const data = await api.get<ProjectEntity>(`/external/projects/${id}`);
    return data;
  },
};
