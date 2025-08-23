import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import logo from "../../public/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProjectsMenu, setShowProjectsMenu] = useState(false); // For mobile
  const [showDesktopProjectsMenu, setShowDesktopProjectsMenu] = useState(false); // New state for desktop click
  const [activeLink, setActiveLink] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  const projectItems = [
    { href: "/projects/ishbilia", label: "أشبيليا" },
    { href: "/projects/omarycenter", label: "العمري سنتر" },
    { href: "/projects/derahcenter", label: "مركز الديرة" },
  ];

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "مجموعة العمري" },
    { href: "/projects", label: "مشاريعنا" },
    { href: "/projects/initiative", label: "العمري لخدمة المجتمع" },
    { href: "/contact", label: "تواصل معنا" },
    

  ];

  // Change navbar background on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.projects-dropdown-container')) {
        setShowDesktopProjectsMenu(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.nav
      viewport={{ once: true }}
      className={`fixed top-0 left-0 right-0 z-50 h-[100px] text-right transition-all duration-300 ${
        isScrolled ? "bg-white border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div variants={fadeIn("right", 0.3)} className="cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "120px", height: "90px", objectFit: "cover" }}
          />
        </motion.div>

        {/* Desktop Links with click-dropdown on "مشاريعنا" */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          className="hidden md:flex flex-1 justify-center gap-10 items-center"
        >
          {navLinks.map((link, idx) => {
            if (link.href === "/projects") {
              return (
                <div 
                  key={idx} 
                  className="relative projects-dropdown-container cursor-pointer"
                >
                  <button
                    onClick={() => {
                      setShowDesktopProjectsMenu(!showDesktopProjectsMenu);
                      setActiveLink(link.href);
                    }}
                    className={`flex items-center text-lg font-lg py-2 px-1 cursor-pointer ${
                      activeLink === link.href
                        ? "text-[#ab8e3a]"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                    <HiChevronDown className={`h-5 w-5 ml-1 transition-transform ${
                      showDesktopProjectsMenu ? "rotate-180" : "rotate-0"
                    }`} />
                  </button>
                  
                  {/* Projects Dropdown */}
                  {showDesktopProjectsMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-md py-2 z-50 min-w-[150px]"
                    >
                      {projectItems.map((proj, i) => (
                        <a
                          key={i}
                          href={proj.href}
                          onClick={() => {
                            setActiveLink("/projects");
                            setShowDesktopProjectsMenu(false);
                          }}
                          className="block whitespace-nowrap px-4 py-2 text-xl text-gray-600 hover:text-[#ab8e3a] hover:bg-gray-100"
                        >
                          {proj.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            }
            return (
              <a
                key={idx}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`text-lg font-lg py-2 px-1 ${
                  activeLink === link.href
                    ? "text-[#ab8e3a]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </motion.div>

        {/* (Optional) Icons/CTA on the right */}
        <div className="hidden md:block">
          {/* Contact button or social icons */}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={fadeIn("left", 0.3)}
          className="md:hidden p-2"
          onClick={() => {
            setIsMenuOpen((v) => !v);
            setShowProjectsMenu(false);
          }}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <HiX className="h-[38px] w-[38px]" />
          ) : (
            <HiMenu className="h-[38px] w-[38px]" />
          )}
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-white border-t border-gray-100 py-4"
          onTouchStart={() => {
            if (showProjectsMenu) setShowProjectsMenu(false);
          }}
        >
          <div className="container mx-auto px-4 space-y-4">
            {navLinks.map((link, idx) => {
              if (link.href === "/projects") {
                return (
                  <div key={idx} className="projects-dropdown-container">
                    <button
                      onTouchStart={(e) => e.stopPropagation()}
                      onClick={() => setShowProjectsMenu((v) => !v)}
                      className={`flex w-full  items-center text-lg font-medium py-2 ${
                        activeLink === link.href
                          ? "text-[#ab8e3a]"
                          : "text-gray-600 hover:text-[#ab8e3a]"
                      }`}
                    >
                      {link.label}
                      <HiChevronDown
                        className={`h-5 w-5 transform transition-transform mr-2 ${
                          showProjectsMenu ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    {showProjectsMenu && (
                      <div className="pl-4">
                        {projectItems.map((proj, i) => (
                          <a
                            key={i}
                            href={proj.href}
                            onClick={() => {
                              setActiveLink("/projects");
                              setIsMenuOpen(false);
                            }}
                            className="block text-md text-gray-600 hover:text-[#ab8e3a] py-4 mr-2"
                          >
                            {proj.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block text-lg font-medium py-2 ${
                    activeLink === link.href
                      ? "text-[#ab8e3a]"
                      : "text-gray-600 hover:text-[#ab8e3a]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;