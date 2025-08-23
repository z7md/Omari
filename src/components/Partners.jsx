

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
   { name: '5', logo: '/images/P5.png' },
   { name: '6', logo: '/images/P6.png' },
   { name: '7', logo: '/images/P7.png' },
   { name: '8', logo: '/images/P8.png' },
   { name: '9', logo: '/images/P9.png' },
   { name: '10', logo: '/images/P10.png' },
   { name: '11', logo: '/images/P11.png' },
   { name: '12', logo: '/images/P12.png' },
   { name: '13', logo: '/images/P13.png' },
   { name: '14', logo: '/images/P14.png' },
   { name: '15', logo: '/images/P15.png' },
   { name: '16', logo: '/images/P16.png' },
   { name: '17', logo: '/images/P17.png' },
   { name: '18', logo: '/images/P18.png' },
   { name: '19', logo: '/images/P19.png' },
   { name: '20', logo: '/images/P20.png' },
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
        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #ab8e3a;
        }
      `}</style>

          <h2 className="text-3xl md:text-5xl font-bold text-[#ab8e3a] mb-6 flex justify-center">
            شركاء النجاح
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
          320:  { slidesPerView: 3, spaceBetween: 16 },
          640:  { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 24 },
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

