import React from 'react';
import { motion } from 'motion/react';
import { Route, Users, Shield, ArrowRight, PhoneCall, Sparkles, Car, MapPin } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface ServicesProps {
  lang: 'ID' | 'EN';
}

export default function Services({ lang }: ServicesProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppBooking = (routeTitle: string) => {
    const waNumber = '6281236313554';
    const message = `Halo Rajawali Trans, saya berminat memesan tiket travel/carter rute: ${routeTitle}. Mohon info jam keberangkatan & ketersediaan tempat. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const routes = [
    {
      id: 'kefa-kupang',
      title: 'Kefa ⇄ Kupang (PP)',
      subtitle: 'Rute Utama Timor Barat',
      price: 'Mulai Rp 125rb',
      unitPrice: '/ orang',
      badge: 'Rute Reguler PP',
      badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
      description: 'Layanan travel reguler penumpang PP Kefamenanu ke Kota Kupang dan sebaliknya. Keberangkatan setiap hari.',
      features: ['Layanan PP (Pulang Pergi)', 'Penjemputan Door to Door', 'Armada Bersih & Ber-AC']
    },
    {
      id: 'kefa-malaka',
      title: 'Kefa ⇄ Malaka (PP)',
      subtitle: 'Rute Kabupaten Malaka',
      price: 'Mulai Rp 125rb',
      unitPrice: '/ orang',
      badge: 'Rute Reguler PP',
      badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
      description: 'Layanan travel reguler penumpang PP Kefamenanu ke Kabupaten Malaka (Betun) dan sebaliknya.',
      features: ['Layanan PP (Pulang Pergi)', 'Driver Pengalaman Rute Malaka', 'Aman, Nyaman & Tepat Waktu']
    },
    {
      id: 'kefa-atambua',
      title: 'Kefa ⇄ Atambua (PP)',
      subtitle: 'Rute Kabupaten Belu',
      price: 'Mulai Rp 125rb',
      unitPrice: '/ orang',
      badge: 'Rute Reguler PP',
      badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
      description: 'Layanan travel reguler penumpang PP Kefamenanu ke Kota Atambua, Belu dan sebaliknya.',
      features: ['Layanan PP (Pulang Pergi)', 'Jalur Nyaman & Cepat', 'Kabin Luas & Steril']
    },
    {
      id: 'kefa-tls',
      title: 'Kefa ⇄ TLS / Wini (PP)',
      subtitle: 'Rute Timor Leste & Perbatasan',
      price: 'Mulai Rp 125rb',
      unitPrice: '/ orang',
      badge: 'Rute Perbatasan PP',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Layanan travel reguler PP Kefamenanu ke TLS (Timor Leste / Wini / Perbatasan PLBN) dan sebaliknya.',
      features: ['Layanan PP (Pulang Pergi)', 'Rute Khusus Perbatasan', 'Kenyamanan Utama']
    },
    {
      id: 'charter-drop',
      title: 'Carter Mobil Privat',
      subtitle: 'Bebas Pilih Rute Mana Saja',
      price: 'Mulai Rp 600rb',
      unitPrice: '/ carter',
      badge: 'Sewa Carter Privat',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Layanan sewa carter privat 1 mobil khusus rombongan/keluarga tanpa dicampur penumpang lain. Mulai dari Rp 600.000.',
      features: ['Fleksibel Jam Keberangkatan', 'Bebas Rute Timor', 'Privasi & Nyaman Maksimal']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white text-[#0f172a] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="services-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-display font-extrabold text-xs tracking-wider uppercase shadow-sm">
            <Route className="w-4 h-4 text-orange-600" />
            <span>PILIHAN RUTE KEBERANGKATAN RAJAWALI TRANS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight uppercase leading-tight">
            Rute Perjalanan <span className="text-orange-600">Pulang Pergi (PP)</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Melayani travel penumpang reguler PP & sewa carter privat untuk rute Kefamenanu - Kupang, Malaka, Atambua, dan TLS (Timor Leste/Wini) serta sebaliknya.
          </p>
        </div>

        {/* 5 Routes Responsive Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-5 text-left">
                
                {/* Badge & Icon Header */}
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                  <MapPin className="w-5 h-5 text-orange-600 opacity-80" />
                </div>

                <div>
                  <h3 className="font-display font-black text-2xl text-[#0f172a] group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-bold mt-1">
                    {item.subtitle}
                  </p>
                </div>

                {/* Tariff Callout Box */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Tarif Keberangkatan</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="font-display font-black text-2xl text-orange-600">{item.price}</span>
                    <span className="text-xs font-bold text-slate-600">{item.unitPrice}</span>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-5 mt-5 border-t border-slate-100">
                <button
                  onClick={() => handleWhatsAppBooking(item.title)}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-sans font-bold text-xs uppercase py-3.5 px-4 rounded-xl shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Pesan Rute Ini via WA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
