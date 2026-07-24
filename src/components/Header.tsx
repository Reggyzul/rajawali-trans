import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, MapPin, Phone, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  currentPage: 'home' | 'about' | 'tours' | 'rentals';
  setCurrentPage: (page: 'home' | 'about' | 'tours' | 'rentals') => void;
  onBookingClick: () => void;
}

export default function Header({ activeSection, onNavClick, lang, setLang, currentPage, setCurrentPage, onBookingClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav_home, id: 'home', type: 'page', pageId: 'home' },
    { label: 'Visi & Misi', id: 'about', type: 'page', pageId: 'about' },
    { label: 'Armada Mobil', id: 'cars', type: 'section', sectionId: 'cars' },
    { label: 'Rute & Tarif', id: 'services', type: 'section', sectionId: 'services' },
    { label: 'Cara Pesan', id: 'steps', type: 'section', sectionId: 'steps' },
    { label: 'Ulasan', id: 'testimonials', type: 'section', sectionId: 'testimonials' },
    { label: t.nav_contact, id: 'contact', type: 'section', sectionId: 'contact' },
  ];

  const handleItemClick = (item: typeof navItems[0]) => {
    if (item.type === 'page') {
      setCurrentPage(item.pageId as any);
      onNavClick(item.pageId);
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        onNavClick(item.sectionId as any);
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-sm"
    >
      {/* 1. Top Bar */}
      <div className="bg-slate-900 text-slate-300 border-b border-slate-800 text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>{t.topbar_address}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span className="font-semibold text-white">{t.topbar_whatsapp}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-orange-400">
              <Clock className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span className="font-semibold">{t.topbar_service}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-1.5 border-b border-slate-200/80 shadow-md'
            : 'bg-white py-2 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            
            {/* Logo Brand */}
            <div 
              onClick={() => handleItemClick({ label: t.nav_home, id: 'home', type: 'page', pageId: 'home' })}
              className="flex items-center gap-2.5 cursor-pointer group"
              id="header-logo"
            >
              <img 
                src="/logo.png" 
                alt="Rajawali Trans Logo" 
                className="h-9 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-md"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-tight text-[#0f172a] leading-none group-hover:text-orange-600 transition-colors">
                  RAJAWALI <span className="text-orange-600">TRANS</span>
                </span>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
              {navItems.map((item) => {
                const isItemActive = 
                  (item.type === 'page' && currentPage === item.pageId) ||
                  (item.type === 'section' && activeSection === item.sectionId && currentPage === 'home');
                  
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`font-display text-sm font-bold transition-colors cursor-pointer relative py-2 px-1 ${
                      isItemActive
                        ? 'text-orange-600'
                        : 'text-[#0f172a] hover:text-orange-600'
                    }`}
                    id={`nav-link-${item.id}`}
                  >
                    {item.label}
                    {isItemActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}

              <a
                href="https://api.whatsapp.com/send?phone=6281236313554&text=Halo%20Rajawali%20Trans,%20saya%20ingin%20tanya%20jadwal%20dan%20pemesanan%20rute%20Kefa%20-%20Kupang"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-sans font-bold text-xs uppercase px-5 py-3 rounded-xl shadow-md shadow-orange-500/20 transition-all cursor-pointer ml-2"
              >
                Pesan WA
              </a>
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-slate-100 text-[#0f172a] hover:text-orange-600 focus:outline-none cursor-pointer border border-slate-200"
                aria-label="Toggle menu"
                id="hamburger-btn"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="block w-full text-left font-display font-bold text-base text-[#0f172a] hover:text-orange-600 py-3 border-b border-slate-100 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-2">
                <a
                  href="https://api.whatsapp.com/send?phone=6281236313554&text=Halo%20Rajawali%20Trans,%20saya%20ingin%20tanya%20jadwal%20dan%20pemesanan%20rute%20Kefa%20-%20Kupang"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-orange-600 text-white font-sans font-bold text-sm uppercase py-3.5 rounded-xl shadow-md flex items-center justify-center cursor-pointer"
                >
                  Pesan via WhatsApp (081236313554)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
