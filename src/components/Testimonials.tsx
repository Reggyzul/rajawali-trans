import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/cars';
import { Testimonial } from '../types';
import { Star, Quote, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface TestimonialsProps {
  lang: 'ID' | 'EN';
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const [reviews] = useState<Testimonial[]>(TESTIMONIALS);
  const t = TRANSLATIONS[lang];

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-[#f8fafc] text-[#0f172a] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Decorative Soft Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="testimonials-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-display font-extrabold text-xs tracking-wider uppercase shadow-sm">
            <MessageSquare className="w-4 h-4 text-orange-600" />
            <span>ULASAN & TESTIMONI PENUMPANG</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight uppercase leading-tight">
            Pengalaman <span className="text-orange-600">Penumpang Kami</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Kepercayaan dan kepuasan Anda adalah kebanggaan utama kami dalam setiap perjalanan rute Timor.
          </p>
        </div>

        {/* ULTRA-PROFESSIONAL PRECISE 3-COLUMN TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((testi, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={testi.id}
              className="bg-white border border-slate-200/90 rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Decorative Subtle Quote Icon in Background */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 fill-current opacity-80 group-hover:text-orange-100 transition-colors pointer-events-none" />

              <div className="space-y-5 relative z-10 text-left">
                
                {/* 5-Star Rating Row & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(testi.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Testimonial Quote Text */}
                <p className="font-sans text-slate-700 italic text-sm leading-relaxed font-medium">
                  "{testi.text}"
                </p>

              </div>

              {/* Renter Profile Header Footer */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-3.5 relative z-10 text-left">
                <img
                  src={testi.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'}
                  alt={testi.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-500 shadow-md shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200';
                  }}
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-tight">
                    {testi.name}
                  </h4>
                  <p className="font-sans text-[11px] text-slate-500 font-medium">
                    {testi.role}
                  </p>
                  
                  {/* Car Model Badge */}
                  {testi.carModel && (
                    <span className="inline-flex items-center gap-1 bg-orange-50 text-orange-700 text-[9px] font-bold px-2 py-0.5 rounded-full border border-orange-200 mt-1">
                      <Sparkles className="w-2.5 h-2.5 text-orange-600" />
                      <span>{testi.carModel}</span>
                    </span>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
