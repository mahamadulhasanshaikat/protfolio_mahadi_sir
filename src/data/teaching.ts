// src/data/teaching.ts
export interface Course {
  code: string;
  title: string;
  level: 'Undergraduate' | 'Graduate';
  semester: string;
  description: string;
}

export interface SupervisionTopic {
  title: string;
  focusArea: string;
  prerequisites: string[];
}

export const activeCourses: Course[] = [
  {
    code: 'CSE 4107',
    title: 'Machine Learning & Pattern Recognition',
    level: 'Undergraduate',
    semester: 'Spring & Fall',
    description: 'Supervised/unsupervised algorithms, neural networks, CNNs, and practical computer vision implementations.'
  },
  {
    code: 'CSE 3205',
    title: 'Data Communication & Computer Networks',
    level: 'Undergraduate',
    semester: 'Regular',
    description: 'Network architectures, wireless transmission media, MAC protocols, and routing topologies.'
  },
  {
    code: 'CSE 4311',
    title: 'Digital Signal Processing & Sensor Systems',
    level: 'Undergraduate',
    semester: 'Elective',
    description: 'Discrete-time signals, sensor interface circuitry, acoustic & biomedical signal feature extraction.'
  }
];

export const thesisTopics: SupervisionTopic[] = [
  {
    title: 'Biomedical Image Analytics & Histopathology',
    focusArea: 'Ensemble deep learning for early-stage diagnostic models.',
    prerequisites: ['Python', 'PyTorch/TensorFlow', 'Basic Pathology Concepts']
  },
  {
    title: 'Intelligent Transportation & Acoustic Sensing',
    focusArea: 'Edge AI and IoT-based traffic acoustic signal classifications.',
    prerequisites: ['Embedded Systems', 'Signal Processing', 'Machine Learning']
  },
  {
    title: 'Applied OCR & Bangla Natural Language Processing',
    focusArea: 'Hybrid vision models for complex script parsing and symbol recognition.',
    prerequisites: ['Computer Vision', 'Deep Learning', 'Data Preprocessing']
  }
];