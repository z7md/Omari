import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Card, CardContent } from '../components/ui/Card';
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Users,
  Store,
  Car,
  Star
} from "lucide-react";

const Omarycenter = () => {
  const features = [
    { icon: Store, title: "مناطق تجارية", description: "محلات ومطاعم وكافيهات متنوعة" },
    { icon: Car, title: "مواقف سيارات", description: "مواقف واسعة ومريحة" },
    { icon: Star, title: "مسجد", description: "مسجد مجهز بالكامل" },
    { icon: Users, title: "خدمات متكاملة", description: "دعم تقني وحضوري" }
  ];

  const SectionTitle = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold mb-6 mr-4 text-[#ab8e3a]">{children}</h2>
  );

  const PHASES_GALLERY = [
    "/images/omariCen1.JPG",
    "/images/omariCen2.JPG",
    "/images/omariCen3.jpg",
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
      <Hero video="OmaryCenter" />

      {/* Overview */}
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
              العمري سنتر
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.2)}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium"
            >
              عبارة عن مركز تجاري من أرقى المراكز التجارية في مدينة بريدة ، وقد تم إنشاؤه وتصميمه على أحدث الطرز المعمارية، بمساحة 30 ألف متر مربع،
              ويحتوي على إحدى أفضل الماركات المحلية والعالمية. يوجد في المجمع 300 موقف سيارة , ويضم حاليًا واحدة من أكبر صالات الألعاب للأطفال (ملاهي ووش)،
              بالإضافة إلى هايبر ماركت سبت، وعدد من العلامات التجارية المعروفة مثل رد تاغ، آر آند بي، آبل بيز، باسكن روبنز، عبدالصمد القرشي، كما يحتوي على مركز تدريب وتعليمي كبير تابع لجامعة الراجحي.
              يتميز العمري سنتر بموقعه الاستراتيجي على طريق أبي بكر الصديق والذي يعد حالياً احد أهم الشوارع الرئيسية في مدينة بريدة وأكثرها ازدحاما ً,
              مقابل كليات التقنية للبنين وكليات التقنية للبنات، وخلفه كليات التربية للبنات، كما يقع مقابل ممشى الملك عبدالله، وبالقرب من أهم أحياء شمال بريدة حيث القوة الشرائية العالية.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Gallery */}
      <motion.section
        className="pb-16 bg-cream/50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
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
            className="rounded-2xl overflow-hidden border shadow-sm"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              loop
              dir="ltr"
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              breakpoints={{
                320: { slidesPerView: 1 }
              }}
            >
              {PHASES_GALLERY.map((src, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={src}
                    alt={`phase-${i + 1}`}
                    className="w-full h-[42vh] md:h-[56vh] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        className="pb-16 bg-cream/50"
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
                <Card className="group shadow-[#ab8e3a] transition-all duration-300 bg-gradient-card border-[#ab8e3a]/20 hover:-translate-y-1 hover:shadow-lg">
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

      {/* Contact Section */}
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

export default Omarycenter;
