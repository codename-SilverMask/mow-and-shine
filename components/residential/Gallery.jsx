"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const galleryImages = [
    // First row
    {
      id: 1,
      src: "/residential-cleaning-1.jpg",
      alt: "Modern living room cleaning",
      title: "Living Room Deep Clean",
    },
    {
      id: 2,
      src: "/residential-cleaning-2.jpg",
      alt: "Kitchen cleaning service",
      title: "Kitchen Sanitization",
    },
    {
      id: 3,
      src: "/residential-cleaning-3.jpg",
      alt: "Bathroom cleaning service",
      title: "Bathroom Cleaning",
    },
    // Second row
    {
      id: 4,
      src: "/residential-cleaning-4.jpg",
      alt: "Bedroom cleaning service",
      title: "Bedroom Organization",
    },
    {
      id: 5,
      src: "/residential-cleaning-5.jpg",
      alt: "Home office cleaning",
      title: "Office Space Cleaning",
    },
    {
      id: 6,
      src: "/residential-cleaning-6.jpg",
      alt: "Dining room cleaning",
      title: "Dining Area Service",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Work Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our recent residential cleaning projects. We
            take pride in transforming homes into spotless, comfortable spaces
            that our clients love coming home to.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    console.error("Image failed to load:", image.src);
                  }}
                  onLoad={() => {
                    console.log("Image loaded successfully:", image.src);
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience the same level of quality in your home?
          </p>
          <button
            onClick={() => {
              const callbackSection = document.querySelector("#callback-form");
              if (callbackSection) {
                callbackSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-red-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
          >
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
