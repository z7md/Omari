// src/components/Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import sampleVideo1 from "../../public/images/homeFina.mp4";     // H.264 MP4
import sampleVideo2 from "../../public/images/OmaryCenterVi.mp4"; // converted MOV → MP4
import centerImage from "../../public/images/Al-Omarigroup1.webp";
import centerImage1 from "../../public/images/OmaryGC1.webp";

const VIDEO_MAP = {
  home: sampleVideo1,
  OmaryCenter: sampleVideo2,
};
const PHOTO_MAP = {
  home: centerImage,
  OmaryCenter: centerImage1,
};

function Hero({ video = "home", overlay = 0.3 }) {
  const selectedSrc = VIDEO_MAP[video] || video;
  const selectedPhoto = PHOTO_MAP[video] || video;
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Required attributes for iOS autoplay
    v.muted = true;
    v.playsInline = true;
    v.setAttribute("webkit-playsinline", "true");
    v.autoplay = true;

    const tryPlay = async () => {
      try {
        await v.play();
        setNeedsInteraction(false);
      } catch {
        setNeedsInteraction(true); // Safari blocked autoplay
      }
    };

    if (v.readyState >= 2) {
      tryPlay();
    } else {
      const onLoaded = () => tryPlay();
      v.addEventListener("loadedmetadata", onLoaded, { once: true });
      return () => v.removeEventListener("loadedmetadata", onLoaded);
    }
  }, [selectedSrc]);

  const handleUserPlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      await v.play();
      setNeedsInteraction(false);
    } catch {
      v.controls = true; // fallback
    }
  };

  // Different logo sizing for each page
  const sizeClass = video === "OmaryCenter" ? "w-40 h-40" : "w-24 h-24";

  return (
    <div className="relative w-full h-[87vh] overflow-hidden mt-[90px]">
      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        src={selectedSrc}
        className="absolute inset-0 w-full h-[87vh] object-cover"
      >
        متصفحك لا يدعم الفيديو المضمّن.
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: `rgba(0,0,0,${overlay})` }}
      />

      {/* Center Image (logo) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={selectedPhoto}
          alt="Center Logo"
          className={`${sizeClass} object-contain`}
        />
      </div>

      {/* Fallback button if autoplay is blocked */}
      {needsInteraction && (
        <button
          onClick={handleUserPlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 text-white"
          aria-label="تشغيل الفيديو"
        >
          <span className="px-6 py-3 rounded-xl bg-white/10 border backdrop-blur text-lg">
            اضغط للتشغيل
          </span>
        </button>
      )}
    </div>
  );
}

export default Hero;
