export interface TestimonialEntity {
  id: number;
  clientName: string;
  company: string;
  position: string;
  testimonial: string;
  rating?: number;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
}

export interface TestimonialCreateInput {
  clientName: string;
  company: string;
  position: string;
  testimonial: string;
  rating?: number;
  imageUrl?: string;
}

export interface TestimonialUpdateInput {
  clientName?: string;
  company?: string;
  position?: string;
  testimonial?: string;
  rating?: number;
  imageUrl?: string;
}
