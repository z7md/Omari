import React from 'react';
import sampleVideo from "../../public/images/home.mp4";

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src={sampleVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

export default Hero;
