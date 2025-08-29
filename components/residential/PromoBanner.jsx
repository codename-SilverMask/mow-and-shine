"use client";

import { useEffect, useState } from "react";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookNow = () => {
    // Scroll to callback form or handle booking logic
    const callbackSection = document.querySelector('#callback-form');
    if (callbackSection) {
      callbackSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-red-500 to-red-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col lg:flex-row items-center justify-between transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Promo Text */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Now Get Up To 50% Off On 
              <br className="hidden lg:block" />
              Recurring Cleanings
            </h2>
            <p className="text-red-100 text-lg max-w-2xl">
              Take advantage of our special offer and enjoy regular cleaning services 
              at an unbeatable price. Perfect for busy families and professionals.
            </p>
          </div>

          {/* Call to Action Button */}
          <div className="flex-shrink-0">
            <button
              onClick={handleBookNow}
              className="bg-white text-red-600 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
            >
              Book Now To Avail Offer
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-red-100 text-sm">
            * Offer valid for new customers only. Terms and conditions apply. 
            Minimum 3-month commitment required for recurring services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
