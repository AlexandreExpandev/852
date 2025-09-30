export interface TestimonialEntity {
  id: number;
  clientName: string;
  company: string;
  position: string;
  testimonial: string;
  rating?: number;
  imageUrl?: string;
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
}
