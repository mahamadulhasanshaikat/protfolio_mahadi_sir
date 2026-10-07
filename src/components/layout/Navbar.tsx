// src/components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, GraduationCap, BookOpenCheck, Newspaper, Sparkles } from 'lucide-react';
import { ThemeToggle } from '../theme/ThemeToggle';

const navItems = [
  { name: 'Research', href: '#research', icon: BookOpen },
  { name: 'Teaching', href: '#teaching', icon: BookOpenCheck },
  { name: 'Milestones', href: '#milestones', icon: Award },
  { name: 'Journey', href: '#journey', icon: GraduationCap },
  { name: 'Articles', href: '#articles', icon: Newspaper },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.header 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="fixed top-4 inset-x-0 mx-auto max-w-4xl z-50 px-4"
    >
      <nav className="relative flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.45)] transition-all">
        
        {/* Brand / Logo */}
        <motion.a 
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-1.5 font-bold text-xs md:text-sm tracking-wider text-slate-900 dark:text-white transition cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 group-hover:scale-125 transition-transform" />
          <span>MAHDIN</span>
          <span className="text-blue-600 dark:text-blue-400 font-extrabold">MAHBOOB</span>
        </motion.a>

        {/* Center / Right Links */}
        <div className="flex items-center gap-3 md:gap-5">
          <div 
            onMouseLeave={() => setHoveredIndex(null)}
            className="hidden sm:flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300"
          >
            {navItems.map((item, idx) => {
              const isHovered = hoveredIndex === idx;

              return (
                <motion.a 
                  key={item.name} 
                  href={item.href}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {/* Floating Smooth Background Pill on Hover */}
                  {isHovered && (
                    <motion.div
                      layoutId="navHoverPill"
                      className="absolute inset-0 rounded-xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-xs"
                      transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                    />
                  )}

                  <item.icon className="relative z-10 w-3.5 h-3.5 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative z-10 font-medium tracking-tight">{item.name}</span>
                </motion.a>
              );
            })}
          </div>

          {/* Theme Toggle Button Area */}
          <div className="flex items-center gap-2 border-l border-slate-200/80 dark:border-slate-800/80 pl-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ThemeToggle />
            </motion.div>
          </div>
        </div>

      </nav>
    </motion.header>
  );
}