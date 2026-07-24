import React from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { motion } from 'motion/react';
import { Users, CheckCircle2, ShieldCheck, MessageCircle, Sparkles, Fuel } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface CarListProps {
  onSelectCar: (car: Car) => void;
  lang: 'ID' | 'EN';
}

export default function CarList({ onSelectCar, lang }: CarListProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppBooking = (carName: string) => {
    const waNumber = '6281236313554';
    const message = `Halo Rajawali Trans, saya berminat memesan/carter unit ${carName} untuk rute Kefa - Kupang. Mohon info ketersediaan jam & tanggal. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="cars" className="py-20 bg-slate-50 text-[#0f172a] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Subtle Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="cars-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-display font-extrabold text-xs tracking-wider uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>KATALOG ARMADA LENGKAP</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight uppercase leading-tight">
            Armada <span className="text-orange-600">Rajawali Trans</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Seluruh kendaraan selalu bersih, terawat, dan ber-AC prima. Pilih armada favorit Anda untuk perjalanan Kefa - Kupang PP atau carter privat.
          </p>
        </div>

        {/* GRID LAYOUT: BERJEJER 6 MOBIL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map((car, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={car.id}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-md hover:shadow-2xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              id={`car-card-${car.id}`}
            >
              <div className="space-y-5 text-left">
                
                {/* Image Showcase with Category Badge Overlay */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 aspect-[16/10] flex items-center justify-center p-4">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-auto object-contain max-h-[170px] drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-orange-50 text-orange-700 border border-orange-200 font-display font-bold text-[10px] uppercase px-2.5 py-1 rounded-full shadow-sm">
                    {car.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-slate-700 font-sans text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1.5 shadow-sm">
                    <Users className="w-3.5 h-3.5 text-orange-600" />
                    <span>{car.seats} Kursi</span>
                  </div>
                </div>

                {/* Car Name & Sub-description */}
                <div>
                  <h3 className="font-display font-black text-2xl text-[#0f172a] group-hover:text-orange-600 transition-colors uppercase tracking-tight">
                    {car.name}
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed mt-1 font-medium">
                    {car.description}
                  </p>
                </div>

                {/* COMPLETE FACILITIES CHECKLIST */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-orange-600 block">Fasilitas Lengkap:</span>
                  <div className="space-y-1.5">
                    {car.includeList.map((facility, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => handleWhatsAppBooking(car.name)}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-sans font-bold text-xs uppercase py-3 px-3 rounded-xl shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Pesan WA</span>
                </button>

                <button
                  onClick={() => onSelectCar(car)}
                  className="bg-slate-100 hover:bg-slate-200 text-[#0f172a] border border-slate-200 font-sans font-bold text-xs uppercase py-3 px-3 rounded-xl transition-all cursor-pointer"
                  title="Form Reservasi Lengkap"
                >
                  Reservasi
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
