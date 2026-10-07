// src/components/OpEdSection.tsx
'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Newspaper, ArrowUpRight, BookOpen } from 'lucide-react';

const opinionEditorials = [
  {
    title: 'Transforming Higher Education in Bangladesh through Technology',
    outlet: 'The Daily Star and Dhaka Tribune',
    topic: 'Education and Policy Framework',
    summary: 'Evaluating curriculum modernizations, academic research budgets, and digital literacy frameworks in higher education.',
    accent: 'blue'
  },
  {
    title: 'Road Safety and Intelligent Transportation: An Engineering Perspective',
    outlet: 'National English Dailies',
    topic: 'Intelligent Transportation Systems',
    summary: 'Proposing acoustic sensor systems, empirical traffic data frameworks, and structural infrastructure enhancements for urban road safety.',
    accent: 'indigo'
  },
  {
    title: 'From Bangladesh to Brookhaven: Reflections of a Guest Researcher',
    outlet: 'Personal Portfolio Archive',
    topic: 'International Scientific Collaboration',
    summary: 'Reflections on multinational laboratory research environments, STEM mentorship, and global graduate opportunities.',
    accent: 'cyan'
  }
];

function OpEdCard({ 
  article, 
  idx 
}: { 
  article: typeof opinionEditorials[0]; 
  idx: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3D Tilt Spring Physics
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
    <div className="perspective-[1000px] h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -5 }}
        className="group relative h-full p-6 rounded-3xl bg-white/95 dark:bg-slate-900/65 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/40 shadow-xs hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-md transition-colors duration-300 flex flex-col justify-between text-left space-y-5 cursor-default overflow-hidden"
      >
        {/* Dynamic Spotlight Glow */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl bg-[radial-gradient(320px_circle_at_var(--x)_var(--y),rgba(59,130,246,0.12),transparent_70%)] transition-opacity duration-300"
            style={{
              // @ts-expect-error inline custom variable
              '--x': `${mousePos.x}px`,
              '--y': `${mousePos.y}px`,
            }}
          />
        )}

        <div className="relative z-10 space-y-3">
          {/* Topic Capsule with Pop Hover */}
          <div className="flex items-center justify-between">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-[10px] font-mono tracking-wider uppercase font-bold text-blue-600 dark:text-blue-400"
            >
              {article.topic}
            </motion.span>
            <BookOpen className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-blue-500 transition-colors" />
          </div>

          {/* Title */}
          <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-snug">
            "{article.title}"
          </h3>

          {/* Summary */}
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal pt-1">
            {article.summary}
          </p>
        </div>

        {/* Outlet / Publishing Broad-sheet */}
        <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <span className="truncate group-hover:translate-x-0.5 transition-transform duration-200">
            {article.outlet}
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:text-blue-500 transition-all shrink-0" />
        </div>
      </motion.div>
    </div>
  );
}

export default function OpEdSection() {
  return (
    <section id="articles" className="py-24 max-w-6xl mx-auto px-6 border-t border-slate-200 dark:border-slate-800 scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div className="space-y-3 text-left">
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-mono font-medium shadow-xs"
          >
            <Newspaper className="w-3.5 h-3.5 animate-pulse" />
            PUBLIC INTELLECTUALISM AND SCHOLARSHIP
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            Opinion Editorials and National Articles
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm text-slate-600 dark:text-slate-400 max-w-xl"
          >
            Author of over two hundred published articles in premier English-language broadsheets.
          </motion.p>
        </div>

        {/* Animated Archive CTA Button */}
        <motion.a 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          href="https://mahdinmahboob.wordpress.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 px-5 py-3 rounded-xl transition-all shadow-xs hover:shadow-lg hover:shadow-blue-500/10 shrink-0 cursor-pointer"
        >
          <span>WordPress Archive</span>
          <ExternalLink className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.a>
      </div>

      {/* 3D Animated Card Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {opinionEditorials.map((article, idx) => (
          <OpEdCard key={article.title} article={article} idx={idx} />
        ))}
      </div>
    </section>
  );
}