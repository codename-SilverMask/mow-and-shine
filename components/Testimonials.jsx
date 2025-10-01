"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Wellington",
      rating: 5,
      comment:
        "Absolutely fantastic service! The team from Mow&Shine transformed our home. Professional, reliable, and always on time.",
      image: "/testimonial-1.png",
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "Lower Hutt",
      rating: 5,
      comment:
        "Outstanding lawn care service. Our garden has never looked better! Highly recommend their attention to detail.",
      image: "/testimonial-2.png",
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "Porirua",
      rating: 5,
      comment:
        "Exceptional cleaning service for our office. The staff is professional and the results speak for themselves.",
      image: "/testimonial-3.png",
    },
  ];

  // Loading skeleton for testimonials
  const TestimonialSkeleton = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse mr-4"></div>
        <div>
          <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-24"></div>
          <div className="h-3 bg-gray-200 rounded animate-pulse w-16"></div>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 w-4 bg-gray-200 rounded animate-pulse mr-1"></div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
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
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied
            customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            // Show loading skeletons
            Array.from({ length: 3 }).map((_, index) => (
              <TestimonialSkeleton key={index} />
            ))
          ) : (
            // Show actual testimonials with animations
            testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 hover:transform hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex items-center mb-4 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}>
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 transition-transform duration-300 hover:scale-110">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className={`flex mb-4 transition-all duration-500 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
                style={{ transitionDelay: `${index * 200 + 500}ms` }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className="h-4 w-4 text-yellow-400 transition-all duration-300 hover:scale-125" 
                      style={{ transitionDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                <p className={`text-gray-700 italic transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 200 + 700}ms` }}>
                  &quot;{testimonial.comment}&quot;
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
