import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Ishbilia = () => {
  // بيانات المشروع السكني
  const projectData = {
    title: "المشروع السكني الفاخر",
    mainImage: "/images/hom3_enhanced.png",
    attachments: [
      {
        id: 1,
        title: "الفلل السكنية",
        description: "تصاميم فاخرة بمساحات مختلفة تلبي جميع احتياجات العائلة، تتميز بتصاميم معمارية مبتكرة وحدائق خاصة.",
        image: "/images/vila.png",
        features: [
          "مساحات تبدأ من 400م² حتى 1200م²",
          "تصاميم حديثة بتشطيبات فاخرة",
          "حدائق خاصة ونوافير مياه",
          "مواقف سيارات متعددة"
        ]
      },
      {
        id: 2,
        title: "البوليفارد",
        description: "منطقة تسوق وترفيه بطول 1.5 كم مع مقاهي ومطاعم عالمية، مصممة لتوفر تجربة تسوق فريدة.",
        image: "/images/Bole.png",
        features: [
          "أكثر من 100 محل تجاري",
          "مطاعم ومقاهي عالمية",
          "منطقة ترفيهية للأطفال",
          "أحداث وفعاليات دورية"
        ]
      },
      {
        id: 3,
        title: "المدارس العالمية",
        description: "مجمع تعليمي يضم أفضل المدارس الدولية المعتمدة، مع مرافق تعليمية متطورة.",
        image: "/images/school.png",
        features: [
          "مناهج أمريكية وبريطانية",
          "مرافق رياضية متكاملة",
          "معامل علوم وتكنولوجيا",
          "أنشطة لا صفية متنوعة"
        ]
      },
      {
        id: 4,
        title: "الكمباوند السكني",
        description: "تصميم عصري مع أنظمة أمن متكاملة ومرافق رياضية، يوفر خصوصية وأمانًا كاملًا.",
        image: "/images/comband.png",
        features: [
          "نظام أمني 24/7",
          "صالات رياضية ومسابح",
          "حدائق ونوافير مركزية",
          "خدمات صيانة دورية"
        ]
      }
    ],
    projectFeatures: [
      "موقع استراتيجي في قلب المدينة",
      "مساحات خضراء تشكل 60% من المساحة الكلية",
      "نظام أمني متكامل 24/7",
      "مراكز خدمية وتجارية داخلية",
      "صالات رياضية ومسابح أولمبية"
    ]
  };

  return (
    <>
      <Navbar/>
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
        .attachment-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(171, 142, 58, 0.3);
          border-color: #ab8e3a;
        }
      `}</style>
      
      <div className="min-h-screen bg-white mt-[70px] md:mt-[100px]">
        {/* الصورة الرئيسية للمشروع (كاملة الشاشة) */}
        <div className="w-full h-screen max-h-[80vh] overflow-hidden relative">
          <img 
            src={projectData.mainImage} 
            alt="صورة رئيسية للمشروع السكني"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#ab8e3a]/30 to-transparent flex items-end justify-center pb-16">
            {/* <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center text-white drop-shadow-lg">
              {projectData.title}
              <div className="w-32 h-1 bg-[#ab8e3a] mx-auto mt-4"></div>
            </h1> */}
          </div>
        </div>
        
        {/* محتوى الصفحة */}
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* مرفقات المشروع */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#ab8e3a] mb-8 relative pb-4">
              مرافق المشروع
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#ab8e3a]"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectData.attachments.map((attachment) => (
                <div 
                  key={attachment.id} 
                  className="attachment-card bg-white rounded-lg shadow-md overflow-hidden border border-[#ab8e3a] transition-all duration-300"
                >
                  {/* صورة المرفق */}
                  <div className="w-full h-64 overflow-hidden relative">
                    <img
                      src={attachment.image}
                      alt={`صورة ${attachment.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#ab8e3a]/20 hover:bg-transparent transition-all duration-300"></div>
                  </div>
                  
                  {/* محتوى المرفق */}
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#ab8e3a] mb-3 border-b border-[#ab8e3a]/30 pb-2">
                      {attachment.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {attachment.description}
                    </p>
                    
                    {/* مميزات المرفق */}
                    <div className="mt-4">
                      <h4 className="text-lg font-medium text-[#ab8e3a] mb-2 border-b border-[#ab8e3a]/30 pb-1 inline-block">
                        المميزات:
                      </h4>
                      <ul className="space-y-2 mt-3">
                        {attachment.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#ab8e3a] ml-2">•</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* مميزات المشروع العامة */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12 border border-[#ab8e3a]/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#ab8e3a]"></div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#ab8e3a] mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              مميزات المشروع
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {projectData.projectFeatures.map((feature, index) => (
                <li key={index} className="flex items-start bg-[#faf8f3] p-3 rounded-lg">
                  <span className="text-[#ab8e3a] ml-2">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* خريطة الموقع */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12 border border-[#ab8e3a]/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#ab8e3a]"></div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#ab8e3a] mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              موقع المشروع
            </h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden border border-[#ab8e3a]/30">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1ddummy!2d46.6752957!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ4LjgiTiA0NsKwNDAnMzEuMCJF!5e0!3m2!1sen!2ssa!4v1620000000000!5m2!1sen!2ssa" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title="موقع المشروع على الخريطة"
              ></iframe>
            </div>

          </div>
          
          <motion.section
          id="contact"
          variants={fadeIn("up", 0.4)}
                            initial={"hidden"}
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
          className="scroll-mt-[100px] bg-[#ab8e3a] text-white px-6 py-12 rounded-lg text-center"
        >
          <motion.h2
            variants={textVariant(0.6)}
            className="relative inline-block text-white text-3xl sm:text-4xl md:text-5xl font-semibold mx-auto mb-4"
          >
            تواصل معنا
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.7)}
            className="text-xl sm:text-2xl mb-6"
          >
            لأي استفسار أو شراكة، يسعدنا تواصلكم عبر القنوات التالية:
          </motion.p>
          <motion.a
            href="/contact"
            variants={fadeIn("up", 0.7)}
            className="inline-block px-8 py-3 bg-white text-[#ab8e3a] font-semibold rounded-full shadow-xl hover:shadow-2xl transition-shadow"
          >
            ابدأ المحادثة الآن
          </motion.a>
        </motion.section>
        </div>

      </div>
      <Footer/>
    </>
  );
};