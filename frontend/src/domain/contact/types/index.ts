export interface ContactEntity {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'in-progress' | 'completed' | 'archived';
  notes?: string;
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
}

export interface ContactCreateInput {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
