"use client";

import { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

const ServiceAreas = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const areas = [
    {
      id: 1,
      name: "Wellington",
      description: "Central Wellington and surrounding suburbs",
    },
    {
      id: 2,
      name: "Porirua",
      description: "Porirua City and neighboring areas",
    },
    {
      id: 3,
      name: "Lower Hutt",
      description: "Lower Hutt Valley and surrounding regions",
    },
    {
      id: 4,
      name: "Upper Hutt",
      description: "Upper Hutt and nearby communities",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly serve the greater Wellington region with our professional
            cleaning services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div
              key={area.id}
              className={`text-center p-6 bg-gray-50 rounded-xl hover:bg-red-50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`flex justify-center mb-4 transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}>
                <div className="bg-gray-100 p-4 rounded-full transition-all duration-300 hover:bg-red-100 hover:scale-110">
                  <Image
                    src="/city.png"
                    alt="City"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-red-600">
                {area.name}
              </h3>
              <p className="text-gray-600 text-sm">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
