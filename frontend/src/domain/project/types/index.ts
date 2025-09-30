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
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
}
