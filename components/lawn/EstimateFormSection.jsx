"use client";

import { useEffect, useState } from "react";

const EstimateFormSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    lawnSize: "",
    preferredService: "",
    additionalNotes: "",
  });
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Estimate form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      address: "",
      lawnSize: "",
      preferredService: "",
      additionalNotes: "",
    });
    alert("Thank you! We will contact you soon with a personalized estimate.");
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const inputClasses = (fieldName) =>
    `w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
      focusedField === fieldName
        ? "transform scale-105 shadow-lg"
        : "hover:shadow-md"
    }`;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Schedule A Free Consultation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a personalized lawn care estimate tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form Section */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    className={inputClasses("name")}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    className={inputClasses("email")}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                    onFocus={() => handleFocus("contactNumber")}
                    onBlur={handleBlur}
                    className={inputClasses("contactNumber")}
                    placeholder="+64 21 109 9914"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lawnSize"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Lawn Size (sq ft)
                  </label>
                  <input
                    type="text"
                    id="lawnSize"
                    name="lawnSize"
                    value={formData.lawnSize}
                    onChange={handleChange}
                    onFocus={() => handleFocus("lawnSize")}
                    onBlur={handleBlur}
                    className={inputClasses("lawnSize")}
                    placeholder="e.g., 5000 sq ft"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Property Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  onFocus={() => handleFocus("address")}
                  onBlur={handleBlur}
                  className={inputClasses("address")}
                  placeholder="123 Main Street, City, State, ZIP"
                />
              </div>

              <div>
                <label
                  htmlFor="preferredService"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Preferred Service
                </label>
                <select
                  id="preferredService"
                  name="preferredService"
                  value={formData.preferredService}
                  onChange={handleChange}
                  onFocus={() => handleFocus("preferredService")}
                  onBlur={handleBlur}
                  className={inputClasses("preferredService")}
                >
                  <option value="">Select a service</option>
                  <option value="weekly-maintenance">Weekly Maintenance</option>
                  <option value="bi-weekly-maintenance">
                    Bi-weekly Maintenance
                  </option>
                  <option value="monthly-maintenance">
                    Monthly Maintenance
                  </option>
                  <option value="seasonal-cleanup">Seasonal Cleanup</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="fertilization">
                    Fertilization & Treatment
                  </option>
                  <option value="other">Other (specify in notes)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="additionalNotes"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Additional Notes
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows="4"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  onFocus={() => handleFocus("additionalNotes")}
                  onBlur={handleBlur}
                  className={inputClasses("additionalNotes")}
                  placeholder="Tell us about any specific requirements, current lawn condition, or services you're interested in..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-red-600 hover:scale-105 hover:shadow-xl transform active:scale-95"
              >
                Request Free Estimate
              </button>
            </form>
          </div>

          {/* Information Section */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why We Need an On-Site Visit
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Mow & Shine, we understand that every lawn is unique, with
                  its own specific challenges and requirements. To offer you an
                  accurate quote and ensure exceptional results, our experienced
                  team conducts a thorough on-site assessment of your property.
                </p>
                <p>
                  During our free consultation, we evaluate factors such as lawn
                  size, terrain, grass type, current condition, and any special
                  requirements you may have. Our experts also assess drainage
                  patterns, sun exposure, and existing landscaping to create a
                  customized care plan that will keep your lawn looking its best
                  year-round.
                </p>
                <p>
                  This personal approach allows us to provide you with a
                  detailed estimate that reflects the actual scope of work
                  needed. Whether it's regular maintenance, seasonal cleanup, or
                  specialized treatments, we ensure every aspect of your lawn
                  care needs is addressed with precision and care.
                </p>
                <div className="mt-8 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <p className="font-semibold text-red-700">
                    Free Consultation • No Obligation • Expert Assessment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimateFormSection;
