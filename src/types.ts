export type NavRoute = 'home' | 'about-us' | 'projects' | 'contact-us';

export interface Mentor {
  id: string;
  name: string;
  role: string;
  title: string;
  affiliation: string;
  bio: string;
  category: 'leadership' | 'faculty' | 'instrumentation' | 'all';
  image: string;
  tags: { label: string; icon: string }[];
}

export interface Project {
  id: string;
  code: string;
  title: string;
  category: string;
  categorySlug: 'robotics' | 'cardiovascular' | 'microfluidics' | 'all';
  badge: string;
  trl: number;
  trlPhase: string;
  image: string;
  description: string;
  keyArchitecture: string;
  electricalSafety: string;
  clinicalPartners: string;
  principalInvestigator: string;
  specs: { label: string; value: string }[];
  clinicalHighlights: string[];
  regulatoryStatus: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phoneOrg: string;
  inquiryType: 'general' | 'partnerships' | 'clinical' | 'research';
  message: string;
}
