export interface ContactEntity {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'in-progress' | 'completed' | 'archived';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
}

export interface ContactCreateInput {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactUpdateInput {
  status?: 'new' | 'in-progress' | 'completed' | 'archived';
  notes?: string;
}
