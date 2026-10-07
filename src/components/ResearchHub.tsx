// src/components/ResearchHub.tsx
'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  BookOpen, 
  ExternalLink, 
  FileText, 
  Award, 
  Cpu, 
  Network, 
  Layers, 
  Search,
  ChevronRight,
  GraduationCap
} from 'lucide-react';

const researchPapers = [
  {
    title: "Introducing the Boise State Bangla Handwriting Dataset and an Efficient Offline Recognizer of Isolated Bangla Characters",
    authors: "Mahdin Mahboob, et al.",
    venue: "IEEE International Conference on Imaging, Vision and Pattern Recognition",
    year: "2018",
    category: "Deep Learning & Vision",
    doi: "#",
    badge: "Computer Vision & Optical Character Recognition",
    abstract: "Presented a comprehensive offline handwriting dataset for Bangla characters alongside a high-accuracy recognition framework using deep convolutional neural network architectures."
  },
  {
    title: "Deep Learning Method for Video-Based Data to Classify Peripheral Edema Grades",
    authors: "Mahdin Mahboob, et al.",
    venue: "Journal of Cardiovascular Medicine / Journal of Cardiac Failure",
    year: "2023",
    category: "Biomedical & IoT",
    doi: "#",
    badge: "Medical Diagnostics & Video Analytics",
    abstract: "Proposed an automated video-based classification system using Deep Neural Networks to non-invasively detect and grade peripheral edema, advancing bedside computational diagnostics."
  },
  {
    title: "AndroClass: An Effective Method to Classify Android Applications by Applying Deep Neural Networks to Comprehensive Features",
    authors: "Mahdin Mahboob, et al.",
    venue: "Wireless Communications and Mobile Computing",
    year: "2021",
    category: "Security & AI",
    doi: "#",
    badge: "Cybersecurity & Neural Networks",
    abstract: "Developed a robust Android application classification model exploiting static and dynamic feature sets via Deep Neural Networks for enhanced malware and class detection."
  },
  {
    title: "SBAG: A Hybrid Deep Learning Model for Large Scale Traffic Speed Prediction",
    authors: "Mahdin Mahboob, et al.",
    venue: "International Journal of Advanced Computer Science and Applications",
    year: "2022",
    category: "Biomedical & IoT",
    doi: "#",
    badge: "Intelligent Transportation Systems",
    abstract: "A hybrid spatial-temporal deep learning network leveraging sensor topologies to forecast large-scale urban traffic velocities with high empirical accuracy."
  },
  {
    title: "A Novel Hybrid Deep Neural Network Model to Predict the Refrigerant Charge Amount of Heat Pumps",
    authors: "Mahdin Mahboob, et al.",
    venue: "Sustainability (mdpi)",
    year: "2023",
    category: "Deep Learning & Vision",
    doi: "#",
    badge: "Applied Machine Learning & Thermofluids",
    abstract: "Designed a hybrid predictive framework for industrial thermodynamic metrics, optimizing heat pump charges using sequence-to-sequence deep neural models."
  },
  {
    title: "Numerical Solution to Nonlinear Biochemical Reaction Model Using Hybrid Polynomial Basis Differential Evolution Technique",
    authors: "Mahdin Mahboob, et al.",
    venue: "Advanced Studies in Biology / Computational Mathematics Archive",
    year: "2017",
    category: "Biomedical & IoT",
    doi: "#",
    badge: "Mathematical Modeling & Bio-Algorithms",
    abstract: "Formulated a hybrid differential evolution workflow to numerically analyze and solve complex nonlinear biochemical system reactions."
  }
];

const categories = ["All Research", "Deep Learning & Vision", "Biomedical & IoT", "Security & AI"];

// Interactive Animated Core Card for 3D and Hover effects
function ResearchCard({ paper }: { paper: typeof researchPapers[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3D Tilt Spring Mechanics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { damping: 20, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { damping: 20, stiffness: 220 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="perspective-[1000px]">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group relative h-full p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-slate-750/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-blue-500/10 transition-colors duration-300 flex flex-col justify-between text-left"
      >
        {/* Dynamic Spotlight Glow hover */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl bg-[radial-gradient(350px_circle_at_var(--x)_var(--y),rgba(59,130,246,0.12),transparent_70%)] transition-opacity duration-300"
            style={{
              // @ts-expect-error inline custom variable
              '--x': `${mousePos.x}px`,
              '--y': `${mousePos.y}px`,
            }}
          />
        )}

        <div className="relative z-10 space-y-4">
          {/* Meta Tags with interactive pop-scale */}
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10 text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 tracking-wide"
            >
              {paper.badge}
            </motion.span>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-semibold">
              {paper.year}
            </span>
          </div>

          {/* Paper Title with hover transform and color shift */}
          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-snug">
            {paper.title}
          </h3>

          {/* Abstract Details Text */}
          <p className="text-xs text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
            {paper.abstract}
          </p>
        </div>

        {/* Info Border Segment */}
        <div className="relative z-10 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-1">
          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">JOURNAL / VENUE</span>
          <div className="flex items-center justify-between gap-4 text-[11px] font-medium text-slate-700 dark:text-slate-300">
            <span className="truncate group-hover:translate-x-0.5 transition-transform duration-300">{paper.venue}</span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 shrink-0 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 rounded border border-slate-150 dark:border-slate-900">
              {paper.category}
            </span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default function ResearchHub() {
  const [activeCategory, setActiveCategory] = useState("All Research");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPapers = researchPapers.filter(paper => {
    const matchesCategory = activeCategory === "All Research" || paper.category === activeCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          paper.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          paper.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="research" className="py-24 max-w-6xl mx-auto px-6 scroll-mt-20">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-transparent dark:from-blue-600/20 dark:via-indigo-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3 text-left">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-mono font-medium shadow-xs"
          >
            <BookOpen className="w-3.5 h-3.5 animate-pulse" />
            SCHOLARLY PUBLICATIONS & PATENTS
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            Research Portfolio
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm text-slate-600 dark:text-slate-400 max-w-xl"
          >
            Focusing on Deep Learning architectures, Computer Vision, Biomedical engineering, and sensor topologies.
          </motion.p>
        </div>

        {/* External Academic Links with staggered entrance and scale hovers */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2.5"
        >
          <motion.a 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="https://scholar.google.com/citations?user=DLpOsigAAAAJ&hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-xl transition shadow-xs hover:shadow-md"
          >
            Google Scholar <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.researchgate.net/profile/Mahdin-Mahboob" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-xl transition shadow-xs hover:shadow-md"
          >
            ResearchGate <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800 mb-10">
        
        {/* Horizontal Category Tabs */}
        <div className="flex flex-wrap gap-1.5 order-2 md:order-1">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Search Input field */}
        <div className="relative w-full md:max-w-xs order-1 md:order-2">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            placeholder="Filter research publications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:border-blue-500 focus:outline-hidden transition-all shadow-xs"
          />
        </div>
      </div>

      {/* Grid: Layout of Filtered Publications with Animations */}
      <motion.div 
        layout
        className="grid md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredPapers.map((paper, idx) => (
            <motion.div
              layout
              key={paper.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ResearchCard paper={paper} />
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredPapers.length === 0 && (
          <div className="col-span-2 py-16 text-center text-slate-500 dark:text-slate-400 font-mono text-xs border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
            No research papers found matching the filters.
          </div>
        )}
      </motion.div>

    </section>
  );
}