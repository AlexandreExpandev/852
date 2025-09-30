export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  imageUrl?: string;
}

export interface CompanyEntity {
  id: number;
  name: string;
  mission: string;
  vision: string;
  values: string[];
  about: string;
  history?: string;
  logoUrl?: string;
  team?: TeamMember[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CompanyUpdateInput {
  name: string;
  mission: string;
  vision: string;
  values: string[];
  about: string;
  history?: string;
  logoUrl?: string;
  team?: TeamMember[];
}
