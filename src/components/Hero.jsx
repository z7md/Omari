import React from 'react';
import { Button } from './Button';
import Image from "../../public/images/logo.png";

function Hero() {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-full shadow-[inset_0_0_0_1000px_rgba(0,0,0,0.2)] ">
      <video
        src="/videos/video-1.mp4"
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />
      {/* <h1 className="text-[#ab8e3a] text-[6rem] sm:text-[4.5rem] mt-[-6rem] sm:mt-[-9rem] text-center [text-shadow:1px_1px_3px_#ccbb88]">
        مجموعة العمري
      </h1>
      <p className="mt-2 text-[#ab8e3a] text-2xl sm:text-2xl font-sans text-center [text-shadow:1px_1px_3px_#ccbb88]">
       نماء بإنتماء
      </p> */}
                <img
                  src={Image}
                  alt="Logo"
                  style={{ width: "220px", height: "170px", objectFit: "cover" }}
                />
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => console.log('hey')}
        >
          WATCH TRAILER <i className="far fa-play-circle ml-1" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
