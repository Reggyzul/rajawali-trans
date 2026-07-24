import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, CheckCircle2, Compass, Award, HeartHandshake, Quote } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white text-[#0f172a] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Subtle Soft Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3.5" id="about-heading">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-display font-extrabold text-xs tracking-widest uppercase shadow-sm"
          >
            <Compass className="w-4 h-4 text-orange-600" />
            <span>VISI & MISI PO. RAJAWALI TRANS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight uppercase leading-tight"
          >
            Komitmen Pelayanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Terpercaya & Berkualitas</span>
          </motion.h2>
        </div>

        {/* ULTRA-PRECISE PROFESSIONAL SINGLE COLUMN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-slate-200/60 relative overflow-hidden space-y-8"
        >
          {/* Subtle Top Right Decorative Accent */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-orange-400/10 via-transparent to-transparent rounded-bl-full pointer-events-none" />

          {/* Header Badge & Quote Icon Row */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display font-black text-base text-[#0f172a] uppercase tracking-tight block">
                  STANDAR OPERASIONAL UTAMA
                </span>
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider block mt-0.5">
                  Kupang & Wilayah Sekitarnya
                </span>
              </div>
            </div>

            <Quote className="w-8 h-8 text-orange-200 shrink-0 hidden sm:block" />
          </div>

          {/* Core Visi & Misi Statement Box with High Precision Typography */}
          <div className="bg-gradient-to-br from-orange-50/50 via-slate-50/80 to-white border-l-4 border-orange-500 p-6 sm:p-8 rounded-r-2xl border-y border-r border-slate-200/80 shadow-inner relative">
            <p className="font-sans text-base sm:text-[17px] text-slate-800 leading-[1.8] font-medium tracking-normal text-justify sm:text-left">
              "Sebagai penyedia layanan rental mobil terpercaya di Kupang dan sekitarnya, kami menghadirkan armada yang terawat, pelayanan profesional, dan standar operasional yang mengutamakan keamanan, kenyamanan, serta kepuasan pelanggan. Setiap perjalanan didukung oleh layanan yang andal, efisien, dan berorientasi pada kualitas."
            </p>
          </div>

          {/* 3 Precise Pillar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3 hover:border-orange-300 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 mt-0.5 shadow-xs">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-[#0f172a] block">Armada Terawat</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5 leading-snug">Unit bersih, steril & selalu prima</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3 hover:border-orange-300 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 mt-0.5 shadow-xs">
                <HeartHandshake className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-[#0f172a] block">Pelayanan Profesional</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5 leading-snug">Driver ramah & berpengalaman</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3 hover:border-orange-300 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 mt-0.5 shadow-xs">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-[#0f172a] block">Berorientasi Kualitas</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5 leading-snug">Perjalanan aman & efisien</span>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
