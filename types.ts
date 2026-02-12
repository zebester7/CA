
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  problem: string;
  approach: string;
  process: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  risk: string;
  intervention: string;
  results: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  credentials: string[];
  bio: string;
  linkedin: string;
}

export interface Insight {
  id: string;
  title: string;
  category: 'Budget' | 'Tax Law' | 'Compliance' | 'Strategy' | 'International';
  date: string;
  excerpt: string;
}

export interface Industry {
  name: string;
  risks: string;
  challenges: string;
  solutions: string;
}
