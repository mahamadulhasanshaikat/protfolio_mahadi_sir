// src/components/layout/Footer.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  Mail, 
  GraduationCap, 
  ArrowUp, 
  ShieldCheck, 
  BookOpen, 
  ArrowUpRight,
  Code2
} from 'lucide-react';
import { siteConfig } from '@/data/faculty';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 text-xs text-slate-600 dark:text-slate-400 backdrop-blur-2xl transition-colors">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f608_1px,transparent_1px)] dark:bg-[radial-gradient(#3b82f612_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/70 dark:border-slate-800/70 text-left">
          
          {/* Col 1: Faculty Persona & Status (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-400 font-mono text-[10px] font-semibold mb-2">
                <ShieldCheck className="w-3 h-3" />
                Southeast University Faculty ID: 060028
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                Mahdin Mahboob
              </h3>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 font-mono">
                Assistant Professor of Computer Science and Engineering
              </p>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal max-w-sm">
              Dedicated to computational intelligence, biomedical diagnostics, sensor networks, and public intellectualism through science policy editorials.
            </p>

            <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Campus: Tejgaon Industrial Area, Dhaka-1208</span>
            </div>
          </div>

          {/* Col 2: Institutional & Lab Credentials (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Key Affiliations
            </p>
            <ul className="space-y-2 text-xs font-medium">
              <li className="flex items-start gap-2">
                <Building2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <span>Southeast University</span>
              </li>
              <li className="flex items-start gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                <span>Brookhaven National Laboratory</span>
              </li>
              <li className="flex items-start gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Stony Brook University (NY)</span>
              </li>
              <li className="flex items-start gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                <span>University of Southampton (UK)</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Research Networks & Scholarship (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Scholarly Profiles & Inquiries
            </p>
            
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              For research inquiries, student supervision proposals, or invited reviews:
            </p>

            <div className="pt-1">
              <a 
                href="mailto:mahdin.mahboob@seu.edu.bd" 
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                mahdin.mahboob@seu.edu.bd
              </a>
            </div>

            {/* Social & Academic Platform Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <motion.a 
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://scholar.google.com/citations?user=DLpOsigAAAAJ&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Google Scholar Profile"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 transition shadow-xs group"
              >
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </motion.a>

              <motion.a 
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/mahdinmk/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 transition shadow-xs group"
              >
                <svg className="w-4 h-4 fill-current text-blue-600 dark:text-blue-400" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </motion.a>

              <motion.a 
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://mahdinmahboob.wordpress.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="WordPress Article Archive"
                aria-label="WordPress Article Archive"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 transition shadow-xs group"
              >
                <svg 
                  className="w-4 h-4 fill-current text-blue-600 dark:text-blue-400" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 4.09 2.046 7.702 5.176 9.873L2.35 12.392c-.394-.972.037-1.293.591-1.293.284 0 .577.064.834.118l3.095 9.055a11.968 11.968 0 0 1-.941-.168L9.95 8.44c.254-.662.554-1.167.968-1.167.187 0 .36.05.52.118l-3.267 9.53a11.967 11.967 0 0 1 3.829-1.026V12.92c0-1.874 1.089-2.906 2.658-2.906.945 0 1.65.348 2.052.797l-2.052 5.96a11.964 11.964 0 0 0 7.171-4.767c0-2.107-.985-3.582-2.348-4.733-1.635-1.381-3.27-1.381-3.27-1.381L12.004 0zm0 1.333c5.891 0 10.667 4.776 10.667 10.667 0 1.965-.532 3.805-1.46 5.39l-3.328-9.742c-.22-.656-.475-.856-1.026-.856-.37 0-.745.06-1.106.136l4.248 12.44A10.648 10.648 0 0 1 12 22.667c-1.99 0-3.855-.548-5.45-1.498l5.45-15.936v-3.9z" />
                </svg>
              </motion.a>

              <motion.a 
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/mahdin" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Facebook Profile"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 transition shadow-xs group"
              >
                <svg className="w-4 h-4 fill-current text-blue-600 dark:text-blue-400" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </motion.a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Version, Developer Credit & Back-to-Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500 dark:text-slate-500">
          
          {/* Copyright & Version Badge */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            <p>
              © 2026 Mahdin Mahboob • Department of CSE, Southeast University.
            </p>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-150 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] text-slate-600 dark:text-slate-400 font-semibold">
              v{siteConfig.version}
            </span>
          </div>

          {/* Developer Credit & Back to Top */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Developer Portfolio Link */}
            <motion.a
              href="https://mhshaikat.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/90 dark:bg-slate-900 dark:hover:bg-slate-850 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-xs group"
            >
              <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Developed by</span>
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                MHS
              </span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer shadow-xs"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>

          </div>

        </div>

      </div>
    </footer>
  );
}