"use client";

import { useEffect, useState } from "react";

const ContactInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactItems = [
    {
      id: 1,
      title: "Follow Us on Facebook",
      content: "Stay updated with our latest\nservices and special offers",
      link: "https://www.facebook.com/profile.php?id=61569054565020",
      linkText: "Visit Facebook Page",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      delay: "0",
    },
    {
      id: 2,
      title: "Call Us Now",
      content: "+64 21 109 9914",
      link: "tel:+6421109914",
      linkText: "Click to Call",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      delay: "200",
    },
    {
      id: 3,
      title: "Email Us",
      content: "info@mowandshine.com",
      link: "mailto:info@mowandshine.com",
      linkText: "Send Email",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      delay: "400",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Reach out to us through any of these
            convenient methods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactItems.map((item) => (
            <div
              key={item.id}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${item.delay}ms` : "0ms",
              }}
            >
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <div className="text-gray-600 mb-6 flex-grow">
                  {item.content.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-auto"
                  >
                    {item.linkText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Contact Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Service Areas
              </h3>
              <p className="text-gray-600 mb-4">
                We proudly serve the greater Wellington region, including:
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Wellington Central</li>
                <li>• Lower Hutt</li>
                <li>• Upper Hutt</li>
                <li>• Porirua</li>
                <li>• Kapiti Coast</li>
                <li>• And surrounding areas</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Emergency Services
              </h3>
              <p className="text-gray-600 mb-4">
                For urgent commercial cleaning needs or emergency situations:
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Emergency Line:</span> +64 21
                  109 9914
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Available:</span> 24/7 for
                  commercial clients
                </p>
                <p className="text-gray-600 text-sm">
                  *Additional charges may apply for emergency services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
