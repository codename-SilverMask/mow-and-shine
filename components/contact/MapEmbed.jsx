"use client";

import { useEffect, useState } from "react";

const MapEmbed = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Service Region
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Covering the beautiful Wellington region with premium cleaning and
            landscaping services
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d95901.98162950072!2d174.73880847607415!3d-41.310235735253514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38b1fc49e974cb%3A0xa00ef63a213b470!2sWellington%2C%20New%20Zealand!5e0!3m2!1sen!2sbd!4v1756585048718!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>

        {/* Service Areas Info */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Service Areas
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly serve the greater Wellington region with professional
              cleaning and landscaping services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Wellington Central",
              "Lower Hutt",
              "Upper Hutt",
              "Porirua",
              "Kapiti Coast",
              "Surrounding Areas",
            ].map((area, index) => (
              <div
                key={area}
                className="bg-white rounded-lg px-4 py-3 text-center shadow-sm border border-gray-200"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible
                    ? `fadeInUp 0.6s ease-out ${index * 100}ms both`
                    : "none",
                }}
              >
                <span className="text-gray-800 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-red-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See Your Area?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always expanding our service areas. Contact us to see if we
              can serve your location.
            </p>
            <a
              href="tel:+6421109914"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us Today
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default MapEmbed;
