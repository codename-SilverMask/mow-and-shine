"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Notification from "../Notification";

const CallbackForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "callback",
          formData: formData,
        }),
      });

      if (response.ok) {
        setNotification({
          isVisible: true,
          message: "Thank you! We will call you back soon.",
          type: "success",
        });
        setFormData({ name: "", phone: "" });
      } else {
        throw new Error("Failed to send request");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setNotification({
        isVisible: true,
        message:
          "Sorry, there was an error sending your request. Please try again or call us directly.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Logo and Form */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="text-center lg:text-left mb-8">
                <div className="flex justify-center lg:justify-start mb-6">
                  <Image
                    src="/mowNshine_logo.png"
                    alt="Mow & Shine Logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Request A Callback
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:transform-none disabled:hover:shadow-none"
                >
                  {isSubmitting ? "Sending Request..." : "Send Request"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Business Hours:
                    </h4>
                    <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Monday - Friday</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone:</h4>
                    <p className="text-gray-600">+64 21 109 9914</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email:</h4>
                    <p className="text-gray-600">support@mownshine.com</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-800">
                    <strong>Quick Response:</strong> We typically respond to
                    callback requests within 2 hours during business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={() =>
          setNotification((prev) => ({ ...prev, isVisible: false }))
        }
      />
    </>
  );
};

export default CallbackForm;
