import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Image from "../../public/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "مجموعة العمري" },
    { href: "/projects", label: "مشاريعنا" },
    { href: "/contact", label: "تواصل معنا" },
    { href: "#testimonials", label: "اراء العملاء" },
  ];

  return (
    <motion.nav

      viewport={{ once: true }}
      className={`fixed top-0 left-0 right-0 z-50  h-[100px] text-right transition-all duration-300 ${
        isScrolled ? "bg-white  border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="w-full flex h-full justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Logo */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          className="flex items-center gap-1 cursor-pointer"
        >
          <img
            src={Image}
            alt="Logo"
            style={{ width: "120px", height: "90px", objectFit: "cover" }}
          />
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={fadeIn("left", 0.3)}
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <HiX className="h-[38px] w-[38px]" />
          ) : (
            <HiMenu className="h-[38px] w-[38px]" />
          )}
        </motion.button>

        {/* Desktop Navigation Links */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          className="hidden md:flex gap-10 justify-center items-center"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={fadeIn("down", 0.1 * (index + 1))}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#ab8e3a] after:transition-all
                ${
                  activeLink === link.href
                    ? "text-[#ab8e3a] after:w-full"
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        {/* يمكنك تفعيل الزر لاحقًا */}
        <motion.button
          variants={fadeIn("left", 0.3)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block text-white px-6 py-2.5 rounded-lg hover:bg-[#ab8e3a] text-sm font-medium transition-all hover:shadow-lg  cursor-pointer"
        >
          {/* <a href="tel:+966563309090">اتصل بنا الآن</a> */}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-white border-t border-gray-100 py-4"
        >
          <motion.div
            variants={fadeIn("down", 0.3)}
            className="container mx-auto px-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={fadeIn("right", 0.1 * (index + 1))}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-lg font-medium py-2
                  ${
                    activeLink === link.href
                      ? "text-[#ab8e3a]"
                      : "text-gray-600 hover:text-[#ab8e3a]"
                  }`}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
