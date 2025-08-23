// src/components/Hero.jsx
import React from 'react';
import sampleVideo from "../../public/images/home.mp4";
import sampleVideo1 from "../../public/images/HomeVid.mov";
import sampleVideo2 from "../../public/images/OmaryCenterVid.mov";

const VIDEO_MAP = {
  home: sampleVideo1,   // mp4
  OmaryCenter: sampleVideo2, // mov
};

function Hero({ video = "home", overlay = 0.3, className = "h-screen" }) {
  // If `video` matches a key, use mapped asset; otherwise treat it as a direct src string
  const selectedSrc = VIDEO_MAP[video] || video;

  return (
    <div className={`relative w-full ${className} overflow-hidden`}>
      <video
        src={selectedSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: `rgba(0,0,0,${overlay})` }}
      />
    </div>
  );
}

export default Hero;
