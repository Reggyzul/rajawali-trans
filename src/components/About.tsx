import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, CheckCircle2, Compass, Award, HeartHandshake, Quote, Eye, Zap, Shield } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white text-[#0f172a] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Subtle Soft Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5" id="about-heading">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-display font-extrabold text-xs tracking-widest uppercase shadow-sm"
          >
            <Compass className="w-4 h-4 text-orange-600" />
            <span>PROFIL & FILOSOFI RAJAWALI TRANS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight uppercase leading-tight"
          >
            Visi & Filosofi <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Rajawali Trans</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Mengenal lebih dekat dedikasi, standar kualitas, serta makna mendalam di balik nama Rajawali Trans sebagai mitra perjalanan terpercaya di NTT.
          </motion.p>
        </div>

        {/* 2-COLUMN PROFILE & PHILOSOPHY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-12">
          
          {/* LEFT COLUMN: BRAND LOGO SHOWCASE & COMPANY PROFILE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-8 shadow-2xl border border-slate-700/60 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Background Orange Glow Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10 text-center">
              
              {/* Logo Frame */}
              <div className="relative inline-block mx-auto">
                <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full" />
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-slate-800/90 border-2 border-orange-500/40 p-4 flex items-center justify-center mx-auto shadow-2xl backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/logo.png"
                    alt="Logo Rajawali Trans"
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 bg-orange-950/80 px-3 py-1 rounded-full border border-orange-800/50">
                  LAYANAN TRAVEL & CARTER
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mt-3">
                  RAJAWALI <span className="text-orange-500">TRANS</span>
                </h3>
                <p className="font-sans text-slate-400 text-xs mt-1 font-medium">
                  Kefamenanu - Kupang PP & Carter Privat
                </p>
              </div>

              {/* Motto Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 block">MOTTO KAMI</span>
                <p className="font-sans text-xs text-slate-300 italic leading-relaxed">
                  "Mengutamakan keamanan, ketepatan waktu, dan kenyamanan perjalanan di setiap jengkal rute tanah Timor."
                </p>
              </div>

            </div>

            {/* Bottom Status Badges */}
            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-around text-center relative z-10">
              <div>
                <span className="font-display font-black text-lg text-orange-400 block">100%</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Terpercaya</span>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <span className="font-display font-black text-lg text-orange-400 block">24/7</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Siap Melayani</span>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <span className="font-display font-black text-lg text-orange-400 block">VIP</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Standar Nyaman</span>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: DEEP PERSUASIVE PHILOSOPHY */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden space-y-6"
          >
            <div className="space-y-6 text-left">
              
              <div className="flex items-center gap-2 text-orange-600">
                <Award className="w-5 h-5" />
                <span className="font-display font-extrabold text-xs tracking-wider uppercase">FILOSOFI DIBALIK NAMA RAJAWALI</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0f172a] uppercase tracking-tight leading-snug">
                Makna Mendalam & <span className="text-orange-600">Filosofi Keunggulan</span>
              </h3>

              {/* 3 Pillars of Philosophy */}
              <div className="space-y-4">
                
                {/* Pillar 1 */}
                <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100 flex items-start gap-4 hover:border-orange-300 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-md mt-0.5">
                    <Zap className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide">
                      1. Ketangguhan & Kecepatan Presisi
                    </h4>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium mt-1">
                      Rajawali adalah raja udara yang tangguh terbang melintasi berbagai kondisi. Filosofi ini mewakili ketahanan armada dan keandalan driver kami dalam menembus rute darat Timor dengan cepat, aman, dan tepat waktu.
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 hover:border-orange-300 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md mt-0.5">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide">
                      2. Sayap Perlindungan & Kenyamanan
                    </h4>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium mt-1">
                      Bagaikan kepakan sayap Rajawali yang melingkungi dan melindungi, kami berkomitmen memberikan rasa aman, kabin yang steril, dan kenyamanan maksimal bagi setiap penumpang dan keluarga tercinta.
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 hover:border-orange-300 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-md mt-0.5">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide">
                      3. Penglihatan Tajam & Komitmen Kejujuran
                    </h4>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium mt-1">
                      Mata Rajawali yang tajam melambangkan ketelitian standar operasional, ketepatan waktu penjemputan, serta kejujuran dalam pelayanan tanpa biaya tersembunyi.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

        {/* CORE PROFIL & SEJARAH STATEMENT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden space-y-8"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="font-display font-black text-lg text-[#0f172a] uppercase tracking-tight block">
                  PROFIL & SEJARAH PERUSAHAAN
                </span>
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider block mt-0.5">
                  Perjalanan Dedikasi Dari Rental Kasih Menuju Rajawali Trans
                </span>
              </div>
            </div>

            <Quote className="w-8 h-8 text-orange-200 shrink-0 hidden sm:block" />
          </div>

          {/* 4-PARAGRAPH NARRATIVE STORYTIME BOX */}
          <div className="space-y-6">
            
            {/* Paragraph 1 - Semangat Kebersamaan */}
            <div className="bg-gradient-to-r from-orange-50/70 via-slate-50 to-white border-l-4 border-orange-500 p-5 sm:p-6 rounded-r-2xl border-y border-r border-slate-200/80 shadow-xs text-left space-y-2">
              <div className="flex items-center gap-2 text-orange-600 font-display font-bold text-xs uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                <span>1. Komitmen & Semangat Kebersamaan TTU</span>
              </div>
              <p className="font-sans text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                Rajawali Trans merupakan perusahaan jasa transportasi yang lahir dari semangat kebersamaan dan komitmen untuk menghadirkan layanan transportasi yang aman, nyaman, dan terpercaya bagi masyarakat Kabupaten Timor Tengah Utara (TTU).
              </p>
            </div>

            {/* Paragraph 2 - Fondasi Rental Kasih */}
            <div className="bg-slate-50 border-l-4 border-slate-800 p-5 sm:p-6 rounded-r-2xl border-y border-r border-slate-200/80 shadow-xs text-left space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-xs uppercase tracking-wider">
                <Compass className="w-4 h-4 text-orange-600" />
                <span>2. Jejak Perjalanan Dari Rental Kasih</span>
              </div>
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                Perjalanan kami bermula dari <strong className="text-slate-900 font-bold">Rental Kasih</strong>, sebuah usaha yang menjadi fondasi dalam membangun pengalaman, kepercayaan pelanggan, serta pemahaman akan kebutuhan transportasi masyarakat. Seiring waktu, melalui berbagai tantangan dan proses pembelajaran selama bertahun-tahun, lahirlah identitas baru sebagai <strong className="text-orange-600 font-bold">Rajawali Trans</strong> dengan komitmen untuk memberikan pelayanan yang lebih profesional dan berkualitas.
              </p>
            </div>

            {/* Paragraph 3 - Filosofi Nama Rajawali */}
            <div className="bg-gradient-to-r from-orange-50/70 via-amber-50/40 to-white border-l-4 border-orange-600 p-5 sm:p-6 rounded-r-2xl border-y border-r border-slate-200/80 shadow-xs text-left space-y-2">
              <div className="flex items-center gap-2 text-orange-600 font-display font-bold text-xs uppercase tracking-wider">
                <Zap className="w-4 h-4 fill-current" />
                <span>3. Simbol Keberanian & Visi Masa Depan</span>
              </div>
              <p className="font-sans text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                Nama <strong className="text-orange-600 font-bold">Rajawali</strong> dipilih sebagai simbol keberanian, ketangguhan, ketepatan, dan visi yang jauh ke depan. Nilai-nilai tersebut menjadi dasar dalam setiap langkah kami untuk terus berkembang, menjaga kepercayaan pelanggan, dan memberikan pelayanan terbaik dalam setiap perjalanan.
              </p>
            </div>

            {/* Paragraph 4 - Komitmen Berkelanjutan */}
            <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-2xl border border-slate-800 shadow-lg text-left space-y-2">
              <div className="flex items-center gap-2 text-orange-400 font-display font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>4. Komitmen Keamanan & Kepuasan Pelanggan</span>
              </div>
              <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                Hingga saat ini, Rajawali Trans terus berkomitmen menjadi mitra transportasi yang mengutamakan keselamatan, kenyamanan, dan kepuasan pelanggan, serta memberikan kontribusi positif bagi kemajuan masyarakat Timor Tengah Utara.
              </p>
            </div>

          </div>

          {/* 3 Key Operational Value Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3 hover:border-orange-300 transition-colors text-left">
              <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 mt-0.5 shadow-xs">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-[#0f172a] block">Keselamatan Utama</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5 leading-snug">Unit terawat & driver terlatih</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3 hover:border-orange-300 transition-colors text-left">
              <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 mt-0.5 shadow-xs">
                <HeartHandshake className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-[#0f172a] block">Kepercayaan Masyarakat</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5 leading-snug">Layanan ramah & profesional</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3 hover:border-orange-300 transition-colors text-left">
              <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 mt-0.5 shadow-xs">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-[#0f172a] block">Kontribusi Bagi TTU</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5 leading-snug">Memajukan transportasi lokal</span>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
