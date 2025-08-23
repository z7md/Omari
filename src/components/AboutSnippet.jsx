// src/components/AboutSnippet.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

function AboutSnippet() {
  return (
    <motion.section
      dir="rtl"
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white text-gray-800 px-6 py-12 rounded-lg max-w-5xl mx-auto text-center"
    >
      <motion.h2
        variants={textVariant(0.3)}
        className="text-[#ab8e3a] text-3xl sm:text-4xl md:text-5xl font-semibold mb-6"
      >
        نبذة عن المجموعة
      </motion.h2>
      <motion.p
        variants={fadeIn("up", 0.4)}
        className="text-lg sm:text-xl leading-relaxed mb-6"
      >
        شركة سعودية استثمارية تأسست عام 2002م من قبل ماجد بن ناصر العمري،
        وتعمل في التطوير العقاري والمشاريع التجارية والإسكانية. تركز المجموعة
        استثماراتها على مدينة بريدة وتتكامل في تقديم خدماتها من خلال الشراكات
        مع كبرى الشركات المتخصصة، إضافةً إلى نشاطها في خدمة المجتمع عبر مبادرات
        تنموية واجتماعية.
      </motion.p>
      <motion.a
        href="/about"
        variants={fadeIn("up", 0.5)}
        className="inline-block px-8 py-3 bg-[#ab8e3a] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition"
      >
        اقرأ المزيد
      </motion.a>
    </motion.section>
  );
}

export default AboutSnippet;
