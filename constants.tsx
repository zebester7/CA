
import React from 'react';
import { 
  ShieldCheck, 
  BarChart3, 
  Globe, 
  Calculator, 
  FileSearch, 
  Briefcase 
} from 'lucide-react';
import { Service, CaseStudy, TeamMember, Insight, Industry } from './types';

export const SERVICES: Service[] = [
  {
    id: 'audit',
    title: 'Audit & Assurance',
    description: 'Independent verification of financial statements to build investor confidence.',
    icon: 'ShieldCheck',
    problem: 'Opaque financial reporting leading to regulatory friction and investor distrust.',
    approach: 'A data-driven, non-intrusive methodology that goes beyond compliance.',
    process: ['Planning', 'Risk Assessment', 'Substantive Testing', 'Final Reporting']
  },
  {
    id: 'tax',
    title: 'Tax Advisory',
    description: 'Strategic tax planning to minimize liability and maximize efficiency.',
    icon: 'Calculator',
    problem: 'Increasingly complex global tax codes creating unforeseen liabilities.',
    approach: 'Proactive structuring that anticipates legislative shifts.',
    process: ['Analysis', 'Strategy Design', 'Implementation', 'Annual Review']
  },
  {
    id: 'compliance',
    title: 'Corporate Compliance',
    description: 'Ensuring your corporate structure meets all local and international laws.',
    icon: 'Briefcase',
    problem: 'Non-compliance risks leading to heavy fines or operational bans.',
    approach: 'Rigorous monitoring and governance framework deployment.',
    process: ['Audit', 'Gap Analysis', 'Correction', 'Maintenance']
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Robert Sterling',
    role: 'Founding Partner',
    experience: '25+ Years',
    credentials: ['CA', 'FCA', 'MBA'],
    bio: 'Specializing in international tax structuring and high-stakes corporate advisory.',
    linkedin: '#'
  },
  {
    name: 'Eleanor Vance',
    role: 'Head of Audit',
    experience: '18 Years',
    credentials: ['CPA', 'CIA'],
    bio: 'Leading complex cross-border assurance projects for FTSE 100 clients.',
    linkedin: '#'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    name: 'Manufacturing',
    risks: 'Supply chain disruptions and high capital intensity.',
    challenges: 'Transfer pricing and asset depreciation compliance.',
    solutions: 'Localized tax credits and strategic capital management.'
  },
  {
    name: 'Tech Startups',
    risks: 'Rapid scaling without financial governance.',
    challenges: 'R&D tax credits and equity structuring.',
    solutions: 'Agile financial reporting and investor-ready modeling.'
  }
];

export const INSIGHTS: Insight[] = [
  {
    id: '1',
    title: '2025 Global Tax Landscape: A CFO Perspective',
    category: 'Tax Law',
    date: 'Oct 12, 2024',
    excerpt: 'Navigating the new Pillar Two rules and their impact on mid-market international firms.'
  },
  {
    id: '2',
    title: 'Risk Mitigation in Forensic Auditing',
    category: 'Compliance',
    date: 'Nov 05, 2024',
    excerpt: 'How early detection systems are evolving to prevent internal fraud in decentralized organizations.'
  }
];
