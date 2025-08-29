"use client";

import { useEffect, useState } from "react";

const ServicesGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = {
    column1: [
      "Weekly/Bi-weekly cleans",
      "Spring Cleaning",
      "Regular Maintenance Cleaning",
    ],
    column2: [
      "Move-in Cleaning",
      "Laundry Services",
      "One Time Cleanings",
      "Move-out Cleanings",
      "Cleaning Area Cleaning",
      "Construction/Post-Cleaning",
    ],
    column3: [
      "Bathroom floors",
      "Bath tub Cleaning",
      "Sanitizing Cleaning",
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We Cover All Your Needs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Mow&Shine, we offer a complete range of cleaning services to keep your property looking its best. 
            Whether it's regular home cleaning, deep cleaning, or specialized services, our flexible services are designed to fit 
            your busy schedule and unique needs. Our flexible services allow you to enjoy a clean, well-maintained space without any hassle.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Column 1 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
              Regular Services
            </h3>
            <ul className="space-y-4">
              {services.column1.map((service, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
              Specialized Services
            </h3>
            <ul className="space-y-4">
              {services.column2.map((service, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
              Bathroom Services
            </h3>
            <ul className="space-y-4">
              {services.column3.map((service, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
