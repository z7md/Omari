import React from 'react';
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { IoCallOutline } from "react-icons/io5";
import Image from "../../public/images/logo.png";
import { fadeIn } from "../utils/motion";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gray-50 py-12 text-right text-gray-800"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Brand/Logo + Description + Icons */}
          <motion.div className="lg:col-span-4 flex flex-col">
            <img
              src={Image}
              alt="logo"
              className="w-[100px] h-auto object-contain mb-4"
            />
            <motion.p
              variants={fadeIn("up", 0.5)}
              className="text-gray-600 text-sm leading-relaxed mb-6"
            >
              نهدف في مثري للخدمات البيئية إلى تقديم حلول عملية ومتكاملة لإدارة
              المخلفات، بخدمة سريعة، موثوقة، وملتزمة بأعلى المعايير البيئية. رضا
              العميل وجودة الخدمة هما أولويتنا.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.6)} className="flex gap-4">
              {/* Call */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="tel:+966553116613"
                className="w-10 h-10 bg-[#ab8e3a] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="Call Us"
              >
                <IoCallOutline className="w-5 h-5" />
              </motion.a>
              {/* WhatsApp */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://wa.me/966553116613"
                className="w-10 h-10 bg-[#ab8e3a] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="Chat with us on WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </motion.a>
              {/* Google Maps */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://maps.app.goo.gl/wAiS7hjF43SUVmVF8?g_st=ic"
                className="w-10 h-10 bg-[#ab8e3a] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="View location on Google Maps"
              >
                <SiGooglemaps className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links + Certificates */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Links Section */}
            <div>
              <h2 className="text-lg font-bold text-[#ab8e3a] mb-4">
                روابط مهمة
              </h2>
              <ul className="space-y-3 text-[16px] text-gray-600 font-medium">
                {["خدماتنا","من نحن","تواصل معنا","آراء العملاء"].map((item, idx) => (
                  <motion.li key={idx} whileHover={{ x: 5 }}>
                    <a
                      href={`/#${item.replace(/\s/g, "").toLowerCase()}`}
                      className="hover:text-[#ab8e3a]/80 transition-colors cursor-pointer"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="text-lg font-bold text-[#ab8e3a] mb-4">
                الشهادات والرخص
              </h3>
              <ul className="space-y-3 text-[16px] text-gray-600 font-medium">
                {[
                  "المركز الوطني لإدارة النفايات (MWAN)",
                  "المركز الوطني للرقابة على الالتزام البيئي",
                  "شهادة سلامة بيئية معتمدة"
                ].map((cert, idx) => (
                  <motion.li key={idx} whileHover={{ x: 5 }}>
                    <a
                      href="#"
                      className="hover:text-[#ab8e3a]/80 transition-colors cursor-pointer"
                    >
                      {cert}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          className="border-t border-gray-200 mt-12 pt-6"
        >
          <motion.div
            variants={fadeIn("up", 0.9)}
            className="flex flex-col md:flex-row justify-between items-center text-center gap-4 text-sm text-gray-600"
          >
            <span>
              © {new Date().getFullYear()} مثرى للخدمات البيئية – جميع الحقوق محفوظة
            </span>
            <span>
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/hamad-almohaimeed/"
                className="text-[#ab8e3a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hamad Almohaimeed
              </a>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
