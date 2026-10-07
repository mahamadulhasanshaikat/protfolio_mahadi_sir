// src/components/Stats.tsx
'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const keyMetrics = [
  { value: '200+', label: 'Opinion Editorials Published', subtext: 'National Broadsheets' },
  { value: '17+', label: 'Peer Review Evaluations', subtext: 'International Journals' },
  { value: '4+', label: 'Years at Brookhaven National Lab', subtext: 'US Dept. of Energy' },
  { value: '15+', label: 'Years in Higher Education', subtext: 'Teaching & Research' },
];

function StatCard({ item, idx }: { item: typeof keyMetrics[0]; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3D Tilt Spring Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { damping: 20, stiffness: 240 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { damping: 20, stiffness: 240 });

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
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -5 }}
        className="group relative overflow-hidden rounded-2xl p-5 bg-white/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/90 hover:border-blue-500/50 dark:hover:border-blue-500/40 shadow-xs hover:shadow-xl hover:shadow-blue-500/10 backdrop-blur-md transition-colors duration-300 flex flex-col justify-center text-center cursor-default"
      >
        {/* Dynamic Spotlight Glow */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(280px_circle_at_var(--x)_var(--y),rgba(59,130,246,0.15),transparent_70%)] transition-opacity duration-300"
            style={{
              // @ts-expect-error inline custom variable
              '--x': `${mousePos.x}px`,
              '--y': `${mousePos.y}px`,
            }}
          />
        )}

        <div className="relative z-10 space-y-1.5">
          {/* Animated Metric Value */}
          <motion.div 
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 350, damping: 15 }}
            className="text-3xl md:text-4xl font-black font-mono tracking-tight text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400"
          >
            {item.value}
          </motion.div>

          {/* Metric Label */}
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-snug">
            {item.label}
          </div>

          {/* Subtext Badge */}
          <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 pt-0.5">
            {item.subtext}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-12 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 backdrop-blur-xl transition-colors">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f60a_1px,transparent_1px)] dark:bg-[radial-gradient(#3b82f615_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {keyMetrics.map((item, idx) => (
          <StatCard key={item.label} item={item} idx={idx} />
        ))}
      </div>
    </section>
  );
}