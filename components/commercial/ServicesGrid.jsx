"use client";

import { useEffect, useState } from "react";

const ServicesGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = {
    column1: ["Office Cleaning", "Pub Outer And halls", "Lunatic And Surfaces"],
    column2: ["Hotel Clean-Up", "Deep Cleaning", "Seville Clean"],
    column3: ["Washroom floors", "Common Floors", "Carpet Cleaning"],
    column4: ["Common Restrooms", "Trash Clean Up", "Commercial Area Cleaning"],
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
            Commercial Cleaning Services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide professional commercial cleaning services tailored to
            meet the needs of businesses across Washington. From office cleaning
            and retail buildings to medical facilities, we create a spotless,
            hygienic environment that makes a great impression. Our work around
            your schedule to minimize disruption and deliver outstanding
            results, so you can focus on running your business while we take
            care of the cleaning.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Column 1 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
              Office Services
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
              Hotel & Hospitality
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
              Floor Services
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

          {/* Column 4 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
              Specialized Services
            </h3>
            <ul className="space-y-4">
              {services.column4.map((service, index) => (
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
