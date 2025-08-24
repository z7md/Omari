// src/pages/Contact.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineHome ,AiOutlineMail} from "react-icons/ai";

import { FiExternalLink } from "react-icons/fi";

// عدّل البيانات هنا بسهولة
const PHONE_NUMBER = "+966112084111";
const WHATSAPP_NUMBER = "966512345678"; // بدون +
const ADDRESS_TEXT = "مجموعة العمري بريدة ";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS_TEXT
)}`;

// خريطة مضمّنة (بدون مفتاح API) بناءً على العنوان
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS_TEXT
)}&output=embed`;

export const Contact = () => {
  return (
    <>
      <Navbar />

      <main
        dir="rtl"
        className="mx-auto w-[90%] max-w-3xl px-4 py-16 mt-[100px] text-gray-800"
      >
        <h1 className="text-[#ab8e3a] text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-10">
          تواصل معنا
        </h1>

        <div className="grid grid-cols-1 gap-4 mb-6">
          {/* واتساب (لون أغمق) */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#ab8e3a] text-white py-4 rounded-xl shadow hover:bg-[#8f752f] transition"
            aria-label="راسلنا على واتساب"
            title="راسلنا على واتساب"
          >

            <span className="text-lg">تواصل عبر الواتس آب </span>
            <FaWhatsapp className="text-2xl" />
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#ab8e3a] text-white py-4 rounded-xl shadow hover:bg-[#8f752f] transition"
            aria-label="راسلنا على واتساب"
            title="راسلنا على واتساب"
          >

            <span className="text-lg">تواصل عبر البريد الإلكتروني </span>
            <AiOutlineMail className="text-2xl" />
          </a>

          {/* اتصال + توضيح الرقم بوضوح */}
          <div className="flex flex-col items-stretch gap-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-3 bg-[#ab8e3a] text-white py-4 rounded-xl shadow hover:bg-[#8f752f] transition"
              aria-label={`اتصل بنا على ${PHONE_NUMBER}`}
              title={`اتصل بنا على ${PHONE_NUMBER}`}
            >
           <span className="text-lg">اتصل بنا الآن</span>
              <AiOutlinePhone className="text-2xl" />

            </a>
          </div>

          {/* زر الخرائط + إيضاح أنه قابل للنقر */}
        </div>

        {/* خريطة Google Maps مضمّنة */}
        <section aria-label="خريطة الموقع">
          <h2 className="text-xl font-semibold mb-3 text-[#ab8e3a]">الموقع</h2>
          <div className="rounded-xl overflow-hidden border shadow">
            <iframe
              title="خريطة موقع العمري سنتر"
              src={MAPS_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] md:h-[420px]"
            />
          </div>
          <div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className=" mt-[20px] flex items-center justify-center gap-3 bg-white border py-4 rounded-xl shadow hover:bg-gray-50 transition"
            aria-label="افتح الموقع على خرائط Google (زر قابل للنقر)"
            title="زر قابل للنقر — يفتح خرائط Google في تبويب جديد"
          >
            <AiOutlineHome className="text-2xl text-[#ab8e3a]" />
            <span className="text-lg">اضغط هنا للوصول للموقع</span>
            <FiExternalLink className="text-lg opacity-70" />
          </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
