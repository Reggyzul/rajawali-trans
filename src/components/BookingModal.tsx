import React, { useState, useEffect } from 'react';
import { Car } from '../types';
import { CARS } from '../data/cars';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Calendar, Clock, MapPin, User, Phone, CheckCircle2, ShieldCheck, CreditCard, Sparkles, Car as CarIcon, AlertCircle } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface BookingModalProps {
  car: Car | null;
  onClose: () => void;
  lang: 'ID' | 'EN';
  onCarChange?: (car: Car) => void;
}

export default function BookingModal({ car, onClose, lang, onCarChange }: BookingModalProps) {
  const [serviceType, setServiceType] = useState<'kefa_kupang' | 'kupang_kefa' | 'lepas_kunci' | 'carter'>('kefa_kupang');
  const [selectedCarId, setSelectedCarId] = useState<string>(car?.id || 'avanza');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [passengers, setPassengers] = useState('1 Orang');
  const [departureDate, setDepartureDate] = useState('');
  const [departureTime, setDepartureTime] = useState('08:00 (Pagi)');
  const [pickupAddress, setPickupAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [dpOption, setDpOption] = useState<'dp50' | 'dp100' | 'lunas'>('dp50');
  const [isBooked, setIsBooked] = useState(false);

  const t = TRANSLATIONS[lang];

  // Synchronize state when car prop changes
  useEffect(() => {
    if (car) {
      setSelectedCarId(car.id);
    }
  }, [car]);

  if (!car) return null;

  const currentSelectedCar = CARS.find(c => c.id === selectedCarId) || car;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !departureDate || !pickupAddress) {
      alert(lang === 'EN' ? 'Please fill in all required fields marked with *' : 'Mohon isi semua kolom yang wajib diisi (*)!');
      return;
    }

    const waNumber = '6281236313554';

    let serviceTitle = 'Travel Kefa ➔ Kupang (Rp 125.000/org)';
    if (serviceType === 'kupang_kefa') serviceTitle = 'Travel Kupang ➔ Kefa (Rp 125.000/org)';
    if (serviceType === 'lepas_kunci') serviceTitle = 'Sewa Mobil Lepas Kunci Kefamenanu Kab. TTU (Rp 400.000/hari)';
    if (serviceType === 'carter') serviceTitle = 'Sewa Carter Privat 1 Mobil (Mulai Rp 600.000)';

    let dpText = 'DP Minimal Rp 50.000 (Tanda Jadi Official)';
    if (dpOption === 'dp100') dpText = 'DP Rp 100.000 (Tanda Jadi)';
    if (dpOption === 'lunas') dpText = 'Bayar Lunas Saat Keberangkatan';

    const textTemplate = `Halo Rajawali Trans, saya berminat memesan tiket travel / carter armada:

📋 *DETAIL PEMESANAN:*
• Jenis Perjalanan: *${serviceTitle}*
• Unit Armada: *${currentSelectedCar.name}*
• Tanggal Keberangkatan: *${departureDate}*
• Jam Keberangkatan: *${departureTime}*
• Jumlah Penumpang: *${passengers}*

👤 *DATA PENUMPANG:*
• Nama Pemesan: *${name}*
• No. WhatsApp: *${phone}*
• Alamat Penjemputan: *${pickupAddress}*
• Alamat Tujuan: *${destinationAddress || '-'}*
• Catatan / Bagasi: *${notes || '-'}*

💳 *PEMBAYARAN DP:*
• Komitmen DP: *${dpText}*

Mohon konfirmasi jadwal & ketersediaan tempat. Terima kasih!`;

    const encodedText = encodeURIComponent(textTemplate);
    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodedText}`;
    
    window.open(waUrl, '_blank', 'noreferrer');
    setIsBooked(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
          id="booking-backdrop"
        />

        {/* Modal Panel Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 z-10 my-auto border border-slate-200"
          id="booking-modal-panel"
        >
          
          {/* LEFT SIDEBAR: CAR & SERVICE PREVIEW */}
          <div className="lg:col-span-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-white p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden text-left">
            <div className="space-y-5 relative z-10">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-[10px] font-extrabold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>FORM PEMESANAN RESMI</span>
              </div>

              <div>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                  {currentSelectedCar.name}
                </h3>
                <p className="font-sans text-xs text-orange-400 font-bold mt-0.5">
                  {currentSelectedCar.priceDisplay || 'Travel PP 125rb/Org | Carter mulai 600rb'}
                </p>
              </div>

              {/* Car Cutout Photo */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-slate-800/80 aspect-[16/10] p-2 flex items-center justify-center">
                <img
                  src={currentSelectedCar.image}
                  alt={currentSelectedCar.name}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>

              {/* Specs & Facility List */}
              <div className="space-y-2 text-xs text-slate-300 border-t border-white/10 pt-4">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Kapasitas:</span>
                  <span className="font-semibold text-white">{currentSelectedCar.seats} Kursi</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Fasilitas AC:</span>
                  <span className="font-semibold text-emerald-400">Double Blower</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Pelayanan:</span>
                  <span className="font-semibold text-orange-400">Door to Door</span>
                </div>
              </div>

              {/* DP Policy Highlight Card */}
              <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-left space-y-1">
                <div className="flex items-center gap-1.5 text-orange-400 font-extrabold text-[11px] uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-orange-400" />
                  <span>Jaminan DP Min Rp 50.000</span>
                </div>
                <p className="font-sans text-[11px] text-slate-300 leading-relaxed font-medium">
                  DP minimal Rp 50.000 diperlukan sebagai tanda jadi pemesanan resmi untuk mengamankan jam & tempat duduk armada Anda.
                </p>
              </div>

            </div>

            {/* Footer Trust Info */}
            <div className="pt-4 border-t border-white/10 mt-6 text-[10px] text-slate-400 font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Respon Cepat 24 Jam Via WhatsApp Official</span>
            </div>
          </div>

          {/* RIGHT SIDEBAR: PROFESSIONAL WA FORM */}
          <div className="lg:col-span-8 p-6 sm:p-8 bg-white max-h-[80vh] overflow-y-auto relative text-left">
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer z-20"
              id="close-booking-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isBooked ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Header Title */}
                <div>
                  <h4 className="font-display font-black text-xl sm:text-2xl text-[#0f172a] uppercase tracking-tight">
                    Form Pemesanan Tiket & Carter
                  </h4>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed font-medium mt-1">
                    Lengkapi draf jadwal & data penjemputan di bawah untuk langsung terhubung dengan admin via WhatsApp.
                  </p>
                </div>

                {/* 1. SELEKSI LAYANAN RUTE & ARMADA */}
                <div className="space-y-4 pt-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block">
                    1. PILIH LAYANAN RUTE & ARMADA
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setServiceType('kefa_kupang')}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        serviceType === 'kefa_kupang'
                          ? 'border-orange-500 bg-orange-50/70 text-orange-950 font-bold shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-bold tracking-wider block text-orange-600">Travel Reguler</span>
                      <span className="text-xs font-bold block mt-0.5">Kefa ➔ Kupang</span>
                      <span className="text-[11px] font-black text-slate-900 block">Rp 125.000 /org</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setServiceType('kupang_kefa')}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        serviceType === 'kupang_kefa'
                          ? 'border-orange-500 bg-orange-50/70 text-orange-950 font-bold shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-bold tracking-wider block text-orange-600">Travel Reguler</span>
                      <span className="text-xs font-bold block mt-0.5">Kupang ➔ Kefa</span>
                      <span className="text-[11px] font-black text-slate-900 block">Rp 125.000 /org</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setServiceType('lepas_kunci')}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        serviceType === 'lepas_kunci'
                          ? 'border-blue-500 bg-blue-50/70 text-blue-950 font-bold shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-bold tracking-wider block text-blue-600">Sewa Mobil</span>
                      <span className="text-xs font-bold block mt-0.5">Lepas Kunci (TTU)</span>
                      <span className="text-[11px] font-black text-slate-900 block">Rp 400.000 /hari</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setServiceType('carter')}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        serviceType === 'carter'
                          ? 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-bold shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-bold tracking-wider block text-emerald-600">Privat Rombongan</span>
                      <span className="text-xs font-bold block mt-0.5">Carter 1 Mobil</span>
                      <span className="text-[11px] font-black text-slate-900 block">Mulai Rp 600.000</span>
                    </button>
                  </div>

                  {/* Dropdown Pilihan Mobil */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Pilihan Unit Armada Mobil <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={selectedCarId}
                      onChange={(e) => {
                        setSelectedCarId(e.target.value);
                        const newCar = CARS.find(c => c.id === e.target.value);
                        if (newCar && onCarChange) onCarChange(newCar);
                      }}
                      className="block w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-xs font-sans font-semibold text-slate-900 cursor-pointer bg-white"
                    >
                      {CARS.map(c => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.category} - {c.seats} Kursi)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 2. DATA PENUMPANG */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block">
                    2. DATA PENUMPANG & KONTAK
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Nama Lengkap Pemesan <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Contoh: Yoseph Bere"
                          className="block w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 text-xs font-sans text-slate-900"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Nomor WhatsApp / HP <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Contoh: 081236313554"
                          className="block w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 text-xs font-sans text-slate-900"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. JADWAL & ALAMAT PENJEMPUTAN */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block">
                    3. JADWAL & ALAMAT DOOR TO DOOR
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Tanggal Berangkat <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="block w-full px-3 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 text-xs font-sans text-slate-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Waktu Keberangkatan
                      </label>
                      <select
                        value={departureTime}
                        onChange={(e) => setDepartureTime(e.target.value)}
                        className="block w-full px-3 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 text-xs font-sans font-semibold text-slate-900 cursor-pointer bg-white"
                      >
                        <option value="07:00 (Pagi)">07:00 (Pagi)</option>
                        <option value="11:00 (Siang)">11:00 (Siang)</option>
                        <option value="16:00 (Sore)">16:00 (Sore)</option>
                        <option value="Bebas Jam Carter">Bebas Jam Carter</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Jumlah Penumpang
                      </label>
                      <input
                        type="text"
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        placeholder="1 Orang / 1 Mobil Carter"
                        className="block w-full px-3 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 text-xs font-sans text-slate-900"
                      />
                    </div>
                  </div>

                  {/* Address Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Alamat Lengkap Penjemputan <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={pickupAddress}
                        onChange={(e) => setPickupAddress(e.target.value)}
                        placeholder="Contoh: Jl. El Tari KM 04 Kefamenanu (Depan Kantor/Rumah)..."
                        className="block w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 text-xs font-sans text-slate-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Alamat Tujuan Pengantaran
                      </label>
                      <textarea
                        rows={2}
                        value={destinationAddress}
                        onChange={(e) => setDestinationAddress(e.target.value)}
                        placeholder="Contoh: Oebobo Kota Kupang / Bandara El Tari..."
                        className="block w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 text-xs font-sans text-slate-900"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. KONFIRMASI DP MINIMAL RP 50.000 */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block">
                      4. KETENTUAN DP TANDA JADI (MIN. RP 50.000)
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Garansi Tempat Duduk
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-orange-950 font-medium leading-relaxed">
                        Pemesanan tiket/carter memerlukan <strong>DP minimal Rp 50.000</strong> sebagai tanda jadi resmi agar jadwal dan unit armada diprioritaskan bagi Anda. Sisa pembayaran dilunasi saat keberangkatan.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <label className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-colors ${dpOption === 'dp50' ? 'bg-white border-orange-500 text-orange-950 font-bold shadow-xs' : 'bg-white/60 border-slate-200 text-slate-700'}`}>
                        <input
                          type="radio"
                          name="dp"
                          checked={dpOption === 'dp50'}
                          onChange={() => setDpOption('dp50')}
                          className="accent-orange-600"
                        />
                        <span className="text-xs">DP Min. Rp 50.000</span>
                      </label>

                      <label className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-colors ${dpOption === 'dp100' ? 'bg-white border-orange-500 text-orange-950 font-bold shadow-xs' : 'bg-white/60 border-slate-200 text-slate-700'}`}>
                        <input
                          type="radio"
                          name="dp"
                          checked={dpOption === 'dp100'}
                          onChange={() => setDpOption('dp100')}
                          className="accent-orange-600"
                        />
                        <span className="text-xs">DP Standar Rp 100.000</span>
                      </label>

                      <label className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-colors ${dpOption === 'lunas' ? 'bg-white border-orange-500 text-orange-950 font-bold shadow-xs' : 'bg-white/60 border-slate-200 text-slate-700'}`}>
                        <input
                          type="radio"
                          name="dp"
                          checked={dpOption === 'lunas'}
                          onChange={() => setDpOption('lunas')}
                          className="accent-orange-600"
                        />
                        <span className="text-xs">Bayar Lunas di Tempat</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Action Button */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left text-xs text-slate-500 font-medium">
                    <span className="block font-bold text-slate-900">Siap Kirim Pesanan?</span>
                    <span>Draf pesanan terisi rapi langsung ke WA Official</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-display font-black text-sm px-8 py-3.5 rounded-full shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                    id="submit-booking-to-whatsapp"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pemesanan via WhatsApp ➔</span>
                  </button>
                </div>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                id="booking-success-message"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2 shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-display font-black text-2xl text-slate-900 uppercase">
                  Draf Pemesanan Dikirim!
                </h4>
                <p className="font-sans text-slate-600 text-sm max-w-md leading-relaxed font-medium">
                  Draf pesanan WhatsApp untuk armada <strong>{currentSelectedCar.name}</strong> telah siap. Silakan klik tombol <strong>Kirim</strong> di aplikasi WhatsApp Anda untuk mengonfirmasi jadwal & pembayaran DP.
                </p>
                <button
                  onClick={onClose}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-display font-bold text-sm px-7 py-3 rounded-full shadow-md transition-colors cursor-pointer mt-2"
                >
                  Tutup Form
                </button>
              </motion.div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
