// src/data/achievements.ts
export interface Milestone {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  colSpan?: string;
  accent: string;
}

export const milestones: Milestone[] = [
  {
    id: 'bnl-researcher',
    title: 'Brookhaven National Laboratory (BNL)',
    subtitle: 'Guest Researcher (2019 – 2023)',
    badge: 'U.S. Dept of Energy Affiliate',
    description: 'Conducted high-impact engineering research at one of the top premier national laboratories in the United States.',
    colSpan: 'md:col-span-2',
    accent: 'from-blue-600/20 to-indigo-600/10'
  },
  {
    id: 'ieee-founder',
    title: 'Founder Chairperson, IEEE Student Branch',
    subtitle: 'BRAC University (2008)',
    badge: 'Pioneering Leadership',
    description: 'Founded and spearheaded the official IEEE Student Branch at BRAC University to foster engineering communities.',
    colSpan: 'md:col-span-1',
    accent: 'from-amber-600/20 to-orange-600/10'
  },
  {
    id: 'scholarships',
    title: '100% Full-Tuition Merit Scholarship',
    subtitle: 'BRACU Undergraduate Excellence',
    badge: 'Academic Honor',
    description: 'Awarded full academic waiver throughout the undergraduate tenure for outstanding scholastic performance.',
    colSpan: 'md:col-span-1',
    accent: 'from-emerald-600/20 to-teal-600/10'
  },
  {
    id: 'reviewer-peer',
    title: 'Peer Reviewer for 17+ Venues',
    subtitle: 'International IEEE & Scopus Journals',
    badge: 'Scholarly Service',
    description: 'Actively serving as an independent technical paper reviewer across peer-reviewed international symposiums.',
    colSpan: 'md:col-span-2',
    accent: 'from-purple-600/20 to-pink-600/10'
  }
];