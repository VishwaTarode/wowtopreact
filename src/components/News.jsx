{/*export default function News() {


  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understand the latest developments of the company and master the cutting-edge information of the industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

         

        </div>

          <div style={{ display: 'flex', justifyContent: 'center'}}>
          <a style={{ color: '#000000',    fontSize: '3rem', backgroundColor: '#f9bc00db',fontWeight: '700', padding: '10px' }}>Coming Soon</a>
          </div>

      </div>
    </section>
  )
}*/}
{/*
import React from "react";
import "./../../dist/assets/news.css?v1";

export default function News() {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understand the latest developments of the company and master the
            cutting-edge information of the industry
          </p>
        </div>

        <div className="relative mb-12">
          <div
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "smooth",
            }}
          >
            <div className="flex-shrink-0 w-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="image/news/Picture1.jpg"
                alt="Office"
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-shrink-0 w-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="image/news/Picture2.jpg"
                alt="Factory"
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-shrink-0 w-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="image/news/Picture3.jpg"
                alt="CNC Machines"
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <span
            style={{
              color: "#000000",
              fontSize: "3rem",
              backgroundColor: "#f9bc00db",
              fontWeight: "700",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            Coming Soon
          </span>
        </div>
      </div>
    </section>
  );
}
*/}

import React, { useState, useEffect, useRef } from "react";

export default function News() {
  const images = [
    { src: "image/news/Picture1.jpg", alt: "Office" },
    { src: "image/news/Picture2.jpg", alt: "Factory" },
    { src: "image/news/Picture3.jpg", alt: "CNC Machines" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);

  // Auto slide every 3 seconds
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide; // cleanup on unmount
  }, [currentIndex]);

  const startAutoSlide = () => {
    stopAutoSlide(); // avoid duplicates
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // When index changes, scroll smoothly
  useEffect(() => {
    if (sliderRef.current) {
      const scrollToX = sliderRef.current.clientWidth * currentIndex;
      sliderRef.current.scrollTo({ left: scrollToX, behavior: "smooth" });
    }
  }, [currentIndex]);

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understand the latest developments of the company and master the
            cutting-edge information of the industry
          </p>
        </div>

        {/* ✅ Auto-sliding Image Carousel */}
        <div
          className="relative mb-12 overflow-hidden"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{ scrollSnapType: "x mandatory", overflowX: "hidden" }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full lg:w-1/3 scroll-snap-align-center flex justify-center"
              >
                <div className="w-80 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-2" style={{display:"none"}}>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-yellow-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="flex justify-center">
          <span
            style={{
              color: "#000000",
              fontSize: "3rem",
              backgroundColor: "#f9bc00db",
              fontWeight: "700",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            Coming Soon
          </span>
        </div>
      </div>
    </section>
  );
}
