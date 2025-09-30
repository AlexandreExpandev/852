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
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
}
