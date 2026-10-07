// src/components/Hero.tsx
'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { 
  Building2, 
  ArrowUpRight, 
  BookOpen, 
  GraduationCap, 
  FileCheck2, 
  Mail, 
  Clock, 
  Cpu, 
  Radio, 
  FileText, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { facultyProfile } from '@/data/faculty';

// Interactive Animated Pillar Card Component
function PillarCard({ 
  icon: Icon, 
  title, 
  subtext, 
  accent = 'blue' 
}: { 
  icon: React.ComponentType<{ className?: string }>; 
  title: string; 
  subtext: string; 
  accent?: 'blue' | 'indigo' | 'cyan'; 
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { damping: 20, stiffness: 240 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { damping: 20, stiffness: 240 });

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

  const colorStyles = {
    blue: {
      icon: 'text-blue-600 dark:text-blue-400',
      border: 'hover:border-blue-500/50 dark:hover:border-blue-500/40',
      shadow: 'hover:shadow-blue-500/10',
      glow: 'rgba(59,130,246,0.14)'
    },
    indigo: {
      icon: 'text-indigo-600 dark:text-indigo-400',
      border: 'hover:border-indigo-500/50 dark:hover:border-indigo-500/40',
      shadow: 'hover:shadow-indigo-500/10',
      glow: 'rgba(99,102,241,0.14)'
    },
    cyan: {
      icon: 'text-cyan-600 dark:text-cyan-400',
      border: 'hover:border-cyan-500/50 dark:hover:border-cyan-500/40',
      shadow: 'hover:shadow-cyan-500/10',
      glow: 'rgba(6,182,212,0.14)'
    }
  }[accent];

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
        className={`group relative overflow-hidden rounded-2xl p-4 bg-white/85 dark:bg-slate-900/65 border border-slate-200/90 dark:border-slate-800 text-left space-y-2 shadow-xs hover:shadow-xl ${colorStyles.border} ${colorStyles.shadow} backdrop-blur-md transition-colors duration-300 cursor-default`}
      >
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
            style={{
              background: `radial-gradient(280px circle at var(--x) var(--y), ${colorStyles.glow}, transparent 70%)`,
              // @ts-expect-error inline custom variable
              '--x': `${mousePos.x}px`,
              '--y': `${mousePos.y}px`,
            }}
          />
        )}

        <div className="relative z-10 space-y-1.5">
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/60 dark:border-slate-800 w-fit group-hover:scale-110 transition-transform duration-300">
            <Icon className={`w-4 h-4 ${colorStyles.icon}`} />
          </div>
          <p className="text-xs font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            {title}
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
            {subtext}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const dossierCardRef = useRef<HTMLDivElement>(null);
  const [isDossierHovered, setIsDossierHovered] = useState(false);
  const [dossierMousePos, setDossierMousePos] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { damping: 22, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { damping: 22, stiffness: 200 });

  const handleDossierMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dossierCardRef.current) return;
    const rect = dossierCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setDossierMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleDossierMouseLeave = () => {
    setIsDossierHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative min-h-[96vh] pt-36 pb-24 flex items-center justify-center px-6 overflow-hidden">
      
      {/* Background Kinetic Dots & Atmospheric Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f612_1px,transparent_1px)] dark:bg-[radial-gradient(#3b82f620_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-transparent dark:from-blue-600/20 dark:via-indigo-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column (7 cols): Official Academic Persona */}
        <div className="lg:col-span-7 space-y-7 text-left">
          
          {/* Official Verification Pill */}
          <div className="flex flex-wrap items-center gap-3">
            <motion.div 
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-medium shadow-xs backdrop-blur-md cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Official Faculty Member • Southeast University
            </motion.div>

            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 hidden sm:inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              Office: Department of CSE (Tejgaon Campus)
            </span>
          </div>

          {/* Heading & Designation */}
          <div className="space-y-3">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.06]"
            >
              {facultyProfile.name}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 font-mono tracking-tight"
            >
              {facultyProfile.officialTitle}, {facultyProfile.department}
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-xl pt-1"
            >
              Faculty at <span className="font-semibold text-slate-900 dark:text-white">{facultyProfile.institution}</span>. Former Guest Researcher at <span className="font-semibold text-slate-900 dark:text-white">{facultyProfile.formerAppointment}</span>. Leading investigations in Deep Learning for Biomedical Imaging, Wireless Sensor Network Architectures, and public intellectualism through 200+ Opinion Editorials.
            </motion.p>
          </div>

          {/* Animated Research Pillars Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1"
          >
            <PillarCard
              icon={Cpu}
              title={facultyProfile.researchDomains[0].title}
              subtext={facultyProfile.researchDomains[0].subtext}
              accent="blue"
            />
            <PillarCard
              icon={Radio}
              title={facultyProfile.researchDomains[1].title}
              subtext={facultyProfile.researchDomains[1].subtext}
              accent="indigo"
            />
            <PillarCard
              icon={FileText}
              title={facultyProfile.researchDomains[2].title}
              subtext={facultyProfile.researchDomains[2].subtext}
              accent="cyan"
            />
          </motion.div>

          {/* Animated Interactive Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            {/* Primary Action Button */}
            <motion.a
              href="#research"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-medium text-xs sm:text-sm shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 overflow-hidden cursor-pointer"
            >
              {/* Shimmer sweep effect */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              
              <BookOpen className="w-4 h-4 transition-transform duration-300 group-hover:rotate-6" />
              <span>View Scholarly Papers</span>
            </motion.a>

            {/* Secondary Action Button */}
            <motion.a
              href={`mailto:${facultyProfile.officialEmail}`}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-medium text-xs sm:text-sm shadow-xs hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-md transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-blue-500 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span>Institutional Email</span>
            </motion.a>

            {/* Tertiary Action Button */}
            <motion.a
              href="https://www.linkedin.com/in/mahdinmk/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="group inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-transparent hover:bg-slate-100/70 dark:hover:bg-slate-900/60 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 text-xs font-medium transition-all"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </motion.div>

        </div>

        {/* Right Column (5 cols): Official Executive Dossier Frame with 3D Spotlight */}
        <div className="lg:col-span-5 flex justify-center perspective-[1000px]">
          <motion.div
            ref={dossierCardRef}
            onMouseMove={handleDossierMouseMove}
            onMouseEnter={() => setIsDossierHovered(true)}
            onMouseLeave={handleDossierMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -6 }}
            className="group relative w-full max-w-[390px] rounded-[28px] p-4 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-2xl hover:shadow-blue-500/15 backdrop-blur-2xl transition-all duration-300"
          >
            {/* Dynamic Spotlight Glow on Dossier Card */}
            {isDossierHovered && (
              <div
                className="pointer-events-none absolute -inset-px rounded-[28px] bg-[radial-gradient(350px_circle_at_var(--x)_var(--y),rgba(59,130,246,0.16),transparent_70%)] transition-opacity duration-300"
                style={{
                  // @ts-expect-error inline custom variable
                  '--x': `${dossierMousePos.x}px`,
                  '--y': `${dossierMousePos.y}px`,
                }}
              />
            )}

            {/* Visual Frame */}
            <div className="relative z-10 w-full h-[360px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/80 dark:border-slate-800/80">
              <Image
                src="/mahdin-mahboob.jpg"
                alt="Mahdin Mahboob - Assistant Professor"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 390px"
                className={`object-cover object-[center_15%] transition-transform duration-700 ${
                  isDossierHovered ? 'scale-105' : 'scale-100'
                }`}
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent opacity-95" />

              {/* Identification Bottom Plaque */}
              <div className="absolute bottom-3.5 left-4 right-4 text-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600/30 border border-blue-400/40 text-[10px] font-mono text-cyan-300 backdrop-blur-md mb-1.5">
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                  SEU Faculty ID: 060028
                </div>
                <h3 className="text-base font-bold tracking-tight">{facultyProfile.name}</h3>
                <p className="text-xs text-slate-300 font-light">{facultyProfile.institution}, {facultyProfile.campus}</p>
              </div>
            </div>

            {/* Institution Credentials */}
            <div className="relative z-10 grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 mt-3 text-left px-1">
              <div className="space-y-0.5">
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  AFFILIATION
                </p>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {facultyProfile.institution}
                </p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  UNITED STATES RESEARCH
                </p>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Brookhaven National Lab
                </p>
              </div>
            </div>

            {/* Verified Credentials Lines */}
            <div className="relative z-10 mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5 text-left px-1">
              <div className="flex items-center gap-2 text-[11px] text-slate-700 dark:text-slate-300 font-mono">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Master of Science (Stony Brook & Southampton)</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-700 dark:text-slate-300 font-mono">
                <FileCheck2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>200+ Opinion Editorials & Research Papers</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}