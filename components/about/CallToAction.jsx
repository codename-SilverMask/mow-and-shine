"use client";

import { useEffect, useState } from "react";

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/call-to-action-background.jpg')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Limited Time Offer!
          </h2>

          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get your first cleaning session at a special rate. Experience the
            Mow&Shine difference today!
          </p>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
              <span className="mr-2">
                Schedule Cleaning Now & Get Free Estimate
              </span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          <p className="text-sm text-gray-300 mt-6">
            Call us at{" "}
            <span className="font-semibold text-white">(206) 123-4567</span> or
            click above to get started
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
