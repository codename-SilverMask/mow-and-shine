"use client";

import { useState, useEffect } from "react";

const Notification = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto close after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const baseClasses =
    "fixed top-4 left-4 right-4 sm:top-4 sm:right-4 sm:left-auto sm:max-w-md z-[9999] p-4 rounded-lg shadow-xl border transition-all duration-300 transform";
  const typeClasses = {
    success: "bg-green-500 text-white border-green-600",
    error: "bg-red-500 text-white border-red-600",
    loading: "bg-blue-500 text-white border-blue-600",
  };

  const icons = {
    success: "✓",
    error: "✕",
    loading: "⟳",
  };

  return (
    <div
      className={`${baseClasses} ${typeClasses[type]} ${
        isVisible
          ? "translate-y-0 sm:translate-x-0 opacity-100"
          : "-translate-y-full sm:translate-y-0 sm:translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span
            className={`mr-3 text-lg ${
              type === "loading" ? "animate-spin" : ""
            }`}
          >
            {icons[type]}
          </span>
          <p className="font-medium flex-1">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200 font-bold text-xl leading-none flex-shrink-0"
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Notification;
