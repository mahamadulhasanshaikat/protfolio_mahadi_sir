// src/components/ContactSection.tsx
'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Mail, 
  Clock, 
  MapPin, 
  Send, 
  MessageSquare, 
  Copy, 
  CheckCircle2, 
  Sparkles,
  Building2
} from 'lucide-react';

export default function ContactSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3D Tilt Spring Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { damping: 22, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { damping: 22, stiffness: 200 });

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

  const copyEmail = () => {
    navigator.clipboard.writeText('mahdin.mahboob@seu.edu.bd');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 max-w-5xl mx-auto px-6 border-t border-slate-200 dark:border-slate-800 scroll-mt-20">
      
      {/* Header Area */}
      <div className="space-y-3 text-center mb-14">
        <motion.div 
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-mono font-medium shadow-xs"
        >
          <MessageSquare className="w-3.5 h-3.5 animate-pulse" />
          ACADEMIC CORRESPONDENCE
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight"
        >
          Office Hours & Contact Information
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto"
        >
          Inquiries regarding undergraduate thesis supervision, scholarly paper reviews, and academic consultations.
        </motion.p>
      </div>

      {/* 3D Perspective Card Container */}
      <div className="perspective-[1000px]">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="group relative overflow-hidden rounded-[32px] p-8 md:p-10 bg-white/95 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-2xl transition-all duration-300 grid md:grid-cols-5 gap-10"
        >
          {/* Dynamic Spotlight Glow */}
          {isHovered && (
            <div
              className="pointer-events-none absolute -inset-px rounded-[32px] bg-[radial-gradient(450px_circle_at_var(--x)_var(--y),rgba(59,130,246,0.12),transparent_70%)] transition-opacity duration-300"
              style={{
                // @ts-expect-error inline custom variable
                '--x': `${mousePos.x}px`,
                '--y': `${mousePos.y}px`,
              }}
            />
          )}

          {/* Left Column: Location & Schedule (2 cols) */}
          <div className="relative z-10 md:col-span-2 space-y-6 text-left">
            <motion.div 
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
              className="space-y-1.5"
            >
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Office Location
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed flex items-start gap-2 pt-1 font-normal">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                Department of Computer Science and Engineering, Southeast University, 251/A and 252, Tejgaon Industrial Area, Dhaka-1208, Bangladesh
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
              className="space-y-1.5"
            >
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Consultation Schedule
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2 pt-1 font-normal">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                Monday & Wednesday (or by institutional appointment)
              </p>
            </motion.div>

            {/* Advisory Note */}
            <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/50 text-xs text-blue-800 dark:text-blue-300 leading-relaxed flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>Prospective thesis students and research collaborators are requested to provide their research statement prior to consultation.</span>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Box (3 cols) */}
          <div className="relative z-10 md:col-span-3 flex flex-col justify-center">
            <div className="p-7 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/90 space-y-5 text-left shadow-xs">
              
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Send Institutional Communication
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  Official academic inquiries, conference invitations, and mentorship queries should be directed to the primary university address.
                </p>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                {/* Send Email Mailto Link */}
                <motion.a
                  href="mailto:mahdin.mahboob@seu.edu.bd"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="group relative flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-blue-600 text-white font-medium text-xs shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 overflow-hidden cursor-pointer"
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                  <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span>mahdin.mahboob@seu.edu.bd</span>
                </motion.a>

                {/* Instant Copy Email Button */}
                <motion.button
                  onClick={copyEmail}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="inline-flex items-center justify-center gap-1.5 py-3.5 px-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 text-xs font-mono transition shadow-xs cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>

            </div>
          </div>

        </motion.div>
      </div>

    </section>
  );
}