// src/components/BentoAchievements.tsx
'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, Microscope, Landmark, ScrollText, CheckCircle2 } from 'lucide-react';

const milestonesData = [
  {
    title: 'Brookhaven National Laboratory',
    subtitle: 'United States Department of Energy',
    period: '2019 – 2023',
    badge: 'National Scientific Laboratory',
    metric: 'Computational Science & Modeling',
    description: 'Served as Guest Researcher contributing to advanced computational workflows, machine learning integrations, and interdisciplinary data analytics under the US Department of Energy.',
    highlights: ['DOE National Laboratory Appointment', 'Multidisciplinary Computational Collaboration'],
    icon: Microscope,
    accent: 'blue',
    colSpan: 'md:col-span-2'
  },
  {
    title: 'Founding Chair, IEEE Student Branch',
    subtitle: 'BRAC University',
    period: 'Established 2008',
    badge: 'Institutional Leadership',
    metric: 'Pioneered Entity',
    description: 'Pioneered and chartered the first IEEE Student Branch at BRAC University, building international engineering seminar platforms and student technical leadership.',
    highlights: ['IEEE Student Branch Charter', 'Executive Leadership in STEM'],
    icon: Landmark,
    accent: 'indigo',
    colSpan: 'md:col-span-1'
  },
  {
    title: 'Dual International Master Degrees',
    subtitle: 'Stony Brook University & University of Southampton',
    period: 'United States & United Kingdom',
    badge: 'Graduate Distinction',
    metric: 'Dual Transatlantic Scholar',
    description: 'Earned Master of Science in Computer Engineering from New York and Master of Science in Operational Telecommunications from the United Kingdom.',
    highlights: ['Stony Brook University (NY)', 'University of Southampton (UK)'],
    icon: Award,
    accent: 'emerald',
    colSpan: 'md:col-span-1'
  },
  {
    title: 'Public Intellectualism & Science Policy',
    subtitle: 'National English Broadsheets',
    period: '200+ Columns Published',
    badge: 'National Broadsheet Writer',
    metric: 'Mass Public Impact',
    description: 'Authored more than two hundred analytical opinion editorials across The Daily Star and Dhaka Tribune, translating artificial intelligence, higher education reform, and intelligent transportation into public discourse.',
    highlights: ['The Daily Star Columnist', 'Dhaka Tribune Op-Ed Contributor'],
    icon: ScrollText,
    accent: 'cyan',
    colSpan: 'md:col-span-2'
  }
];

function BentoCard({ item, idx }: { item: typeof milestonesData[0]; idx: number }) {
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

  const colorConfig = {
    blue: {
      border: 'hover:border-blue-500/50 dark:hover:border-blue-500/40',
      shadow: 'hover:shadow-blue-500/10',
      glow: 'rgba(59,130,246,0.14)',
      icon: 'text-blue-600 dark:text-blue-400',
      badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
    },
    indigo: {
      border: 'hover:border-indigo-500/50 dark:hover:border-indigo-500/40',
      shadow: 'hover:shadow-indigo-500/10',
      glow: 'rgba(99,102,241,0.14)',
      icon: 'text-indigo-600 dark:text-indigo-400',
      badge: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20'
    },
    emerald: {
      border: 'hover:border-emerald-500/50 dark:hover:border-emerald-500/40',
      shadow: 'hover:shadow-emerald-500/10',
      glow: 'rgba(16,185,129,0.14)',
      icon: 'text-emerald-600 dark:text-emerald-400',
      badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
    },
    cyan: {
      border: 'hover:border-cyan-500/50 dark:hover:border-cyan-500/40',
      shadow: 'hover:shadow-cyan-500/10',
      glow: 'rgba(6,182,212,0.14)',
      icon: 'text-cyan-600 dark:text-cyan-400',
      badge: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20'
    }
  }[item.accent as 'blue' | 'indigo' | 'emerald' | 'cyan'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`perspective-[1000px] h-full ${item.colSpan}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ y: -5 }}
        className={`group relative h-full overflow-hidden rounded-3xl p-6 md:p-7 bg-white/95 dark:bg-slate-900/65 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-2xl ${colorConfig.border} ${colorConfig.shadow} backdrop-blur-md transition-colors duration-300 flex flex-col justify-between space-y-5 text-left cursor-default`}
      >
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
            style={{
              background: `radial-gradient(380px circle at var(--x) var(--y), ${colorConfig.glow}, transparent 70%)`,
              // @ts-expect-error inline custom variable
              '--x': `${mousePos.x}px`,
              '--y': `${mousePos.y}px`,
            }}
          />
        )}

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className={`text-[10px] font-mono tracking-wider uppercase font-bold px-3 py-1 rounded-full border ${colorConfig.badge}`}>
              {item.badge}
            </span>
            <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200/60 dark:border-slate-800 group-hover:scale-110 transition-transform duration-300">
              <item.icon className={`w-4 h-4 ${colorConfig.icon}`} />
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-snug">
              {item.title}
            </h3>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 font-mono">
              {item.subtitle}
            </p>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-1 text-[10px] font-medium font-mono bg-slate-50 dark:bg-slate-950/80 px-2.5 py-0.5 rounded-md border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
              >
                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            {item.period}
          </span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500">
            {item.metric}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BentoAchievements() {
  return (
    <section id="milestones" className="relative py-24 max-w-6xl mx-auto px-6 border-t border-slate-200 dark:border-slate-800 scroll-mt-20">
      
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f60a_1px,transparent_1px)] dark:bg-[radial-gradient(#3b82f612_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10" />

      <div className="space-y-3 text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-mono font-medium shadow-xs"
        >
          <Award className="w-3.5 h-3.5 animate-pulse" />
          DISTINCTIONS & INSTITUTIONAL MILESTONES
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight"
        >
          Career Milestones & Leadership
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Recognized track record across United States national laboratories, graduate scholarship, IEEE student leadership, and public scholarship.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {milestonesData.map((item, idx) => (
          <BentoCard key={item.title} item={item} idx={idx} />
        ))}
      </div>
    </section>
  );
}