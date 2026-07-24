import React from 'react';
import { Headset, Phone, MapPin, MessageCircle } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
}

export default function Footer({ onNavClick, lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-8 border-t border-slate-800 relative overflow-hidden">
      
      {/* Absolute background accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper pre-footer callout section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-slate-800 items-center">
          <div className="space-y-2 text-left">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-orange-400">
              RAJAWALI TRANS KEFA
            </h3>
            <p className="font-sans text-sm text-slate-300">
              Travel Reguler PP (Kefa - Kupang, Malaka, Atambua, TLS) & Carter Mobil Privat
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <a
              href="https://api.whatsapp.com/send?phone=6281236313554&text=Halo%20Rajawali%20Trans,%20saya%20ingin%20tanya%20jadwal%20dan%20pemesanan%20rute%20Kefa%20-%20Kupang"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-sans font-bold text-xs uppercase px-6 py-3 rounded.5-xl shadow-lg shadow-orange-500/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: 081 236 313 554</span>
            </a>
          </div>
        </div>

        {/* Core Footer grid columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-16 pb-12">
          
          {/* Column 1: Brand & Office Address */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Rajawali Trans Logo" 
                className="h-14 w-auto object-contain drop-shadow-xl"
              />
              <span className="font-display font-black text-xl tracking-tight text-white uppercase">
                RAJAWALI <span className="text-orange-500">TRANS</span>
              </span>
            </div>

            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-sm">
              Penyedia Jasa travel & carter unggul dan Aman yang berfokus pada kepuasan pelanggan melalui unit yang berkualitas dan pelayanan yang baik.
            </p>

            <div className="text-xs text-slate-300 font-sans space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4.5 h-4.5 text-orange-400 shrink-0 mt-0.5" />
                <span>Jln. El Tari KM 04 (Dekat Masjid), Kefamenanu, Kab. Timor Tengah Utara, NTT</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4.5 h-4.5 text-orange-400 shrink-0" />
                <span>WhatsApp / Telp: <strong>081 236 313 554</strong></span>
              </div>
              <p className="pt-2 text-slate-500">©2026 Rajawali Trans Kefamenanu. Semua Hak Dilindungi.</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-display font-bold text-sm tracking-widest text-orange-400 uppercase border-l-2 border-orange-500 pl-2">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-slate-400">
              <li>
                <button onClick={() => onNavClick('home')} className="hover:text-orange-400 transition-colors cursor-pointer text-left w-full">
                  • Beranda
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-orange-400 transition-colors cursor-pointer text-left w-full">
                  • Visi & Misi Kami
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-orange-400 transition-colors cursor-pointer text-left w-full">
                  • Rute Kefa - Kupang & Tarif
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('cars')} className="hover:text-orange-400 transition-colors cursor-pointer text-left w-full">
                  • Armada Mobil (Avanza, Rush, XL7, dll)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details & Interactive Google Map */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="font-display font-bold text-sm tracking-widest text-orange-400 uppercase border-l-2 border-orange-500 pl-2">
              {t.footer_hubungi}
            </h4>

            <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700 space-y-3">
              <div className="flex items-center gap-3">
                <Headset className="w-5 h-5 text-orange-400" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Layanan Konsultasi 24 Jam</span>
                  <a href="https://api.whatsapp.com/send?phone=6281236313554" target="_blank" rel="noreferrer" className="font-display font-bold text-base text-orange-400 hover:underline">
                    081 236 313 554
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="pt-2">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-lg w-full h-36 bg-slate-900">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.123456789!2d124.475!3d-9.445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cff829999999999%3A0x123456789!2sKefamenanu%2C%20Timor%20Tengah%20Utara!5e0!3m2!1sid!2sid!4v1689999999999!5m2!1sid!2sid"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rajawali Trans Kefamenanu Location Map"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

        {/* Lower Disclaimer */}
        <div className="border-t border-slate-800 pt-8 text-center text-[10px] text-slate-500 font-sans leading-relaxed">
          {t.footer_disclaimer}
        </div>

      </div>
    </footer>
  );
}
