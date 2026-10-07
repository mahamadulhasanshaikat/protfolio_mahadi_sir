// src/components/TeachingSection.tsx
'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  BookOpenCheck, 
  Users, 
  CheckCircle2, 
  Tag, 
  Sparkles,
  Info
} from 'lucide-react';

const academicCourses = [
  {
    code: 'CSE 4107',
    title: 'Machine Learning and Pattern Recognition',
    level: 'Undergraduate Curriculum',
    format: 'Lectures & Practical Labs',
    specialization: 'Applied Artificial Intelligence',
    description: 'Advanced supervised and unsupervised algorithms, convolutional neural architectures, and biomedical feature classification.'
  },
  {
    code: 'CSE 3205',
    title: 'Data Communication and Computer Networks',
    level: 'Undergraduate Curriculum',
    format: 'Lectures & Labs',
    specialization: 'Network & System Architectures',
    description: 'Layered network protocols, wireless transmission media, multiple access techniques, and routing architectures.'
  },
  {
    code: 'CSE 4311',
    title: 'Digital Signal Processing and Sensor Systems',
    level: 'Elective Specialization',
    format: 'Lectures & Project Labs',
    specialization: 'Signal Processing & IoT',
    description: 'Discrete-time signals, frequency domain transformations, acoustic sensor interfaces, and acoustic event localization.'
  }
];

const prospectiveResearchThemes = [
  {
    title: 'Biomedical Image Analytics and Histopathology',
    domain: 'Deep Learning frameworks for diagnostic histopathology image segmentation.',
    impact: 'Healthcare Automation & Medical AI',
    prerequisites: 'Foundations of Computer Vision, Matrix Calculus',
    skills: ['Python Programming', 'PyTorch Framework', 'Medical Data Preprocessing'],
    accepting: true
  },
  {
    title: 'Intelligent Transportation and Acoustic Sensing',
    domain: 'Internet of Things sensor nodes for traffic acoustic analysis and safety monitoring.',
    impact: 'Smart Cities & Acoustic IoT',
    prerequisites: 'Linear Systems, Signal Processing basics',
    skills: ['Embedded Microcontrollers', 'Signal Processing', 'Pattern Classification'],
    accepting: true
  },
  {
    title: 'Optical Character Recognition and Script Parsing',
    domain: 'Hybrid deep neural networks for complex isolated script and numerical symbol recognition.',
    impact: 'Digital Accessibility & Document Processing',
    prerequisites: 'Introductory Neural Networks',
    skills: ['Computer Vision', 'Deep Learning', 'Data Augmentation'],
    accepting: false
  }
];

// Interactive 3D Perspective Card Component
function AnimatedCard({ children, accent = 'blue' }: { children: React.ReactNode; accent?: 'blue' | 'indigo' }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
        className={`relative overflow-hidden rounded-2xl p-5 bg-white/95 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 transition-colors shadow-xs duration-300 ${
          accent === 'blue' 
            ? 'hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/10' 
            : 'hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/10'
        }`}
      >
        {/* Dynamic Spotlight Glow */}
        {isHovered && (
          <div
            className={`pointer-events-none absolute -inset-px transition-opacity duration-300 ${
              accent === 'blue'
                ? 'bg-[radial-gradient(400px_circle_at_var(--x)_var(--y),rgba(59,130,246,0.12),transparent_70%)]'
                : 'bg-[radial-gradient(400px_circle_at_var(--x)_var(--y),rgba(99,102,241,0.12),transparent_70%)]'
            }`}
            style={{
              // @ts-expect-error inline css variables
              '--x': `${mousePos.x}px`,
              '--y': `${mousePos.y}px`,
            }}
          />
        )}
        <div className="relative z-10">{children}</div>
      </motion.div>
    </div>
  );
}

export default function TeachingSection() {
  return (
    <section id="teaching" className="py-24 max-w-6xl mx-auto px-6 border-t border-slate-200 dark:border-slate-800 scroll-mt-20">
      
      {/* Header Area */}
      <div className="space-y-3 text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-mono font-medium shadow-xs"
        >
          <BookOpenCheck className="w-3.5 h-3.5" />
          ACADEMIC INSTRUCTION & SUPERVISION
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight"
        >
          Teaching & Thesis Mentorship
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Department of Computer Science and Engineering curriculum courses and prospective thesis topics for undergraduate researchers at Southeast University.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        
        {/* Left Column: Courses Offered */}
        <div className="space-y-6 text-left">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base pb-3 border-b border-slate-200 dark:border-slate-800">
            <BookOpenCheck className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
            <span>Assigned Courses (Southeast University)</span>
          </div>

          <div className="space-y-4">
            {academicCourses.map((course, idx) => (
              <motion.div
                key={course.code}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <AnimatedCard accent="blue">
                  <div className="space-y-3.5">
                    {/* Course Header Tags */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className="font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/20 px-2.5 py-0.5 rounded-md border border-blue-500/10 text-xs"
                      >
                        {course.code}
                      </motion.span>
                      <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px] font-medium">
                        {course.level}
                      </span>
                    </div>

                    {/* Course Title */}
                    <h3 className="font-bold text-base text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                      {course.title}
                    </h3>

                    {/* Specifications */}
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono font-medium">
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                        Format: {course.format}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                        Focus: {course.specialization}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {course.description}
                    </p>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Research Thesis Areas */}
        <div className="space-y-6 text-left">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base pb-3 border-b border-slate-200 dark:border-slate-800">
            <Users className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400" />
            <span>Undergraduate Thesis Supervision Areas</span>
          </div>

          <div className="space-y-4">
            {prospectiveResearchThemes.map((theme, idx) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <AnimatedCard accent="indigo">
                  <div className="space-y-4">
                    {/* Thesis Header Tags */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/10 text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400">
                        <Tag className="w-3 h-3" /> Impact: {theme.impact}
                      </span>
                      
                      {/* Live Pulsing Status */}
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${
                        theme.accepting 
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 animate-pulse' 
                          : 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-500'
                      }`}>
                        {theme.accepting ? 'Accepting Students' : 'No Open Slot'}
                      </span>
                    </div>

                    {/* Thesis Title & Scope */}
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                        {theme.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1 font-normal">
                        {theme.domain}
                      </p>
                    </div>

                    {/* Student Prerequisites Panel */}
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5">
                      <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-bold font-mono text-slate-500 dark:text-slate-400">STUDENT PREREQUISITES</span>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight pt-0.5">{theme.prerequisites}</p>
                      </div>
                    </div>

                    {/* Recommended Technical Skills */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      <div className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> Recommended Technical Skills:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {theme.skills.map((skill) => (
                          <motion.span 
                            key={skill}
                            whileHover={{ scale: 1.04, y: -1 }}
                            className="inline-flex items-center gap-1 text-[10px] font-medium bg-slate-100 dark:bg-slate-950 px-2 py-0.5 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 cursor-default"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}