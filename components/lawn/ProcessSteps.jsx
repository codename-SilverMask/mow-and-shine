"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ProcessSteps = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Book Your Free Consultation",
      description:
        "Schedule a convenient time for our experts to visit your property and assess your lawn care needs.",
      icon: "/lawn-care-1.png",
    },
    {
      id: 2,
      title: "On-Site Lawn Assessment",
      description:
        "Our professionals evaluate your lawn's condition, size, and specific requirements to understand your unique needs.",
      icon: "/lawn-care-2.png",
    },
    {
      id: 3,
      title: "Tailored Care Plan & Estimate",
      description:
        "Receive a comprehensive care plan with transparent pricing tailored specifically to your lawn's requirements.",
      icon: "/lawn-care-3.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple 3-step process ensures you get the best lawn care service
            tailored to your specific needs
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - positioned to align with icon centers */}
          <div className="hidden md:block absolute top-[50px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-red-200 via-red-300 to-red-200 z-0"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`text-center transition-all duration-700 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step Number & Icon */}
                <div className="relative mb-8">
                  {/* Step Number */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                    {step.id}
                  </div>

                  {/* Icon Container */}
                  <div className="w-20 h-20 mx-auto bg-white border-4 border-red-100 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Step Content */}
                <div className="px-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Lawn?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Join hundreds of satisfied customers who trust us with their lawn
              care needs.
            </p>
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-red-600 hover:scale-105 hover:shadow-lg transform active:scale-95">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
