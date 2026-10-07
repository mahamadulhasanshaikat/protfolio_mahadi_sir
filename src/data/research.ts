// src/data/research.ts
export interface ResearchPaper {
  id: string;
  title: string;
  category: 'deep-learning' | 'wireless' | 'smart-systems';
  venue: string;
  year: number;
  description: string;
  tags: string[];
  paperUrl?: string;
}

export const researchPapers: ResearchPaper[] = [
  {
    id: 'her2-2025',
    title: 'An Ensemble Deep Learning Framework for Accurate HER2 Status Classification in Breast Cancer Histopathology',
    category: 'deep-learning',
    venue: '3rd BIM Conference',
    year: 2025,
    description: 'Developed an ensemble model leveraging deep convolutional networks to accurately diagnose HER2 protein status in histopathological imagery.',
    tags: ['Deep Learning', 'Medical Imaging', 'Histopathology']
  },
  {
    id: 'deep-hog-2019',
    title: 'DEEP HOG: A Hybrid Model to Classify Bangla Isolated Alpha-Numerical Symbols',
    category: 'deep-learning',
    venue: 'Neural Network World',
    year: 2019,
    description: 'Pioneered a hybrid feature-extraction method combining traditional Histogram of Oriented Gradients (HOG) with deep neural networks for Bangla OCR.',
    tags: ['Bangla OCR', 'Computer Vision', 'Pattern Recognition']
  },
  {
    id: 'ac-stop-2015',
    title: 'AC-Stop: Acoustic Sensor Detection of Vehicle Stoppage at Traffic Stop-Signs',
    category: 'smart-systems',
    venue: 'IEEE CEWIT (USA)',
    year: 2015,
    description: 'Designed an acoustic surveillance and vehicle monitoring framework using road-side audio sensors to enforce traffic sign compliance.',
    tags: ['Smart City', 'Acoustic Sensing', 'Intelligent Traffic']
  },
  {
    id: 'wsn-2012',
    title: 'Signalling and Detection of Parallel Triple Layer Wireless Sensor Networks with M-ary Orthogonal Modulation',
    category: 'wireless',
    venue: '19th IEEE SCVT (Netherlands)',
    year: 2012,
    description: 'Investigated error rate minimization and parallel routing in multi-tier wireless sensor topologies using M-ary orthogonal modulation.',
    tags: ['Wireless Sensor Networks', 'Modulation', 'Signal Processing']
  }
];