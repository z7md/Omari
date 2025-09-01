// src/components/Hero.jsx
import React from 'react';
import sampleVideo from "../../public/images/home.mp4";
import sampleVideo1 from "../../public/images/HomeVid.mp4";
import sampleVideo2 from "../../public/images/OmaryCenterVid.mov";
import centerImage from "../../public/images/Al-Omarigroup1.png"; // example image
import centerImage1 from "../../public/images/OmaryGC1.png"; // example image


const VIDEO_MAP = {
  home: sampleVideo1,   // mp4
  OmaryCenter: sampleVideo2, // mov
};
const PHOTO_MAP = {
  home: centerImage,   // mp4
  OmaryCenter: centerImage1, // mov
};

function Hero({ video = "home", overlay = 0.3, }) {
  const selectedSrc = VIDEO_MAP[video] || video;
  const selectedPhoto = PHOTO_MAP[video] || video;
  if(video==="OmaryCenter"){
    var x= "w-120 h-120"
  }else {
    var x= "w-58 h-58"
  }

  return (
    <div className="relative w-full h-[87vh] overflow-hidden mt-[90px]">
      {/* Video */}
      <video
        src={selectedSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-[87vh] object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: `rgba(0,0,0,${overlay})` }}
      />

      {/* Center Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={selectedPhoto}
          alt="Center Logo"
          className={`w-58 h-58 object-contain ${x}`}
        />
      </div>
    </div>
  );
}

export default Hero;
