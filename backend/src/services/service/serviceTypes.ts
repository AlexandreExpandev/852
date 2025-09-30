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
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
}

export interface ServiceCreateInput {
  title: string;
  description: string;
  shortDescription: string;
  imageUrl?: string;
  benefits?: string[];
  methodologies?: string[];
  featured?: boolean;
  order?: number;
}

export interface ServiceUpdateInput {
  title?: string;
  description?: string;
  shortDescription?: string;
  imageUrl?: string;
  benefits?: string[];
  methodologies?: string[];
  featured?: boolean;
  order?: number;
}
