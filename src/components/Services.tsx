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
      title: 'Travel Kefa ➔ Kupang',
      subtitle: 'Perjalanan Penumpang Reguler PP',
      price: 'Rp 125.000',
      unitPrice: '/ orang',
      badge: 'Jadwal Reguler',
      badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
      description: 'Keberangkatan reguler setiap hari dari Kefamenanu ke Kota Kupang. Driver berpengalaman, unit bersih, terawat, dan ber-AC.',
      features: ['Keberangkatan Setiap Hari', 'Mobil Ber-AC & Steril', 'Bantu Bagasi Door to Door']
    },
    {
      id: 'kupang-kefa',
      title: 'Travel Kupang ➔ Kefa',
      subtitle: 'Perjalanan Penumpang Reguler PP',
      price: 'Rp 125.000',
      unitPrice: '/ orang',
      badge: 'Jadwal Reguler',
      badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
      description: 'Keberangkatan reguler dari Kota Kupang kembali ke Kefamenanu. Penjemputan tepat waktu dengan kenyamanan perjalanan terjamin.',
      features: ['Penjemputan Tepat Waktu', 'Tempat Duduk Nyaman', 'Driver Ramah & Sopan']
    },
    {
      id: 'lepas-kunci',
      title: 'Sewa Mobil Lepas Kunci',
      subtitle: 'Lokasi Kefamenanu, Kab. Timor Tengah Utara',
      price: 'Rp 400.000',
      unitPrice: '/ hari',
      badge: 'Lepas Kunci',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Layanan sewa mobil lepas kunci khusus lokasi Kefamenanu, Kab. Timor Tengah Utara (TTU). Unit terawat, bersih, & prima. Bensin ditanggung oleh pemakai.',
      features: ['Lokasi Kefamenanu (Kab. TTU)', 'Bensin Ditanggung Pemakai', 'Unit Prima, Bersih & Ber-AC', 'Proses Persyaratan Mudah']
    },
    {
      id: 'charter-drop',
      title: 'Carter Mobil Privat',
      subtitle: 'Perjalanan Bebas Rombongan / Keluarga',
      price: 'Rp 650.000',
      unitPrice: '(tergantung rute)',
      badge: 'Sewa Carter Privat',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Layanan sewa carter privat 1 mobil khusus rombongan/keluarga tanpa dicampur penumpang lain. Fleksibel jam keberangkatan.',
      features: ['1 Mobil Privat Khusus Rombongan', 'Bebas Atur Jam Keberangkatan', 'Door to Door Alamat Penjemputan']
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
            <span>RUTE REGULER & TARIF CARTER</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight uppercase leading-tight">
            Tarif Resmi <span className="text-orange-600">Rajawali Trans</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Tarif hemat & transparan untuk travel penumpang reguler PP Kefa - Kupang, sewa lepas kunci Kefamenanu, maupun carter privat.
          </p>

          {/* Highlight DP Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-xs mt-2">
            <Shield className="w-4 h-4 text-emerald-600 shrink-0 fill-emerald-100" />
            <span>DP Minimal Rp 50.000 (Tanda Jadi Garansi Tempat Duduk & Armada)</span>
          </div>
        </div>

        {/* 4 Routes Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-5 text-left">
                
                {/* Badge & Icon Header */}
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                  <Car className="w-5 h-5 text-orange-600 opacity-80" />
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
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Tarif Keberangkatan</span>
                    <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">DP Min. Rp 50rb</span>
                  </div>
                  <div className="flex items-baseline gap-1">
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
