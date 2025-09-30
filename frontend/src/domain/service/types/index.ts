export interface ServiceEntity {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl?: string;
  benefits: string[];
  methodologies: string[];
  featured: boolean;
  order: number;
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
}
