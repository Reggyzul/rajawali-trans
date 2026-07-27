import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, MapPin, Phone, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
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
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileProfileOpen, setIsMobileProfileOpen] = useState(false);

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

  const profileSubItems = [
    { label: 'Tentang Perusahaan', id: 'tentang-perusahaan', sectionId: 'tentang-perusahaan', page: 'about' },
    { label: 'Visi & Misi', id: 'visi-misi', sectionId: 'visi-misi', page: 'about' },
    { label: 'Struktur Organisasi', id: 'struktur-organisasi', sectionId: 'struktur-organisasi', page: 'about' },
    { label: 'Galeri', id: 'galeri', sectionId: 'cars', page: 'home' }
  ];

  const navItems = [
    { label: t.nav_home, id: 'home', type: 'page', pageId: 'home' },
    { label: 'PROFIL', id: 'about', type: 'page', pageId: 'about' },
    { label: 'Armada Mobil', id: 'cars', type: 'section', sectionId: 'cars' },
    { label: 'Rute & Tarif', id: 'services', type: 'section', sectionId: 'services' },
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

  const handleSubProfileClick = (sub: typeof profileSubItems[0]) => {
    setIsProfileOpen(false);
    setIsOpen(false);

    if (sub.page === 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(sub.sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setCurrentPage('about');
      setTimeout(() => {
        const el = document.getElementById(sub.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-sm"
    >
      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2 border-b border-slate-200/80 shadow-md'
            : 'bg-white py-3 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            
            {/* 1. BRAND LOGO (FAR LEFT) */}
            <div 
              onClick={() => handleItemClick({ label: t.nav_home, id: 'home', type: 'page', pageId: 'home' })}
              className="flex items-center gap-2.5 cursor-pointer group shrink-0"
              id="header-logo"
            >
              <img 
                src="/logo.png" 
                alt="Rajawali Trans Logo" 
                className="h-10 sm:h-11 w-10 sm:w-11 object-cover rounded-full border-2 border-orange-500 shadow-md group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-tight text-[#0f172a] leading-none group-hover:text-orange-600 transition-colors">
                  RAJAWALI <span className="text-orange-600">TRANS</span>
                </span>
              </div>
            </div>

            {/* 2. DESKTOP NAV ITEMS (WITH DROPDOWN PROFIL SUB-MENU) */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-3 mx-auto" id="desktop-nav">
              {navItems.map((item) => {
                if (item.id === 'about') {
                  const isItemActive = currentPage === 'about';
                  return (
                    <div 
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => setIsProfileOpen(true)}
                      onMouseLeave={() => setIsProfileOpen(false)}
                    >
                      <button
                        onClick={() => handleItemClick(item)}
                        className={`font-sans text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer relative px-4 py-1.5 rounded-full flex items-center gap-1.5 ${
                          isItemActive
                            ? 'text-orange-600 bg-orange-50 border border-orange-200/80 shadow-xs'
                            : 'text-[#0f172a] hover:text-orange-600 hover:bg-slate-100/80'
                        }`}
                        id="nav-link-about"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isProfileOpen ? 'rotate-180 text-orange-600' : 'text-slate-400'}`} />
                      </button>

                      {/* DROPDOWN SUB-PROFIL CARD (Format persis seperti gambar contoh) */}
                      <AnimatePresence>
                        {isProfileOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-1.5 w-60 bg-white rounded-2xl border border-slate-200/90 shadow-2xl p-3.5 z-50 text-left overflow-hidden"
                          >
                            {/* Heading Header Sub Profil */}
                            <div className="border-b border-slate-100 pb-2.5 mb-2 px-2">
                              <span className="text-[11px] font-black uppercase tracking-wider text-orange-600 block">
                                Profil Perusahaan
                              </span>
                            </div>

                            {/* List 4 Pilihan Sub Profil */}
                            <div className="space-y-1">
                              {profileSubItems.map((sub) => (
                                <button
                                  key={sub.id}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSubProfileClick(sub);
                                  }}
                                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50/80 transition-all text-left cursor-pointer group"
                                >
                                  <span className="text-orange-500 group-hover:translate-x-0.5 transition-transform font-black text-sm">▸</span>
                                  <span>{sub.label}</span>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const isItemActive = 
                  (item.type === 'page' && currentPage === item.pageId) ||
                  (item.type === 'section' && activeSection === item.sectionId && currentPage === 'home');
                  
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`font-sans text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer relative px-4 py-1.5 rounded-full ${
                      isItemActive
                        ? 'text-orange-600 bg-orange-50 border border-orange-200/80 shadow-xs'
                        : 'text-[#0f172a] hover:text-orange-600 hover:bg-slate-100/80'
                    }`}
                    id={`nav-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* 3. CTA BUTTON (FAR RIGHT) */}
            <div className="hidden lg:flex items-center shrink-0">
              <a
                href="https://api.whatsapp.com/send?phone=6281236313554&text=Halo%20Rajawali%20Trans,%20saya%20ingin%20tanya%20jadwal%20dan%20pemesanan%20rute%20Kefa%20-%20Kupang"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 text-white font-sans font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md shadow-orange-500/25 transition-all duration-300 cursor-pointer flex items-center gap-1.5 border border-orange-400/30 hover:scale-105"
              >
                <span>PESAN WA</span>
              </a>
            </div>

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
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden text-left"
            id="mobile-menu"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                if (item.id === 'about') {
                  return (
                    <div key={item.id} className="border-b border-slate-100 py-2 space-y-1">
                      <button
                        onClick={() => setIsMobileProfileOpen(!isMobileProfileOpen)}
                        className="w-full flex items-center justify-between font-display font-bold text-base text-[#0f172a] hover:text-orange-600 py-1 cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 text-orange-600 transition-transform ${isMobileProfileOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Accordion Sub Profil di Mobile */}
                      <AnimatePresence>
                        {isMobileProfileOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-3 space-y-1.5 pt-1.5 pb-2"
                          >
                            {profileSubItems.map((sub) => (
                              <button
                                key={sub.id}
                                onClick={() => handleSubProfileClick(sub)}
                                className="w-full flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-orange-600 py-1.5 cursor-pointer text-left"
                              >
                                <span className="text-orange-500 font-bold">▸</span>
                                <span>{sub.label}</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className="block w-full text-left font-display font-bold text-base text-[#0f172a] hover:text-orange-600 py-3 border-b border-slate-100 cursor-pointer"
                  >
                    {item.label}
                  </button>
                );
              })}

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
