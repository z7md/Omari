import React from "react";
import "../App.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Ishbilia() {
  const slides = [
    { url: "/images/img-2.jpg", title: "beach" },
    { url: "/images/img-1.jpg", title: "boat" },
  ];

  return (
    <>
    <Navbar/>
      <h1 className='products mt-[70px]'>SERVICES</h1>
      <h1 className='products'>PRODUCTS</h1>
      <Footer/>

      {/* <ImageSlider slides={slides} /> */}
    </>
  );
}
