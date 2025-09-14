import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { Badge } from '../components/ui/Badge';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import HERO_IMAGE_MD from "../../public/images/alderah11.webp";
import HERO_IMAGE from "../../public/images/alderah12.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Home,
  Store,
  Car,
  TreePine,
  Phone,
  Mail,
  ArrowLeft,
  Star
} from "lucide-react";
import projectHero from "../../public/images/omaryCenter.webp";
import patternBg from "../../public/images/omaryCenter.webp";
import { Link } from "react-router-dom";

const ProjectAldeerahPage = () => {
  const features = [
    { 
      icon: Store, 
      title: "مركز الديرة", 
      description: "مجمع تجاري مميز يقع وسط مدينة بريدة على ثلاثة شوارع رئيسية بطريق الملك عبدالعزيز، بمساحة إجمالية تبلغ 7,000 متر مربع" 
    },
    { 
      icon: Car, 
      title: "مواقف سيارات", 
      description: "يضم أكثر من 100 موقف سيارة لخدمة الزوار والعملاء" 
    },
    { 
      icon: Star, 
      title: "نادي رياضي", 
      description: "يحتوي على نادي IN2 Fitness بمساحة 1,500 متر مربع ويعد من أكبر الأندية الرياضية في المملكة" 
    },
    { 
      icon: Users, 
      title: "خدمات إضافية", 
      description: "يضم مركز خدمات سيارات في الجهة الخلفية بالإضافة إلى مصرف الإنماء في ساحة المواقف" 
    }
  ];
  
  const SectionTitle = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold mb-6 mr-4 text-[#ab8e3a]">{children}</h2>
  );

  const PHASES_GALLERY = [
    "/images/alderah13.webp",
    "/images/alderah14.webp",
    "/images/alderah15.webp",
  ];

  return (
    <div className="min-h-screen bg-background">
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

      {/* Navigation */}
      <Navbar />

      {/* Hero with motion */}
      <motion.section
        className="relative w-full h-[87vh] md:h-[87vh] mt-[90px]"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        {/* Image for small screens */}
        <img
          src={HERO_IMAGE}
          alt="Project Hero"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />

        {/* Image for medium and larger screens */}
        <img
          src={HERO_IMAGE_MD}
          alt="Project Hero MD"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />

        <div className="absolute inset-0" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          {/* محتوى الهيرو (اختياري) */}
        </div>
      </motion.section>

      {/* Overview with motion */}
      <motion.section
        className="pt-16 bg-cream/50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              variants={textVariant(0.1)}
              className="text-4xl font-extrabold text-[#ab8e3a] mb-6 tracking-tight"
            >
              مركز الديرة
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.2)}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium"
            >
              مجمع تجاري مميز يقع وسط مدينة بريدة على ثلاثة شوارع رئيسية بطريق الملك عبدالعزيز، بمساحة إجمالية تبلغ 7,000 متر مربع، ويضم أكثر من 100 موقف سيارة لخدمة الزوار والعملاء. يضم المجمع نادي (IN2 Fitness) بمساحة 1,500 متر مربع ويعد من أكبر الأندية الرياضية في المملكة، كما يحتوي على مركز خدمات سيارات في الجهة الخلفية، بالإضافة إلى وجود مصرف الإنماء في ساحة المواقف
            </motion.p>
          </div>
        </div>
      </motion.section>

{/* Gallery with motion — vertical stack (each image has its own border) */}
<motion.section
  className="pb-16 bg-cream/50"
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.15 }}
>
  <div className="container mx-auto px-4">
    <motion.div
      variants={textVariant(0.1)}
      className="mt-12 mx-auto lg:w-[1024px]"
    >
      <SectionTitle>صور للمشروع</SectionTitle>
    </motion.div>

    <motion.div
      variants={fadeIn("up", 0.2)}
      className="flex flex-col gap-6"
    >
      {PHASES_GALLERY.map((src, i) => (
        <div
          key={i}
          className="border-[#ab8e3a] border-2 rounded-xl shadow-sm overflow-hidden"
        >
          <img
            src={src}
            alt={`phase-${i + 1}`}
            className="w-full h-auto max-h-[70vh] object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  </div>
</motion.section>


      {/* Features with motion */}
      <motion.section
        className="py-16 bg-cream/50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn("up", 0.15)}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.1 + index * 0.08)}
              >
                <Card className="group shadow-[#ab8e3a] h-[274px] transition-all duration-300 bg-gradient-card border-[#ab8e3a]/20 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-[#ab8e3a] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#ab8e3a] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section (موجود أصلاً مع motion) */}
      <div className="flex justify-center items-center">
        <motion.section
          id="contact"
          variants={fadeIn("up", 0.4)}
          initial={"hidden"}
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="scroll-mt-[100px] bg-[#ab8e3a] text-white px-6 py-12 rounded-lg text-center w-5xl m-12"
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
            لأي استفسار أو شراكة، يسعدنا تواصلكم عبر صفحة التواصل.
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

      <Footer />
    </div>
  );
};

export default ProjectAldeerahPage;
