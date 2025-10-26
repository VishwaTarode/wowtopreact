import { useState, useEffect } from "react";

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator when scrolled more than 50px
      setShowScrollIndicator(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Function to scroll to next section smoothly
  const handleScrollClick = () => {
    // You can adjust scroll target here (e.g., scroll down 1 viewport height)
    /*window.scrollTo({
      top: window.innerHeight, // Scroll one full screen down
      behavior: "smooth",
    });*/
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      {/*<div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12 scale-150"></div>
      </div>*/}
        <video
    className="absolute inset-0 w-full h-full object-cover opacity-60"
    src="video/intro.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            WOWTOP
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-4 font-light">
            Wowtop., Ltd.
          </p>
          <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Specializing in the R&D, design, production, sales and service of FA factory automation precision parts, tooling inspection fixtures and automation equipment
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
              Product
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-300 rounded-full opacity-15 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-blue-500 rounded-full opacity-25 animate-pulse delay-500"></div>

      {/* Scroll Down Indicator */}
      <div
        onClick={handleScrollClick}
        className={`fixed bottom-8  transform -translate-x-1/2 animate-bounce transition-opacity duration-500 cursor-pointer ${
          showScrollIndicator ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 select-none">Slide down</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
