"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HeroCommercial = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Online Booking",
      description: "Fast and easy booking with flexible.",
      icon: "/booking.png",
      alt: "Online booking service",
    },
    {
      id: 2,
      title: "Certified Cleaners",
      description:
        "Our fully vetted cleaners. Professional Certified Cleaners.",
      icon: "/quality_guarantee.png",
      alt: "Certified professional cleaners",
    },
    {
      id: 3,
      title: "Best Products",
      description: "Ensuring impressive results with eco-friendly safety.",
      icon: "/products_guarantee.png",
      alt: "Best cleaning products guarantee",
    },
    {
      id: 4,
      title: "Easy Payments",
      description: "Simple and secure payment. Payment Options.",
      icon: "/affordable_payments.png",
      alt: "Easy payment options",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-red-500 to-red-600 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Title */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Business Is To Make Yours Shine
          </h1>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white text-gray-800 rounded-xl p-8 text-center shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.alt}
                    width={40}
                    height={40}
                    className="object-contain"
                    unoptimized={true}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCommercial;
