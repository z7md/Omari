// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";
// استيراد أيقونات React Icons
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // كشف الجوال لتعطيل حركات معينة
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // حساب تقدم التمرير للـ Progress Bar
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionIds = ["contact"];

  return (
    <>
      <Navbar />

      {/* عمود تقدم التمرير */}
      <div className="fixed top-0 right-0 w-1 h-full bg-gray-200 z-50">
        <div
          className="w-full bg-[#ab8e3a] transition-all"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* نقاط التنقل الجانبية */}
      <div className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 flex-col space-y-3 z-40">
        {sectionIds.map((id) => (
          <a key={id} href={`#${id}`}>
            <motion.span
              whileHover={{ scale: 1.3 }}
              className="block w-3 h-3 bg-gray-300 rounded-full hover:bg-[#ab8e3a] transition-colors"
            />
          </a>
        ))}
      </div>

      <motion.div
        dir="rtl"
        className="mx-auto w-[90%] px-4 py-16 mt-[100px]"
        variants={staggerContainer(0.2, 0.2)}
        initial={isMobile ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >


        <motion.section
          id="contact"
          variants={fadeIn("up", 0.3)}
          className="scroll-mt-[100px] bg-white text-gray-800 px-6 py-12 rounded-lg"
        >
          <div className="flex items-center mb-6 justify-center">
            <motion.h2
              variants={textVariant(0.3)}
              className="relative inline-block text-[#ab8e3a] text-3xl sm:text-4xl md:text-5xl font-semibold"
            >
              تواصل معنا
            </motion.h2>
          </div>
                  {/* === بطاقات معلومات الاتصال === */}

        <motion.div
          variants={fadeIn("up", 0.2)}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-12 bg-gray-100 p-4 rounded-lg max-w-2xl mx-auto space-y-6" 
        >
          {/* عنوان اختياري للـ section */}
          <span className="sr-only">معلومات التواصل السريعة</span>

          {/* بطاقة العنوان – كاملة كرابط وبارتفاع أكبر */}
          <a
            href="https://www.google.com/maps/place/Your+Company+Address"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-white rounded-lg p-6 flex flex-col items-center justify-center h-[200px] hover:bg-gray-50 transition-colors"
          >
            <AiOutlineHome className="text-[#ab8e3a] text-4xl" />
            <p className="mt-4 text-center text-lg">
              العمري سنتر  - طريق ابو بكر الصديق - بريدة
            </p>
          </a>

          {/* بطاقة الهاتف – كاملة كرابط وبارتفاع أكبر */}
          <a
            href="tel:+966112084111"
            className=" bg-white rounded-lg p-6 flex flex-col items-center justify-center h-[200px] hover:bg-gray-50 transition-colors"
          >
            <AiOutlinePhone className="text-[#ab8e3a] text-4xl" />
            <p className="mt-4 text-center text-lg">00966 112084111</p>
          </a>

                    <a
           href="https://wa.me/966512345678?text=مرحباً، أود الاستفسار..."
            className="bg-white rounded-lg p-6 flex flex-col items-center justify-center h-[200px] hover:bg-gray-50 transition-colors"
          >
            <FaWhatsapp className="text-[#ab8e3a] text-4xl" />
            <p className="mt-4 text-center text-lg">واتساب</p>
          </a>

          {/* بطاقة الإيميل – كاملة كرابط وبارتفاع أكبر */}
          <a
            href="mailto:z7mdd90@gmail.com"
            className=" bg-white rounded-lg p-6 flex flex-col items-center justify-center h-[200px] hover:bg-gray-50 transition-colors"
          >
            <AiOutlineMail className="text-[#ab8e3a] text-4xl" />
            <p className="mt-4 text-center text-lg">info@nmrrre.com.sa</p>
          </a>
        </motion.div>
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="text-xl sm:text-2xl leading-relaxed mb-8 text-center"
          >
            لأي استفسار أو شراكة، يسعدنا تواصلكم عبر تعبئة النموذج أدناه أو عبر
            قنواتنا المباشرة:
          </motion.p>

          {/* نموذج التواصل */}
          <motion.form
            variants={fadeIn("up", 0.5)}
            className="max-w-2xl mx-auto space-y-6"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-lg">
                الاسم
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="الاسم الكامل"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ab8e3a] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-lg">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="z7mdd90@gmail.com"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ab8e3a] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 text-lg">
                رقم الهاتف
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="05XXXXXXXX"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ab8e3a] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 text-lg">
                الرسالة
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="اكتب رسالتك هنا..."
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ab8e3a] outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#ab8e3a] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-shadow"
            >
              إرسال الرسالة
            </button>
          </motion.form>

        </motion.section>
      </motion.div>

      <Footer />
    </>
  );
};

export default Contact;
