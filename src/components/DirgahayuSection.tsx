import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle, ShieldCheck, Clock, Award, Star, ArrowRight, Heart, Car } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface DirgahayuSectionProps {
  lang: 'ID' | 'EN';
  onBookingClick?: () => void;
}

export default function DirgahayuSection({ lang, onBookingClick }: DirgahayuSectionProps) {
  const t = TRANSLATIONS[lang];

  const handleMerdekaWhatsApp = (serviceName?: string) => {
    const waNumber = '6281236313554';
    const serviceText = serviceName ? `layanan ${serviceName}` : 'tiket travel / carter';
    const message = lang === 'EN'
      ? `Hello Rajawali Trans, I would like to book Independence Day Special Promo for ${serviceText}. Please inform the schedule. Thank you! 🇮🇩`
      : `Halo Rajawali Trans, saya ingin pesan Promo Spesial DIRGAHAYU RI untuk ${serviceText}. Mohon info jadwal dan ketersediaan unit. Terima kasih! 🇮🇩`;
    
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const promoOffers = [
    {
      id: 'travel-pp',
      title: t.dirgahayu_card1_title,
      price: t.dirgahayu_card1_price,
      unit: t.dirgahayu_card1_unit,
      badge: 'Jadwal Setiap Hari',
      badgeBg: 'bg-red-500/15 text-red-700 border-red-200',
      description: t.dirgahayu_card1_desc,
      highlight: 'Favorit Penumpang'
    },
    {
      id: 'lepas-kunci',
      title: t.dirgahayu_card2_title,
      price: t.dirgahayu_card2_price,
      unit: t.dirgahayu_card2_unit,
      badge: 'Area Kefamenanu',
      badgeBg: 'bg-amber-500/15 text-amber-800 border-amber-200',
      description: t.dirgahayu_card2_desc,
      highlight: 'Lepas Kunci TTU'
    },
    {
      id: 'carter-privat',
      title: t.dirgahayu_card3_title,
      price: t.dirgahayu_card3_price,
      unit: t.dirgahayu_card3_unit,
      badge: 'Khusus Rombongan',
      badgeBg: 'bg-emerald-500/15 text-emerald-800 border-emerald-200',
      description: t.dirgahayu_card3_desc,
      highlight: 'Bebas Jam Berangkat'
    }
  ];

  return (
    <section 
      id="dirgahayu-ri" 
      className="relative py-16 sm:py-20 bg-gradient-to-b from-red-50 via-white to-slate-50 text-slate-800 overflow-hidden border-b border-red-100"
    >
      {/* Decorative Red & White Glowing Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Merah Putih Top Accent Ribbon Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-600 via-red-500 via-white to-red-600 shadow-sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Container */}
        <div className="relative rounded-3xl bg-gradient-to-br from-red-700 via-red-600 to-rose-700 text-white p-6 sm:p-10 lg:p-12 shadow-2xl shadow-red-600/25 border-2 border-red-400/40 overflow-hidden">
          
          {/* Inner Background Ornaments */}
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute left-10 bottom-0 w-64 h-64 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />
          
          {/* Subtle watermark text */}
          <div className="absolute -bottom-6 right-4 select-none pointer-events-none opacity-10 font-display font-black text-7xl sm:text-9xl uppercase tracking-tighter text-white">
            17 AGUSTUS
          </div>

          <div className="relative z-10 space-y-8">
            
            {/* Top Badge: Indonesian Flag Theme */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md"
              >
                <span className="text-base">🇮🇩</span>
                <span>{t.dirgahayu_tag}</span>
                <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md"
              >
                <Award className="w-3.5 h-3.5" />
                <span>HUT REPUBLIK INDONESIA</span>
              </motion.div>
            </div>

            {/* Headline and Subtitle */}
            <div className="max-w-3xl space-y-3 text-left">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-tight drop-shadow-sm"
              >
                {t.dirgahayu_title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="font-display font-bold text-amber-200 text-base sm:text-xl lg:text-2xl leading-snug"
              >
                {t.dirgahayu_subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-sans text-red-50 text-xs sm:text-base leading-relaxed max-w-2xl font-medium pt-1"
              >
                {t.dirgahayu_desc}
              </motion.p>
            </div>

            {/* 3 Offer Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {promoOffers.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="bg-white text-slate-800 rounded-2xl p-5 shadow-lg border border-red-100 flex flex-col justify-between hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${item.badgeBg}`}>
                        {item.badge}
                      </span>
                      <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md border border-red-100">
                        {item.highlight}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-black text-lg text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-baseline gap-1.5">
                      <span className="font-display font-black text-2xl text-red-600">
                        {item.price}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        {item.unit}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100">
                    <button
                      onClick={() => handleMerdekaWhatsApp(item.title)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-sans font-bold text-xs uppercase py-2.5 px-3.5 rounded-xl shadow-md shadow-red-600/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Pesan Rute Ini</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Highlights & Main CTA Action */}
            <div className="pt-4 border-t border-white/20 flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-white text-xs font-bold">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/15">
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                  <span>{t.dirgahayu_feature_1}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/15">
                  <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
                  <span>{t.dirgahayu_feature_2}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/15">
                  <Clock className="w-4 h-4 text-amber-300" />
                  <span>{t.dirgahayu_feature_3}</span>
                </div>
              </div>

              {/* Main WA Button */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleMerdekaWhatsApp()}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-2xl shadow-xl shadow-amber-400/30 flex items-center gap-2.5 cursor-pointer transition-all border-2 border-white/40 shrink-0"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                <span>{t.dirgahayu_btn_wa}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
