"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 1,
      title: "Residential Cleaning",
      description:
        "Professional home cleaning services to keep your house spotless and comfortable.",
      image: "/residential_cleaning.png",
      link: "/residential",
    },
    {
      id: 2,
      title: "Commercial Cleaning",
      description:
        "Comprehensive cleaning solutions for offices, retail spaces, and commercial buildings.",
      image: "/commercial_cleaning.png",
      link: "/commercial",
    },
    {
      id: 3,
      title: "Lawn Care",
      description:
        "Professional lawn maintenance, landscaping, and outdoor beautification services for your property.",
      image: "/lawn-care-2.png",
      link: "/lawn",
    },
  ];

  // Loading skeleton component
  const ServiceSkeleton = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="h-32 bg-gray-200 animate-pulse flex justify-center items-center">
        <div className="w-20 h-20 bg-gray-300 rounded-full animate-pulse"></div>
      </div>
      <div className="p-6">
        <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide top-quality residential-cleaning, commercial-cleaning,
            and lawn care services throughout the Wellington region
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            // Show loading skeletons
            Array.from({ length: 3 }).map((_, index) => (
              <ServiceSkeleton key={index} />
            ))
          ) : (
            // Show actual services with animations
            services.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 hover:transform hover:scale-105 hover:shadow-xl ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center items-center h-32 bg-gray-50 p-6 group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-block text-red-500 hover:text-red-600 font-medium transition-all duration-200 hover:translate-x-1"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
