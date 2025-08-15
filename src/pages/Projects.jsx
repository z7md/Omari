
// src/pages/Projects.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// مثال بيانات المشاريع — استبدلها ببياناتكم الحقيقية
const projects = [
  {
    id: 1,
    title: "Mira Group Brand Design",
    image: "./images/ishbilia.png",
    link: "https://www.behance.net/gallery/226248767/Mira-group-brand-design",
  },
  {
    id: 2,
    title: "Project Two",
    image: "./images/omaryCenter.png",
    link: "#",
  },
  {
    id: 3,
    title: "Project Three",
    image: "/images/projects/project-3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Project Four",
    image: "/images/projects/project-4.jpg",
    link: "#",
  },
  // أضف المزيد من العناصر حسب الحاجة
];

export const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // كشف الجوال لتعطيل بعض الحركات
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
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

      {/* حاوية التمرير العمودي المملوء بشاشات */}
      <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {projects.map((project, index) => (
          <motion.section
            key={project.id}
            className="snap-start min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          >
            <motion.div
              className="bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-lg mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white text-4xl font-bold mb-4">{project.title}</h2>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#ab8e3a] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-shadow"
              >
                عرض المشروع
              </a>
            </motion.div>
          </motion.section>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Projects;
