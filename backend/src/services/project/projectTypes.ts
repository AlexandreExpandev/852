export interface ProjectEntity {
  id: number;
  title: string;
  clientName: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  imageUrl?: string;
  technologies: string[];
  featured: boolean;
  completionDate?: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
}

export interface ProjectCreateInput {
  title: string;
  clientName: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  imageUrl?: string;
  technologies?: string[];
  featured?: boolean;
  completionDate?: string;
}

export interface ProjectUpdateInput {
  title?: string;
  clientName?: string;
  description?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  imageUrl?: string;
  technologies?: string[];
  featured?: boolean;
  completionDate?: string;
}
