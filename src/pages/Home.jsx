// src/pages/Home.jsx
import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSnippet from '../components/AboutSnippet';
import ProjectsSection from '../components/ProjectsSection';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const savedPath = localStorage.getItem("redirect_path");

    if (savedPath) {
      localStorage.removeItem("redirect_path");

      if (savedPath.startsWith("#")) {
        // It's a hash link to a section — don't navigate
        return;
      }

      navigate(savedPath);
    }
  }, [navigate]);
  return (
    <>
      <Navbar />

      {/* HERO */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Hero video="home" />
      </motion.section>

      {/* ABOUT */}
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="py-8"
      >
        <AboutSnippet />
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="py-8"
      >
        <ProjectsSection />
      </motion.section>

      {/* PARTNERS */}
      <motion.section
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="py-8"
      >
        <Partners />
      </motion.section>

      {/* FOOTER */}
      <motion.section
        variants={fadeIn("up", 0.35)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Footer />
      </motion.section>
    </>
  );
}

export default Home;
