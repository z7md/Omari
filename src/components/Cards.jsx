import React from 'react';
import CardItem from './CardItem';
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

function Cards() {
  return (
    <div className="py-16 bg-[#ffffff] ">
            <motion.h2
              variants={textVariant(0.4)}
              className="relative text-[#ab8e3a] text-3xl sm:text-4xl md:text-5xl font-semibold ml-4 text-center flex justify-center items-center"
            >
              مشاريعنا
              {/* <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#ab8e3a] to-[#ccbb88]" /> */}
            </motion.h2>
      <div className="flex flex-col items-center max-w-[1120px] w-[100%] mx-auto">
        <div className="relative my-12 w-full text-center">
          <ul className="flex flex-col md:flex-row mb-6">
            <CardItem
              src="./images/ishbilia.png"
              text="ضاحية سكنية نموذجية"
              label="ضاحية أشبيليا"
              path="/projects/Ishbilia"
            />
            <CardItem
              src="./images/omaryCenter.png"
              text="العمري سنتر"
              label="العمري سنتر"
              path="/projects/omarycenter"
            />
          </ul>
          <ul className="flex flex-col md:flex-row">
            <CardItem
              src="./images/social.png"
              text="العمري لخدمة المجتمع"
              label="العمري لخدمة المجتمع"
              path="/projects/Initiative"
            />
            {/* <CardItem
              src="./images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />*/}
            <CardItem
              src="./images/derah1.png"
              text="مركز الديرة"
              label="مركز الديرة"
              path="/projects/derahcenter"
            /> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
