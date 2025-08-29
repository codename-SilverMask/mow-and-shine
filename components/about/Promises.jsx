"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Promises = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const promises = [
    {
      icon: "/quality_guarantee.png",
      title: "Professional Quality Guarantee",
      description:
        "At Mow&Shine, we promise to clean your home and go with the same care and respect as if it were our own. You can count on us for reliable, first-class service, attention to detail, and the highest cleanliness standards. Our team is fully trained and professionally reviewed. Satisfaction guaranteed.",
    },
    {
      icon: "/affordable_payments.png",
      title: "Easy And Affordable Payments",
      description:
        "Quality cleaning services that won't break the bank. We offer flexible payment options and transparent pricing with no hidden fees. Get professional cleaning at rates that work for your budget.",
    },
    {
      icon: "/products_guarantee.png",
      title: "Best Product Guarantee",
      description:
        "We use only the finest eco-friendly cleaning products and state-of-the-art equipment to deliver results you can see and smell. Your satisfaction is our top priority.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We Promise You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-gray-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                    <Image
                      src={promise.icon}
                      alt={promise.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {promise.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {promise.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promises;
