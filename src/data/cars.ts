import { Car, Testimonial } from '../types';

export const CARS: Car[] = [
  {
    id: 'avanza',
    name: 'Toyota Avanza',
    nameAr: 'تويوتا أفانزا',
    category: 'Family MPV',
    pricePerDay: 600000,
    priceDisplay: 'Travel PP 125rb/Org | Carter mulai 600rb',
    image: '/avanza.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin (Irit & Handal)',
    fuelAr: 'بنزين',
    includeList: ['AC Double Blower', 'Audio System (Bluetooth & USB)', 'Kabin Bersih & Steril', 'Bagasi Luas & Nyaman', 'Driver Berpengalaman'],
    includeListAr: ['مكيف', 'بلوتوث', 'سائق'],
    description: 'Mobil MPV paling favorit untuk travel Rute Kefa - Kupang PP. Kabin lega, suspensi halus, dan performa handal di perjalanan jauh.',
    descriptionAr: 'سيارة عائلية ممتازة للرحلات السريعة والمريحة.',
    rating: 4.9,
    reviewsCount: 118,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas Utama', value: 'Full AC Double Blower, Musikal Bluetooth, Charger HP', labelAr: 'الميزات', valueAr: 'مكيف، بلوتوث' },
      { label: 'Kondisi Unit', value: 'Selalu Bersih, Harum & Steril', labelAr: 'الحالة', valueAr: 'ممتازة' },
      { label: 'Tarif Keberangkatan', value: 'Travel PP 125rb/org | Carter mulai 600rb', labelAr: 'الأجرة', valueAr: '١٢٥ ألف' }
    ]
  },
  {
    id: 'rush',
    name: 'Toyota Rush',
    nameAr: 'تويوتا راش',
    category: 'Compact SUV',
    pricePerDay: 600000,
    priceDisplay: 'Travel PP 125rb/Org | Carter mulai 600rb',
    image: '/rush.jpg',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin',
    fuelAr: 'بنزين',
    includeList: ['Ground Clearance Tinggi', 'AC Digital Cool', 'Suspensi Empuk & Stabil', 'Audio Touchscreen Bluetooth', 'Driver Profesional'],
    includeListAr: ['مكيف', 'سائق'],
    description: 'SUV gagah dan tinggi, sangat cocok untuk melintasi rute Kefa - Kupang dengan stabilitas dan kenyamanan maksimal.',
    descriptionAr: 'سيارة رياضية مرتفعة مريحة جداً في الطرقات.',
    rating: 4.9,
    reviewsCount: 94,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas Utama', value: 'AC Digital Multi-Zone, Audio Touchscreen, USB Charging Port', labelAr: 'الميزات', valueAr: 'مكيف، شاشة' },
      { label: 'Kondisi Unit', value: 'Unit Prima & Pengecekan Rutin', labelAr: 'الحالة', valueAr: 'ممتازة' },
      { label: 'Tarif Keberangkatan', value: 'Travel PP 125rb/org | Carter mulai 600rb', labelAr: 'الأجرة', valueAr: '١٢٥ ألف' }
    ]
  },
  {
    id: 'wuling-confero',
    name: 'Wuling Confero',
    nameAr: 'وولينج كونفيرو',
    category: 'Spacious MPV',
    pricePerDay: 600000,
    priceDisplay: 'Travel PP 125rb/Org | Carter mulai 600rb',
    image: '/wuling.png',
    seats: 8,
    transmission: 'Manual',
    fuel: 'Bensin',
    fuelAr: 'بنزين',
    includeList: ['Ruang Kabin Ekstra Ekstra Luas', 'AC Double Blower', 'Reclining Seats Ergonomis', 'Sistem Audio Jernih', 'Driver Ramah & Sopan'],
    includeListAr: ['مكيف', 'سائق'],
    description: 'MPV dengan kabin terluas di kelasnya, mampu menampung rombongan keluarga dengan legroom legab dan tempat duduk sangat nyaman.',
    descriptionAr: 'سيارة واسعة جداً ومريحة للرحلات العائلية.',
    rating: 4.8,
    reviewsCount: 76,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '8 Kursi Penumpang', labelAr: 'السعة', valueAr: '٨ ركاب' },
      { label: 'Fasilitas Utama', value: 'AC Double Blower, Legroom Ekstra Luas, USB Charger', labelAr: 'الميزات', valueAr: 'مكيف، شاحن' },
      { label: 'Kondisi Unit', value: 'Kabin Bersih & Performa Mesin Prima', labelAr: 'الحالة', valueAr: 'ممتازة' },
      { label: 'Tarif Keberangkatan', value: 'Travel PP 125rb/org | Carter mulai 600rb', labelAr: 'الأجرة', valueAr: '١٢٥ ألف' }
    ]
  },
  {
    id: 'suzuki-xl7',
    name: 'Suzuki XL7',
    nameAr: 'سوزوكي إكس إل ٧',
    category: 'Crossover MPV',
    pricePerDay: 600000,
    priceDisplay: 'Travel PP 125rb/Org | Carter mulai 600rb',
    image: '/xl7.png',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin (Irit Premium)',
    fuelAr: 'بنزين',
    includeList: ['Desain Crossover Modern', 'AC Auto Climate Control', 'Suspensi Nyaman & Senyap', 'Audio Touchscreen 8 Inci', 'Driver Berpengalaman'],
    includeListAr: ['مكيف', 'شاشة', 'سائق'],
    description: 'Crossover MPV modern dengan tampilan sporty dan kenyamanan kelas atas untuk perjalanan jauh Kefa - Kupang PP.',
    descriptionAr: 'سيارة كروك أوفر حديثة ومريحة للغاية.',
    rating: 4.9,
    reviewsCount: 88,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas Utama', value: 'AC Auto Climate Control, Touchscreen Display, Power Outlet', labelAr: 'الميزات', valueAr: 'مكيف، شاشة' },
      { label: 'Kondisi Unit', value: 'Unit Baru, Bersih & Steril', labelAr: 'الحالة', valueAr: 'جديدة' },
      { label: 'Tarif Keberangkatan', value: 'Travel PP 125rb/org | Carter mulai 600rb', labelAr: 'الأجرة', valueAr: '١٢٥ ألف' }
    ]
  },
  {
    id: 'calya',
    name: 'Toyota Calya',
    nameAr: 'تويوتا كاليا',
    category: 'Economical MPV',
    pricePerDay: 600000,
    priceDisplay: 'Travel PP 125rb/Org | Carter mulai 600rb',
    image: '/calya.png',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin (Sangat Irit)',
    fuelAr: 'بنزين',
    includeList: ['AC Rear Air Circulator', 'Kabin Bersih & Harum', 'Audio Bluetooth', 'Bagasi Fleksibel', 'Driver Terpercaya'],
    includeListAr: ['مكيف', 'سائق'],
    description: 'Pilihan mobil hemat energi yang efisien dan ekonomis untuk perjalanan keluarga maupun carter drop alamat.',
    descriptionAr: 'سيارة اقتصادية مريحة ومناسبة جداً.',
    rating: 4.8,
    reviewsCount: 65,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas Utama', value: 'AC Rear Air Circulator, Audio Bluetooth, Charger', labelAr: 'الميزات', valueAr: 'مكيف، بلوتوث' },
      { label: 'Kondisi Unit', value: 'Selalu Terawat & Siap Jalan', labelAr: 'الحالة', valueAr: 'ممتازة' },
      { label: 'Tarif Keberangkatan', value: 'Travel PP 125rb/org | Carter mulai 600rb', labelAr: 'الأجرة', valueAr: '١٢٥ ألف' }
    ]
  },
  {
    id: 'sigra',
    name: 'Daihatsu Sigra',
    nameAr: 'دايهاتسو سيجرا',
    category: 'Economical MPV',
    pricePerDay: 600000,
    priceDisplay: 'Travel PP 125rb/Org | Carter mulai 600rb',
    image: '/sigra.png',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin',
    fuelAr: 'بنزين',
    includeList: ['AC Dingin & Steril', 'Audio Bluetooth', 'Suspensi Stabil', 'Kabin Harum', 'Driver Profesional'],
    includeListAr: ['مكيف', 'سائق'],
    description: 'Mobil MPV yang praktis, lincah, dan ekonomis untuk seluruh kebutuhan travel penumpang & carter privat.',
    descriptionAr: 'سيارة عمل واقتصادية ممتازة.',
    rating: 4.8,
    reviewsCount: 58,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas Utama', value: 'AC Air Circulator, System Audio, Safety Belt Lengkap', labelAr: 'الميزات', valueAr: 'مكيف، أمان' },
      { label: 'Kondisi Unit', value: 'Kabin Steril & Rutin Servis', labelAr: 'الحالة', valueAr: 'ممتازة' },
      { label: 'Tarif Keberangkatan', value: 'Travel PP 125rb/org | Carter mulai 600rb', labelAr: 'الأجرة', valueAr: '١٢٥ ألف' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Yusuf BERE',
    role: 'Penumpang Reguler Kefa - Kupang',
    text: 'Sangat puas dengan pelayanan Rajawali Trans. Mobil Avanza-nya sangat bersih, AC dingin, dan driver membawa kendaraan dengan sangat halus dan aman.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    carModel: 'Toyota Avanza',
    date: '2026-07-15'
  },
  {
    id: '2',
    name: 'Maria S.',
    role: 'Carter Privat Rombongan Dinas',
    text: 'Saya carter 1 mobil Wuling Confero untuk acara keluarga Kefa ke Kupang. Driver sangat sopan, tepat waktu penjemputannya di rumah.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    carModel: 'Wuling Confero',
    date: '2026-07-10'
  },
  {
    id: '3',
    name: 'Antonius F.',
    role: 'Pelanggan Langganan Travel',
    text: 'Sudah berulang kali pakai Rajawali Trans untuk perjalanan Kefa Kupang. Pelayanannya selalu konsisten ramah, mobil terawat prima.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    carModel: 'Toyota Rush',
    date: '2026-07-02'
  }
];
