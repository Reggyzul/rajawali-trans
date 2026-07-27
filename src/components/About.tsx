import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, CheckCircle2, Compass, Award, HeartHandshake, Quote, Eye, Zap, Shield, Target, User, Car, PhoneCall } from 'lucide-react';
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1" id="about-heading">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-['Great_Vibes'] text-4xl sm:text-5xl text-orange-500 font-normal block leading-tight">
              About Our Company
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl text-[#0f172a] tracking-tight uppercase leading-tight"
          >
            Profil, Sejarah & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Visi Misi</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto pt-1"
          >
            Mengenal lebih dekat dedikasi, rekam jejak perjalanan, serta visi misi utama Rajawali Trans sebagai penyedia transportasi terpercaya di TTU, NTT.
          </motion.p>
        </div>

        {/* 1. TENTANG PERUSAHAAN & PROFIL SEJARAH */}
        <motion.div
          id="tentang-perusahaan"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden space-y-8"
        >
          {/* Subtitle in Cursive Script & Main Heading */}
          <div className="border-b border-slate-100 pb-5 text-left">
            <span className="font-['Great_Vibes'] text-3xl sm:text-4xl text-orange-500 font-normal block leading-tight">
              Profil & Sejarah
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0f172a] uppercase tracking-tight">
              Perjalanan Dedikasi <span className="text-orange-600">Rajawali Trans</span>
            </h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Dari Rental Kasih Menuju Layanan Transportasi Profesional di TTU
            </p>
          </div>

          {/* 2-COLUMN GRID: LEFT = EMPOS TEFA KETUA PHOTO, RIGHT = NARRATIVE PARAGRAPHS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT COLUMN: EMPOS TEFA KETUA PORTRAIT CARD */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-full max-w-xs group">
                {/* Glow & Border Accent Frame */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 pointer-events-none" />
                
                <div className="relative rounded-3xl overflow-hidden border-2 border-orange-200 shadow-2xl bg-slate-900 group-hover:border-orange-400 transition-all duration-300">
                  <img
                    src="/diego_founder.jpg"
                    alt="Empos Tefa - Ketua Rajawali Trans"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Bottom Profile Badge Overlay */}
                  <div className="bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent p-4 pt-8 text-center text-white space-y-1">
                    <span className="bg-orange-500 text-white font-display font-extrabold text-[10px] uppercase tracking-widest px-3 py-0.5 rounded-full inline-block shadow-md">
                      KETUA RAJAWALI TRANS
                    </span>
                    <h4 className="font-display font-black text-xl text-white tracking-tight uppercase pt-1">
                      EMPOS TEFA
                    </h4>
                    <p className="font-sans text-[11px] text-slate-300 font-medium leading-snug">
                      Ketua Rajawali Trans
                    </p>
                  </div>
                </div>
              </div>

              {/* Persuasive Founder Quote */}
              <div className="mt-4 p-3.5 rounded-2xl bg-orange-50/80 border border-orange-200/80 text-center max-w-xs">
                <p className="font-sans text-xs text-slate-700 italic font-semibold leading-relaxed">
                  "Membangun layanan transportasi dari hati, dedikasi, dan menjaga kepercayaan masyarakat TTU."
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: PARAGRAPHS WITH CHECKMARKS */}
            <div className="lg:col-span-8 space-y-5 text-left">
              
              {/* Paragraph 1 */}
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  <strong className="text-[#0f172a] font-bold">Rajawali Trans</strong> merupakan perusahaan jasa transportasi yang lahir dari semangat kebersamaan dan komitmen untuk menghadirkan layanan transportasi yang aman, nyaman, dan terpercaya bagi masyarakat Kabupaten Timor Tengah Utara (TTU).
                </p>
              </div>

              {/* Paragraph 2 */}
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Perjalanan kami bermula dari <strong className="text-[#0f172a] font-bold">Rental Kasih</strong>, sebuah usaha yang menjadi fondasi dalam membangun pengalaman, kepercayaan pelanggan, serta pemahaman akan kebutuhan transportasi masyarakat. Seiring waktu, melalui berbagai tantangan dan proses pembelajaran selama bertahun-tahun, lahirlah identitas baru sebagai <strong className="text-orange-600 font-bold">Rajawali Trans</strong> dengan komitmen untuk memberikan pelayanan yang lebih profesional dan berkualitas.
                </p>
              </div>

              {/* Paragraph 3 */}
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Nama <strong className="text-orange-600 font-bold">Rajawali</strong> dipilih sebagai simbol keberanian, ketangguhan, ketepatan, dan visi yang jauh ke depan. Nilai-nilai tersebut menjadi dasar dalam setiap langkah kami untuk terus berkembang, menjaga kepercayaan pelanggan, dan memberikan pelayanan terbaik dalam setiap perjalanan.
                </p>
              </div>

              {/* Paragraph 4 */}
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Hingga saat ini, <strong className="text-[#0f172a] font-bold">Rajawali Trans</strong> terus berkomitmen menjadi mitra transportasi yang mengutamakan keselamatan, kenyamanan, dan kepuasan pelanggan, serta memberikan kontribusi positif bagi kemajuan masyarakat Timor Tengah Utara.
                </p>
              </div>

            </div>

          </div>

          {/* Quick Summary Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100 flex items-start gap-3 text-left">
              <Award className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-display font-bold text-xs uppercase text-[#0f172a] block">Pengalaman Teruji</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Bermula dari awal usaha Rental Kasih</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-left">
              <Zap className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-display font-bold text-xs uppercase text-[#0f172a] block">Ketangguhan Rajawali</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Ketepatan & kualitas prima di rute Timor</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-left">
              <HeartHandshake className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-display font-bold text-xs uppercase text-[#0f172a] block">Mitra Masyarakat TTU</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Mengutamakan keamanan & kenyamanan</span>
              </div>
            </div>
          </div>

        </motion.div>

        {/* 2. VISI & MISI PERUSAHAAN */}
        <motion.div
          id="visi-misi"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden space-y-8 text-left"
        >
          {/* Subtitle in Cursive Script & Main Heading */}
          <div className="border-b border-slate-100 pb-5">
            <span className="font-['Great_Vibes'] text-3xl sm:text-4xl text-orange-500 font-normal block leading-tight">
              Vision & Mission
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0f172a] uppercase tracking-tight">
              Visi & Misi <span className="text-orange-600">Rajawali Trans</span>
            </h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Prinsip Operasional Utama & Standar Mutu Pelayanan
            </p>
          </div>

          {/* VISI BOX */}
          <div className="space-y-3">
            <h4 className="font-display font-extrabold text-base sm:text-lg text-[#0f172a] uppercase tracking-tight flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-600" />
              <span>VISI PERUSAHAAN</span>
            </h4>
            <div className="bg-gradient-to-br from-orange-50/70 via-slate-50 to-white border-l-4 border-orange-500 p-5 sm:p-6 rounded-r-2xl border-y border-r border-slate-200/80 shadow-xs">
              <p className="font-sans text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                "Menjadi perusahaan jasa transportasi perjalanan terdepan dan unggulan di Nusa Tenggara Timur (NTT) yang tepercaya, aman, dan berorientasi pada kepuasan penuh pelanggan melalui penyediaan armada berkualitas tinggi serta pelayanan yang berstandar profesional."
              </p>
            </div>
          </div>

          {/* MISI LIST */}
          <div className="space-y-4 pt-2">
            <h4 className="font-display font-extrabold text-base sm:text-lg text-[#0f172a] uppercase tracking-tight flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-orange-600" />
              <span>MISI UTAMA KAMI</span>
            </h4>

            <div className="space-y-3">
              
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-200 transition-colors">
                <span className="text-orange-500 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <strong className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide block">
                    1. Keselamatan & Keamanan Utama
                  </strong>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                    Menyediakan armada kendaraan (Avanza, Rush, XL7, Wuling, Calya & Sigra) yang selalu bersih, terawat, steril, rutin diservis, dan beroperasi dalam kondisi prima demi keselamatan penumpang.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-200 transition-colors">
                <span className="text-orange-500 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <strong className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide block">
                    2. Pelayanan Berkualitas & Profesional
                  </strong>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                    Memastikan seluruh driver dan tim pengemudi bertindak ramah, sopan, berpengalaman, jujur, serta tepat waktu di setiap penjemputan dan rute perjalanan Kefa - Kupang PP.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-200 transition-colors">
                <span className="text-orange-500 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <strong className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide block">
                    3. Kenyamanan Maksimal & Kepuasan Pelanggan
                  </strong>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                    Menghadirkan kabin yang nyaman, fasilitas AC yang sejuk, serta suasana perjalanan yang menyenangkan bagi setiap penumpang reguler maupun carter privat rombongan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-200 transition-colors">
                <span className="text-orange-500 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <strong className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide block">
                    4. Transparansi & Kepercayaan Jangka Panjang
                  </strong>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                    Memberikan penawaran harga yang transparan dan jujur (Travel PP Rp 125.000 / Carter Rp 650.000) tanpa biaya tersembunyi demi menjaga kepercayaan masyarakat TTU.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </motion.div>

        {/* 3. STRUKTUR ORGANISASI PERUSAHAAN */}
        <motion.div
          id="struktur-organisasi"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden space-y-8 text-left"
        >
          <div className="border-b border-slate-100 pb-5">
            <span className="font-['Great_Vibes'] text-3xl sm:text-4xl text-orange-500 font-normal block leading-tight">
              Organization Structure
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0f172a] uppercase tracking-tight">
              Struktur Organisasi <span className="text-orange-600">Rajawali Trans</span>
            </h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Manajerial & Tim Operasional Transportasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: Pimpinan / Ketua */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between space-y-4 shadow-lg group hover:border-orange-500/50 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-extrabold shadow-md">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-orange-400 uppercase tracking-widest block">KETUA PERUSAHAAN</span>
                  <h4 className="font-display font-black text-xl text-white uppercase mt-0.5">EMPOS TEFA</h4>
                  <p className="text-xs text-slate-300 font-medium mt-1">Penanggung Jawab Utama, Strategi & Komitmen Mutu Layanan</p>
                </div>
              </div>
              <div className="pt-3 border-t border-white/10 text-[11px] font-bold text-orange-400">
                ★ Kepemimpinan & Visi
              </div>
            </div>

            {/* Box 2: Operasional & Driver */}
            <div className="p-6 rounded-3xl bg-slate-50 text-slate-800 border border-slate-200/80 flex flex-col justify-between space-y-4 shadow-md group hover:border-orange-300 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 border border-orange-200 flex items-center justify-center font-extrabold shadow-sm">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-orange-600 uppercase tracking-widest block">DIVISI OPERASIONAL</span>
                  <h4 className="font-display font-black text-xl text-[#0f172a] uppercase mt-0.5">TIM DRIVER & ARMADA</h4>
                  <p className="text-xs text-slate-600 font-medium mt-1">Pengemudi Berpengalaman, Perawatan Unit & Penjemputan Tepat Waktu</p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-bold text-slate-600">
                ✓ Sopan, Jujur & Steril
              </div>
            </div>

            {/* Box 3: Layanan & Customer Service */}
            <div className="p-6 rounded-3xl bg-slate-50 text-slate-800 border border-slate-200/80 flex flex-col justify-between space-y-4 shadow-md group hover:border-orange-300 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-200 flex items-center justify-center font-extrabold shadow-sm">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest block">DIVISI RESERVASI</span>
                  <h4 className="font-display font-black text-xl text-[#0f172a] uppercase mt-0.5">ADMIN & CUSTOMER CARE</h4>
                  <p className="text-xs text-slate-600 font-medium mt-1">Layanan Informasi 24 Jam, Penjadwalan & Konfirmasi Tiket WA</p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-bold text-emerald-700">
                ✓ Fast Response 24 Jam
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. FILOSOFI RAJAWALI (SECTION BAWAH) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden text-left space-y-6"
        >
          <div>
            <span className="font-['Great_Vibes'] text-3xl sm:text-4xl text-orange-400 font-normal block leading-tight">
              Philosophy & Values
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Filosofi Dibalik Nama <span className="text-orange-500">Rajawali</span>
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-1">
              Makna ketangguhan, penglihatan tajam, dan kepakan sayap perlindungan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center shadow-md">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <h4 className="font-display font-bold text-sm text-white uppercase">1. Ketangguhan Presisi</h4>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                Ketahanan armada dan keandalan driver kami dalam menembus rute darat Timor dengan cepat, aman, dan tepat waktu.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center border border-white/20 shadow-md">
                <Shield className="w-5 h-5 text-orange-400" />
              </div>
              <h4 className="font-display font-bold text-sm text-white uppercase">2. Perlindungan Kabin</h4>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                Bagaikan kepakan sayap Rajawali yang melingkungi, kami memberikan rasa aman dan kenyamanan maksimal bagi penumpang.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center shadow-md">
                <Eye className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-white uppercase">3. Komitmen Kejujuran</h4>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                Ketelitian standar operasional, ketepatan waktu penjemputan, serta kejujuran dalam pelayanan tanpa biaya tersembunyi.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
