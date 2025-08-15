

// src/components/PartnersCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// استورد الموديولات من المسار العام لهم
import { Navigation, Pagination,Autoplay  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const partners = [
  { name: 'شركة أ', logo: '/images/AbdulsamadALQurashi.png' },
  { name: 'شركة ب', logo: '/images/Applebees.png' },
   { name: 'شركة ج', logo: '/images/CenterPoint.png' },
   { name: 'شركة د', logo: '/images/B-IT.png' },
//   { name: 'شركة هـ', logo: '/images/partner5.png' },
  // … أضف الشركاء عندك هنا
];

export default function Partners() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 relative select-none">
      {/* تلوين الأسهم */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #ab8e3a;
        }
      `}</style>

          <h2 className="text-3xl md:text-5xl font-bold text-[#ab8e3a] mb-6 flex justify-center">
            شركاؤنا
          </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop
        grabCursor
        autoplay={{
          delay: 1500,           // التنقل كل 3 ثواني
          disableOnInteraction: false, // يستمر في العمل بعد السحب اليدوي
          pauseOnMouseEnter: true      // يوقف عند مرور الفأرة فوقه
        }}
        breakpoints={{
          320:  { slidesPerView: 1, spaceBetween: 16 },
          640:  { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {partners.map((p, i) => (
          <SwiperSlide key={i}>
            <div className="flex items-center justify-center p-4">
              <img
                src={p.logo}
                alt={p.name}
                className="h-[200px] object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

