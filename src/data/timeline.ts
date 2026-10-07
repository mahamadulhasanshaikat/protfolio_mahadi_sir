// src/data/timeline.ts
export interface JourneyStep {
  period: string;
  role: string;
  institution: string;
  location: string;
  description: string;
  type: 'academic' | 'research' | 'teaching';
}

export const journeyTimeline: JourneyStep[] = [
  {
    period: 'Nov 2024 – Present',
    role: 'Assistant Professor',
    institution: 'Southeast University',
    location: 'Dhaka, Bangladesh',
    description: 'Leading academic courses and research initiatives in Machine Learning, Computer Vision, and Applied Computing.',
    type: 'teaching'
  },
  {
    period: 'May 2019 – Jun 2023',
    role: 'Guest Researcher',
    institution: 'Brookhaven National Laboratory (BNL)',
    location: 'Upton, New York, USA',
    description: 'Collaborated on advanced science and computational projects under the premier U.S. Department of Energy national laboratory.',
    type: 'research'
  },
  {
    period: 'Aug 2014 – May 2024',
    role: 'Data Analyst / Graduate Researcher',
    institution: 'Stony Brook University',
    location: 'Stony Brook, New York, USA',
    description: 'Earned MSc in Computer Engineering while conducting high-level research and university data operations.',
    type: 'academic'
  },
  {
    period: 'Aug 2011 – Aug 2014',
    role: 'Lecturer',
    institution: 'University of Liberal Arts Bangladesh (ULAB)',
    location: 'Dhaka, Bangladesh',
    description: 'Instructed core undergraduate engineering curriculum and supervised final year project groups.',
    type: 'teaching'
  },
  {
    period: '2009 – 2010',
    role: 'MSc in Electrical Engineering',
    institution: 'University of Southampton',
    location: 'Southampton, United Kingdom',
    description: 'Advanced studies in sensor communication, signal processing, and telecommunication networks.',
    type: 'academic'
  },
  {
    period: '2004 – 2007',
    role: 'BSc in ETE (100% Merit Scholar)',
    institution: 'BRAC University',
    location: 'Dhaka, Bangladesh',
    description: 'Founded the IEEE Student Branch (2008) and graduated with full academic scholarship honors.',
    type: 'academic'
  }
];