// src/pages/Contact.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

// ====== إعدادات قابلة للتعديل بسرعة ======
const COLOR_PRIMARY = "#ab8e3a"; // اللون الأساسي في الموقع
const HOVER_PRIMARY = "#8f752f"; // لون التحويم للأزرار الأساسية

const MAIN_PHONE_NUMBER = "+966112084111"; // الرقم الرئيسي على الزر الكبير
const EXTRA_PHONE_NUMBERS = [
  "4442  539 53 966+" ,
  "3333 329 50 966+",
];
const WHATSAPP_NUMBER = "966512345678"; // بدون +
const EMAIL = "Marketing@alomari.com.sa";
const ADDRESS_TEXT = "مجموعة العمري بريدة ";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS_TEXT
)}`;
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS_TEXT
)}&output=embed`;

const YOUTUBE_URL =
  "https://youtube.com/@alomarigroup9844?si=IDSHBWx5p59Wb1Nf";
const X_URL = "https://x.com/alomari_group?s=21&t=wqdlARNM_qgIczYChvsHSg";

// ====== أنماط موحّدة لضمان تطابق التصميم ======
const btnBase =
  "flex items-center justify-center gap-3 py-4 rounded-xl shadow transition select-none";
const btnPrimary = `${btnBase} text-white`;
const btnOutline = `${btnBase} bg-[#ab8e3a] border hover:[#8f752f] text-white`;

export const Contact = () => {
  return (
    <>
      <Navbar />

      <main
        dir="rtl"
        className="mx-auto w-[90%] max-w-3xl px-4 py-16 mt-[100px] text-gray-800"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-10"
          style={{ color: COLOR_PRIMARY }}
        >
          تواصل معنا
        </h1>

        {/* القسم العلوي: أزرار رئيسية بنفس أسلوب الموقع */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          
          {/* واتساب */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
            style={{ backgroundColor: COLOR_PRIMARY }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = HOVER_PRIMARY)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLOR_PRIMARY)}
            aria-label="راسلنا على واتساب"
            title="راسلنا على واتساب"
          >
            <span className="text-lg">تواصل عبر الواتس آب</span>
            <FaWhatsapp className="text-2xl" />
          </a>

          {/* اتصال سريع */}
          {/* البريد الإلكتروني (نسخة مطابقة في الأسلوب لكن بإطار أبيض مثل السابق) */}
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(
              "استفسار عبر صفحة التواصل"
            )}`}
            style={{ backgroundColor: COLOR_PRIMARY }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = HOVER_PRIMARY)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLOR_PRIMARY)}
            className={`${btnOutline} bg-[#ab8e3a]`}
            aria-label="راسلنا عبر البريد الإلكتروني"
            title="راسلنا عبر البريد الإلكتروني"
          >
            
            <span className="text-lg text-white">تواصل عبر البريد الإلكتروني</span>
            <AiOutlineMail className="text-2xl" />
          </a>

          {/* يوتيوب */}
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
            style={{ backgroundColor: COLOR_PRIMARY }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = HOVER_PRIMARY)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLOR_PRIMARY)}
            aria-label="زر قناتنا على يوتيوب"
            title="زر قناتنا على يوتيوب"
          >
            
            
            <span className="text-lg">زر قناتنا على يوتيوب</span>
            <FaYoutube className="text-2xl" />
            {/* <FiExternalLink className="text-lg opacity-70" /> */}
          </a>
          {/* منصة X (تويتر) */}
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
            style={{ backgroundColor: COLOR_PRIMARY }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = HOVER_PRIMARY)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLOR_PRIMARY)}
            aria-label="حسابنا على منصة X"
            title="حسابنا على منصة X"
          >
            
            
            <span className="text-lg">تابعنا على X (تويتر)</span>
            <FaXTwitter className="text-2xl"/>
            {/* <FiExternalLink className="text-lg opacity-70" /> */}
          </a>
          
        </div>

        {/* قائمة الأرقام الإضافية — نفس أسلوب البطاقات الحدّية */}
        <section className="mb-8" aria-label="أرقام إضافية">
          <h2 className="text-xl font-semibold mb-3" style={{ color: COLOR_PRIMARY }}>
            أرقام التواصل
          </h2>
          <ul className="space-y-2">
            {EXTRA_PHONE_NUMBERS.map((num) => (
              <li key={num}>
                <a
                  href={`tel:${num}`}
                  className="flex items-center justify-between w-full rounded-xl border p-3 shadow hover:bg-gray-50 transition"
                  aria-label={`اتصال على ${num}`}
                >
                  <div className="flex items-center gap-3">
                    <AiOutlinePhone className="text-xl" style={{ color: COLOR_PRIMARY }} />
                    <span className="font-medium">{num}</span>
                  </div>
                  <span className="text-sm opacity-70">انقر للاتصال</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* خريطة Google Maps مضمّنة */}
        <section aria-label="خريطة الموقع">
          <h2 className="text-xl font-semibold mb-3" style={{ color: COLOR_PRIMARY }}>
            الموقع
          </h2>
          <div className="rounded-xl overflow-hidden border shadow">
            <iframe
              title="خريطة موقع العمري سنتر"
              src={MAPS_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] md:h-[420px]"
            />
          </div>
          <div className="h-[23px]">

          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnPrimary} !py-4`}
            style={{ backgroundColor: COLOR_PRIMARY }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = HOVER_PRIMARY)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLOR_PRIMARY)}
            aria-label="افتح الموقع على خرائط Google (زر قابل للنقر)"
            title="زر قابل للنقر — يفتح خرائط Google في تبويب جديد"
          >
            
            <AiOutlineHome className="text-2xl"/>
            <span className="text-lg">اضغط هنا للوصول للموقع</span>
            <FiExternalLink className="text-lg opacity-70" />
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
