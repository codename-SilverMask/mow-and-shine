"use client";

import { useEffect, useState } from "react";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const galleryImages = [
    // First row
    {
      id: 1,
      src: "/commercial-cleaning-1.jpg",
      alt: "Office meeting room cleaning",
      title: "Office Cleaning",
    },
    {
      id: 2,
      src: "/commercial-cleaning-2.jpg",
      alt: "Professional commercial cleaning service",
      title: "Professional Service",
    },
    {
      id: 3,
      src: "/commercial-cleaning-3.jpg",
      alt: "Retail space cleaning",
      title: "Retail Cleaning",
    },
    // Second row
    {
      id: 4,
      src: "/commercial-cleaning-4.jpg",
      alt: "Corporate building cleaning",
      title: "Corporate Buildings",
    },
    {
      id: 5,
      src: "/commercial-cleaning-5.jpg",
      alt: "Medical facility cleaning",
      title: "Medical Facilities",
    },
    {
      id: 6,
      src: "/commercial-cleaning-1.jpg",
      alt: "Hospitality cleaning service",
      title: "Hospitality Services",
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
            Our Commercial Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our recent commercial cleaning projects. We
            take pride in maintaining professional environments that help
            businesses make great first impressions and provide healthy
            workspaces for employees and customers.
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
            Ready to give your business the professional cleaning it deserves?
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
