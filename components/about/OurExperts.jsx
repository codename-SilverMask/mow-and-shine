"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const OurExperts = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const expertisePoints = [
    "Experienced & Professional",
    "Reference Checked",
    "Uniformed & Polite",
    "Insured and Vaccinated",
    "Bonded & Insured",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Cleaning Experts
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our cleaning staff is made up of dedicated, experienced
              professionals who take great pride in their work. Each team member
              is carefully selected, thoroughly trained and committed to
              delivering consistently high standards of cleanliness in every
              home and space we service.
            </p>

            <div className="space-y-4">
              {expertisePoints.map((point, index) => (
                <div
                  key={index}
                  className={`flex items-center transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <FaCheck className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Image */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/cleaning-team.jpg"
                alt="Our Professional Cleaning Team"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExperts;
