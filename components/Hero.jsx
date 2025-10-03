"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-[calc(100vh-96px)]">
      {/* Background Image with overlay effect */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(/home_background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4 py-2 sm:py-12 lg:py-16 w-full">
        {/* Main Heading - Moved to top on mobile */}
        <h1
          className={`text-5xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Mow&Shine
        </h1>

        <p
          className={`text-xl sm:text-xl lg:text-2xl mb-4 sm:mb-6 lg:mb-8 text-gray-200 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Cleaning and Lawn Mowing Services
        </p>

        {/* Special Savings Banner - Compact on mobile, prominent on desktop */}
        <div
          className={`mb-4 sm:mb-6 lg:mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          {/* Mobile Version - Horizontal compact design */}
          <div className="block sm:hidden">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-md mb-3">
              ✨ Special Offers
            </div>
            <div className="flex gap-3 justify-center max-w-md mx-auto">
              <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <p className="text-yellow-300 font-bold text-2xl">50% OFF</p>
                <p className="text-xs text-gray-200 mt-1">3 months signup</p>
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <p className="text-yellow-300 font-bold text-2xl">20% OFF</p>
                <p className="text-xs text-gray-200 mt-1">Lawn + Cleaning</p>
              </div>
            </div>
          </div>

          {/* Tablet/Desktop Version - Full design */}
          <div className="hidden sm:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg p-4 lg:p-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-3 lg:mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-5 py-1.5 rounded-full text-xs lg:text-sm font-semibold uppercase tracking-wide shadow-sm">
                  ✨ Special Savings
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div
                  className={`bg-white/5 rounded-lg p-3 lg:p-5 border border-white/10 shadow-sm hover:bg-white/10 transition-all duration-500 hover:scale-105 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: "800ms" }}
                >
                  <p className="text-sm lg:text-lg font-semibold mb-1 lg:mb-2">
                    🎉 Limited Time Offer
                  </p>
                  <p className="text-yellow-300 font-bold text-xl lg:text-2xl">
                    50% OFF
                  </p>
                  <p className="text-xs lg:text-sm text-gray-200">
                    when you sign up for 3 months
                  </p>
                </div>
                <div
                  className={`bg-white/5 rounded-lg p-3 lg:p-5 border border-white/10 shadow-sm hover:bg-white/10 transition-all duration-500 hover:scale-105 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: "1000ms" }}
                >
                  <p className="text-sm lg:text-lg font-semibold mb-1 lg:mb-2">
                    💰 Bundle Discount
                  </p>
                  <p className="text-yellow-300 font-bold text-xl lg:text-2xl">
                    20% OFF
                  </p>
                  <p className="text-xs lg:text-sm text-gray-200">
                    for Lawn Mowing + Cleaning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p
          className={`text-base sm:text-lg lg:text-xl mb-6 sm:mb-7 lg:mb-9 text-gray-200 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          Professional cleaning and lawn care services for Wellington region
        </p>

        {/* Call to Action Button */}
        <Link
          href="tel:+6421109914"
          className={`inline-block bg-red-500 hover:bg-red-600 text-white px-9 py-4 sm:px-10 sm:py-4 text-lg sm:text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1400ms" }}
        >
          Call Us Today
        </Link>
      </div>
    </section>
  );
};

export default Hero;
