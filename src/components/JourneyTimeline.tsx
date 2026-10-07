// src/components/JourneyTimeline.tsx
'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Microscope } from 'lucide-react';

type TimelineCategory = 'professional' | 'academic';

interface TimelineItem {
  period: string;
  role: string;
  institution: string;
  location: string;
  description: string;
  category: 'academic' | 'professional';
  iconType: 'research' | 'teaching' | 'academic';
  color: 'blue' | 'indigo' | 'emerald';
}

const academicJourney: TimelineItem[] = [
  {
    period: 'November 2024 – Present',
    role: 'Assistant Professor',
    institution: 'Southeast University',
    location: 'Dhaka, Bangladesh',
    description: 'Instructing undergraduate engineering courses and supervising thesis research in Machine Learning, Computer Vision, and Applied Computing.',
    category: 'professional',
    iconType: 'teaching',
    color: 'indigo'
  },
  {
    period: 'May 2019 – June 2023',
    role: 'Guest Researcher',
    institution: 'Brookhaven National Laboratory',
    location: 'Upton, New York, United States',
    description: 'Contributed to computational science workflows and interdisciplinary scientific investigations under the United States Department of Energy.',
    category: 'professional',
    iconType: 'research',
    color: 'blue'
  },
  {
    period: 'August 2014 – May 2024',
    role: 'Master of Science in Computer Engineering & Researcher',
    institution: 'Stony Brook University',
    location: 'Stony Brook, New York, United States',
    description: 'Graduate studies in Computer Engineering, conducting advanced research in neural networks and university computational data operations.',
    category: 'academic',
    iconType: 'academic',
    color: 'emerald'
  },
  {
    period: 'August 2011 – August 2014',
    role: 'Lecturer',
    institution: 'University of Liberal Arts Bangladesh',
    location: 'Dhaka, Bangladesh',
    description: 'Instructed core undergraduate engineering curriculum and supervised final year capstone design engineering projects.',
    category: 'professional',
    iconType: 'teaching',
    color: 'indigo'
  },
  {
    period: '2009 – 2010',
    role: 'Master of Science in Operational Telecommunications',
    institution: 'University of Southampton',
    location: 'Southampton, United Kingdom',
    description: 'Advanced postgraduate studies focused on signal processing algorithms, telecommunication networks, and wireless architectures.',
    category: 'academic',
    iconType: 'academic',
    color: 'emerald'
  },
  {
    period: '2004 – 2007',
    role: 'Bachelor of Science in Electronics and Telecommunication Engineering',
    institution: 'BRAC University',
    location: 'Dhaka, Bangladesh',
    description: 'Graduated with full academic merit honors and established the IEEE Student Branch as Founding Chair in 2008.',
    category: 'academic',
    iconType: 'academic',
    color: 'emerald'
  }
];

function TimelineCard({ 
  item, 
  idx 
}: { 
  item: TimelineItem; 
  idx: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { damping: 20, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { damping: 20, stiffness: 220 });

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

  const getIcon = () => {
    switch (item.iconType) {
      case 'research':
        return <Microscope className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'teaching':
        return <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const glowColors = {
    blue: 'rgba(59,130,246,0.14)',
    indigo: 'rgba(99,102,241,0.14)',
    emerald: 'rgba(16,185,129,0.14)'
  }[item.color];

  const borderHoverColors = {
    blue: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
    indigo: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
    emerald: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10'
  }[item.color];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: idx * 0.05 }}
      className="relative pl-8 group"
    >
      <motion.div 
        whileHover={{ scale: 1.15 }}
        className={`absolute -left-[17px] top-1.5 p-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 transition shadow-xs z-10 ${
          item.color === 'blue' 
            ? 'group-hover:border-blue-500' 
            : item.color === 'indigo' 
            ? 'group-hover:border-indigo-500' 
            : 'group-hover:border-emerald-500'
        }`}
      >
        {getIcon()}
      </motion.div>

      <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono text-slate-500 dark:text-slate-400 md:text-right md:w-28 pb-1 md:pb-0 font-medium tracking-tight">
        {item.period}
      </div>

      <div className="perspective-[1000px]">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          whileHover={{ y: -3 }}
          className={`relative overflow-hidden p-5 rounded-2xl bg-white/95 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs backdrop-blur-md transition-colors duration-300 space-y-2 cursor-default ${borderHoverColors}`}
        >
          {isHovered && (
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
              style={{
                background: `radial-gradient(320px circle at var(--x) var(--y), ${glowColors}, transparent 70%)`,
                // @ts-expect-error inline custom variable
                '--x': `${mousePos.x}px`,
                '--y': `${mousePos.y}px`,
              }}
            />
          )}

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-200 text-sm md:text-base">
              {item.role}
            </h3>
            
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border font-semibold ${
                item.category === 'academic'
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                  : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400'
              }`}>
                {item.category === 'academic' ? 'ACADEMIC' : 'APPOINTMENT'}
              </span>

              <span className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono font-medium">
                <MapPin className="w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0" />
                {item.location}
              </span>
            </div>
          </div>

          <p className="relative z-10 text-xs font-semibold text-blue-600 dark:text-blue-400">
            {item.institution}
          </p>

          <p className="relative z-10 text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1 font-normal">
            {item.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function JourneyTimeline() {
  // First/Default state set to 'professional'
  const [filter, setFilter] = useState<TimelineCategory>('professional');

  const filteredList = academicJourney.filter((item) => item.category === filter);

  return (
    <section id="journey" className="relative py-24 max-w-5xl mx-auto px-6 border-t border-slate-200 dark:border-slate-800 scroll-mt-20">
      
      {/* Background kinetic dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f60a_1px,transparent_1px)] dark:bg-[radial-gradient(#3b82f610_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none -z-10" />

      {/* Header Area */}
      <div className="space-y-3 text-center mb-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-mono font-medium shadow-xs">
          <Briefcase className="w-3.5 h-3.5" />
          CHRONOLOGICAL TRACK RECORD
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Academic & Professional Journey
        </h2>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Two decades of academic milestones across the United Kingdom, United States, and leading universities in Bangladesh.
        </p>
      </div>

      {/* 2-Option Animated Segmented Switcher (Professional First) */}
      <div className="flex justify-center mb-16">
        <div className="p-1.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md inline-flex items-center gap-1.5 backdrop-blur-md">
          
          {/* 1. Professional & Labs (First Tab) */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setFilter('professional')}
            className={`relative px-5 py-2.5 rounded-xl text-xs font-mono font-medium transition-colors cursor-pointer ${
              filter === 'professional'
                ? 'text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {filter === 'professional' && (
              <motion.div
                layoutId="timelineActivePill"
                className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 shadow-md shadow-indigo-500/20"
                transition={{ type: 'spring', stiffness: 500, damping: 32 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2 font-semibold tracking-wide">
              <Briefcase className={`w-4 h-4 transition-transform duration-300 ${filter === 'professional' ? '-rotate-6' : ''}`} />
              Professional
            </span>
          </motion.button>

          {/* 2. Academic Degrees (Second Tab) */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setFilter('academic')}
            className={`relative px-5 py-2.5 rounded-xl text-xs font-mono font-medium transition-colors cursor-pointer ${
              filter === 'academic'
                ? 'text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {filter === 'academic' && (
              <motion.div
                layoutId="timelineActivePill"
                className="absolute inset-0 rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 shadow-md shadow-emerald-500/20"
                transition={{ type: 'spring', stiffness: 500, damping: 32 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2 font-semibold tracking-wide">
              <GraduationCap className={`w-4 h-4 transition-transform duration-300 ${filter === 'academic' ? 'rotate-6' : ''}`} />
              Academic Degrees
            </span>
          </motion.button>

        </div>
      </div>

      {/* Connected Timeline Line */}
      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-36 space-y-12 text-left">
        <AnimatePresence mode="popLayout">
          {filteredList.map((item, idx) => (
            <TimelineCard key={item.period + item.role} item={item} idx={idx} />
          ))}
        </AnimatePresence>
      </div>

    </section>
  );
}