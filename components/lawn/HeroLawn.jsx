"use client";

import { useEffect, useState } from "react";

const HeroLawn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gradient-to-r from-red-500 to-red-600 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Title */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Lawn Care Services
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed opacity-90">
            Professional lawn maintenance tailored to your property
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroLawn;
