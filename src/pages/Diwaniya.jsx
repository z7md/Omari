// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";
// استيراد أيقونات React Icons
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export const Diwaniya = () => {
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

      <Footer />
    </>
  );
};

export default Diwaniya;
