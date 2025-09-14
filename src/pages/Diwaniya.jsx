// src/pages/Initiative.jsx
import React, { useEffect, useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";

/* =========================
   Variables (config + data)
   ========================= */
const theme = {
  primary: "#ab8e3a",
  pageBg: "#ffffff",
  sectionGold: "#ab8e3a",
  sectionWhite: "#ffffff",
  bullet: "#d1d5db",
  bulletActive: "#ab8e3a",
};

const pageTitle = "ديوانية العمري";

const swiperOptions = {
  modules: [Pagination, Autoplay],
  spaceBetween: 16,
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  pagination: { clickable: true },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: { 320: { slidesPerView: 1 } },
};

const Diwaniyas = [
  {
    id: 1,
    title: "ديوانية العُمري تحتفل بيوم التأسيس",
    images: ["/images/Dy1-1.jpg", "/images/Dy1-2.jpg", "/images/Dy1-3.jpg","/images/Dy1-4.jpg"],
    date:"2025-02-2"
  },{
    id: 2,
    title: "ديوانية العُمري تستضيف معالي الشيخ صالح بن حميد",
    images: ["/images/Dy2-1.webp", "/images/Dy2-2.webp", "/images/Dy2-3.webp","/images/Dy2-4.webp"],
    date:"2022/02/03"},
  {
    id: 3,
    title: "لقاء ” الاستثمار الجرئ .. التجارب والمستقبل ” مع الأستاذ عمر المجدوعي",
    images: ["/images/Dy3-1.jpg", "/images/Dy3-2.jpg", "/images/Dy3-3.jpg","/images/Dy3-4.jpg"],
    date:"2020/2/20"},
  {
    id: 4,
    title: "ديوانية العُمري تحتفل بيوم التأسيس بضيافة الأستاذ عبدالله العثيم  ",
    images: ["/images/Dy4-1.jpg", "/images/Dy4-2.jpg", "/images/Dy4-3.jpg","/images/Dy4-4.jpg"],
    date:"2024-05-03" },
  {
    id: 5,
    title: "فعالية اليوم الشعبي ",
    images: ["/images/Dy5-1.jpg", "/images/Dy5-2.jpg", "/images/Dy5-3.jpg","/images/Dy5-4.jpg"],
    date:"2021/12/05"},
  {
    id: 6,
    title: "ديوانية العُمري ببريدة تستضيف الشيخ ماجد الصباح",
    images: ["/images/Dy6-1.jpg", "/images/Dy6-2.jpg", "/images/Dy6-3.jpg","/images/Dy6-4.jpg"],
    date:"2017/02/24"
  },
  {
    id: 7,
    title: "ديوانية العُمري تستضيف الشيخ صالح المغامسي",
    images: ["/images/Dy7-1.jpg", "/images/Dy7-2.jpg", "/images/Dy7-3.jpg","/images/Dy7-4.jpg"],
    date:"2016/12/20"},
  {
    id: 8,
    title: "ديوانية العُمري ببريدة تستضيف لقاء مجموعة عقال السادس",
    images: ["/images/Dy8-1.webp", "/images/Dy8-2.webp",],
    date:"2015/12/19"
  },

];

/* =============
   Helpers
   ============= */
const slugify = (s) =>
  "Diwaniyas-" +
  s
    .toString()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\u0600-\u06FF\w-]/g, "")
    .toLowerCase();

/* =================
   Page Component
   ================= */
export const Diwaniya = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Match the About-page behavior
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const win = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (win / docH) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionIds = useMemo(
    () => Diwaniyas.map((i) => slugify(i.title)),
    []
  );

  return (
    <div className="">
      <Navbar />
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#ab8e3a] flex justify-center items-center mt-[130px]">ديوانية العمري</h2>
      <motion.p
        variants={fadeIn("up", 0.4)}
        className="text-lg sm:text-xl text-center mb-6 flex justify-center items-center"
      >
ديوانية العُمري صالون ثقافي واقتصادي واجتماعي تُنظّمه مجموعة العُمري منذ عام 2013 في مزرعة الأستاذ ماجد بن ناصر العُمري شمال بريدة. تُعقد لقاءاتها بشكل دوري عبر دعوات خاصة، وتُعد منبرًا للحوار وتبادل الخبرات، حيث استضافت على مرّ السنوات نخبة من العلماء والمفكرين ورجال الأعمال والمثقفين لمناقشة قضايا فكرية واقتصادية واجتماعية مهمة.
      </motion.p>
      {/* عمود تقدم التمرير */}
      <div className="fixed top-0 right-0 w-1 h-full bg-gray-200 z-50">
        <div
          className="w-full transition-all"
          style={{ height: `${scrollProgress}%`, backgroundColor: theme.primary }}
        />
      </div>

      {/* Swiper bullets style */}
      <style>{`
        .swiper-pagination-bullet { background: ${theme.bullet}; opacity: 1; }
        .swiper-pagination-bullet-active { background: ${theme.bulletActive}; }
      `}</style>

      {/* المحتوى */}
      <motion.div
        dir="rtl"
        className="mx-auto w-[90%] px-4 py-12  space-y-20"
        variants={staggerContainer(0.2, 0.2)}
        initial={isMobile ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        style={{ backgroundColor: theme.pageBg }}
      >

        {/* تكرار الأقسام: (عنوان → سوايبر → مقال) مع تصميم متناوب */}
        {Diwaniyas.map((item, idx) => {
          const isGold = idx % 2 === 1; // تناوب الخلفية: أبيض / ذهبي
          const sectionBg = isGold ? theme.sectionGold : theme.sectionWhite;
          const headingColor = isGold ? "#ffffff" : theme.primary;
          const dividerColor = isGold ? "#ffffff" : theme.primary;

          return (
            <motion.section
              key={item.id}
              id={slugify(item.title)}
              variants={fadeIn("up", 0.1)}
              className={`scroll-mt-[100px] px-6 py-12 rounded-lg mb-[30px] ${
                isGold ? "text-white" : "text-gray-800"
              }`}
              style={{ backgroundColor: sectionBg }}
              initial={isMobile ? "show" : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.12 }}
            >
              {/* العنوان + الخط */}
              <div className="flex items-center mb-6">
                <motion.h2
                  variants={textVariant(0.4)}
                  className="relative inline-block font-semibold ml-4"
                  style={{
                    color: headingColor,
                    fontSize: "clamp(1.5rem, 2.2vw, 2.5rem)",
                  }}
                >
                  {item.title}

                </motion.h2>
                
                <motion.div
                  variants={fadeIn("right", 0.4)}
                  className="border-t-2 flex-grow ml-4"
                  style={{ borderColor: dividerColor }}
                />
              
              </div>
              <motion.h2
                  variants={textVariant(0.4)}
                  className="relative ml-4 font-bold justify-end flex"
                  style={{
                    color: headingColor,
                    fontSize: "clamp(1.5rem, 2.2vw, 2.5rem)",
                  }}
                >
                  {item.date}

                </motion.h2>

              {/* Swiper داخل كارد أبيض مع بوردر ذهبي */}
              <motion.div variants={fadeIn("up", 0.5)} className="mb-6">
                <div
                  className="rounded-lg border-2 p-2 bg-white"
                  style={{ borderColor: theme.primary }}
                >
                  <Swiper {...swiperOptions} className="rounded-lg">
                    {item.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <div className="flex items-center justify-center h-full p-2 mt-4">
                          <img
                            src={img}
                            alt={`صورة ${i + 1} للمبادرة ${item.title}`}
                            className="w-full sm:h-64 h-[340px] object-contain rounded-lg"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </motion.div>
            </motion.section>
          );
        })}

        {/* تواصل معنا (بنفس روح التصميم) */}
        <motion.section
          id="contact"
          variants={fadeIn("up", 0.4)}
          initial={isMobile ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="scroll-mt-[100px] text-white px-6 py-12 rounded-lg text-center"
          style={{ backgroundColor: theme.sectionGold }}
        >
          <motion.h2
            variants={textVariant(0.6)}
            className="relative inline-block font-semibold mx-auto mb-4"
            style={{ color: "#fff", fontSize: "clamp(1.75rem, 2.5vw, 3rem)" }}
          >
            تواصل معنا
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.7)} className="text-xl mb-6">
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
      </motion.div>

      <Footer />
    </div>
  );
};

export default Diwaniya;
