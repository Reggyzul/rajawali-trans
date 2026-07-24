import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowDown, ChevronDown, MessageCircle, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onRentClick: () => void;
  onVisiMisiClick?: () => void;
  lang: 'ID' | 'EN';
}

export default function Hero({ onRentClick, onVisiMisiClick, lang }: HeroProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppClick = () => {
    const waNumber = '6281236313554';
    const text = encodeURIComponent(
      'Halo Rajawali Trans, saya ingin pesan tiket Travel / Carter rute Kefa - Kupang. Mohon info keberangkatan.'
    );
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${text}`, '_blank', 'noreferrer');
  };

  const handleScrollToVisiMisi = () => {
    if (onVisiMisiClick) {
      onVisiMisiClick();
    } else {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 pb-16 bg-gradient-to-b from-slate-50 via-white to-slate-100 text-[#0f172a] overflow-hidden border-b border-slate-200"
    >
      {/* Background Decorative Soft Orange Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        <div className="space-y-6 flex flex-col items-center" id="hero-text-container">
          


          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#0f172a] tracking-tight uppercase leading-none"
          >
            RAJAWALI <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">TRANS</span>
          </motion.h1>

          {/* Subtitle / Vision summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Nikmati layanan rental mobil yang aman, nyaman, dan profesional dengan armada berkualitas serta proses pemesanan yang mudah. Kami siap menjadi mitra transportasi terpercaya untuk berbagai kebutuhan perjalanan di Kupang dan wilayah sekitarnya.
          </motion.p>

          {/* Pricing Highlight Card Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 w-full max-w-2xl shadow-xl shadow-slate-200/50"
          >
            <div className="p-3.5 rounded-2xl bg-orange-50/80 border border-orange-100 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">Kefa ➔ Kupang</span>
              <span className="font-display font-black text-base text-[#0f172a] block mt-0.5">Rp 125.000 <span className="text-[11px] font-medium text-slate-500">/org</span></span>
            </div>
            <div className="p-3.5 rounded-2xl bg-orange-50/80 border border-orange-100 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">Kupang ➔ Kefa</span>
              <span className="font-display font-black text-base text-[#0f172a] block mt-0.5">Rp 125.000 <span className="text-[11px] font-medium text-slate-500">/org</span></span>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-100 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">Carter Privat</span>
              <span className="font-display font-black text-base text-[#0f172a] block mt-0.5">Mulai Rp 600.000</span>
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2"
          >
            <button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-sans font-bold text-xs uppercase px-8 py-4 rounded-2xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center gap-2 cursor-pointer scale-105"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Pesan Sekarang</span>
            </button>
          </motion.div>



          {/* Animated Down Arrow Scroll Button to Visi Misi */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ opacity: { delay: 0.4 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
            className="pt-4"
          >
            <button
              onClick={handleScrollToVisiMisi}
              className="group flex flex-col items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-orange-600 transition-colors cursor-pointer"
              title="Lihat Visi & Misi"
            >
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-orange-600">Visi & Misi</span>
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-orange-600 group-hover:border-orange-500 group-hover:bg-orange-50 transition-all">
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
