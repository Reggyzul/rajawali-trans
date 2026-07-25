import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CarList from './components/CarList';
import Services from './components/Services';
import ToursList from './components/ToursList';
import BookingSteps from './components/BookingSteps';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Car } from './types';
import { CARS } from './data/cars';
import { ChevronUp, MessageSquareCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from './utils/translations';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'tours' | 'rentals'>('home');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lang, setLang] = useState<'ID' | 'EN'>('ID');
  
  const t = TRANSLATIONS[lang];

  // Monitor scrolling to highlight appropriate header nav item & show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Track active section on home page
      if (currentPage === 'home') {
        const sections = ['home', 'cars', 'services', 'steps', 'contact'];
        const scrollPosition = window.scrollY + 250; // Offset

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else if (sectionId === 'about') {
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('about');
    } else if (sectionId === 'tours') {
      setCurrentPage('tours');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('tours');
    } else if (sectionId === 'rentals') {
      setCurrentPage('rentals');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('rentals');
    } else {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      }
    }
  };

  const handleSelectCar = (car: Car) => {
    setSelectedCar(car);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // WhatsApp template for fast-chat floater
  const handleFastWhatsApp = () => {
    const waNumber = '6281236313554';
    const text = encodeURIComponent(
      lang === 'EN' 
        ? 'Hello Rajawali Trans, I would like to book a travel ticket/charter for Kefa - Kupang. Thank you!'
        : 'Halo Rajawali Trans, saya ingin memesan tiket travel/carter rute Kefa - Kupang. Terima kasih!'
    );
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${text}`, '_blank', 'noreferrer');
  };

  return (
    <div 
      className="relative min-h-screen bg-[#f8fafc] text-gray-800 selection:bg-orange-500 selection:text-white font-sans" 
      id="main-app-container"
    >
      
      {/* Navigation Header */}
      <Header 
        activeSection={activeSection} 
        onNavClick={handleNavClick} 
        lang={lang} 
        setLang={setLang} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onBookingClick={() => setSelectedCar(CARS[0])}
      />

      {/* Main Page Layout Flow */}
      <main className="relative z-10">
        
        {currentPage === 'home' ? (
          <>
            {/* 1. Hero Section Banner */}
            <Hero onRentClick={() => handleNavClick('rentals')} onVisiMisiClick={() => handleNavClick('about')} lang={lang} />

            {/* 2. Armada Mobil Tampil Berjejer */}
            <CarList onSelectCar={handleSelectCar} lang={lang} />

            {/* 3. Section: Rute & Tarif (Kefa - Kupang PP & Carter) */}
            <Services lang={lang} />

            {/* 4. Section: Cara Pemesanan Mudah */}
            <BookingSteps lang={lang} />

            {/* 5. Testimonials */}
            <Testimonials lang={lang} />
          </>
        ) : currentPage === 'about' ? (
          <div className="pt-20 sm:pt-24">
            {/* Dedicated Standalone Profil & Sejarah Page */}
            <About lang={lang} />
            
            {/* Testimonials */}
            <Testimonials lang={lang} />
          </div>
        ) : currentPage === 'tours' ? (
          <div className="pt-20 sm:pt-24">
            {/* Tours View */}
            <ToursList lang={lang} />
            
            {/* Testimonials */}
            <Testimonials lang={lang} />
          </div>
        ) : (
          <div className="pt-20 sm:pt-24">
            {/* Rentals View */}
            <CarList onSelectCar={handleSelectCar} lang={lang} />
            
            {/* Testimonials */}
            <Testimonials lang={lang} />
          </div>
        )}

      </main>

      {/* Footer Contact Column */}
      <Footer onNavClick={handleNavClick} lang={lang} />

      {/* Interactive Booking Popup */}
      <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} lang={lang} onCarChange={setSelectedCar} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Fast Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={handleFastWhatsApp}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all border-2 border-white"
          title="Chat WhatsApp Admin 081236313554"
          id="floater-wa"
        >
          <MessageSquareCode className="w-7 h-7" />
        </motion.button>

        {/* Scroll To Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-[#0f172a] hover:bg-slate-800 text-white rounded-full shadow-xl flex items-center justify-center cursor-pointer transition-all border border-slate-700"
              title="Kembali ke Atas"
              id="floater-scroll-top"
            >
              <ChevronUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
