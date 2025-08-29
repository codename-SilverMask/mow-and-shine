"use client";

import { useEffect, useState } from "react";

const FounderMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm font-medium text-red-600 mb-4 tracking-wide uppercase">
              Message from The Founder
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              We Will Make Your Place Spotless
            </h2>
          </div>

          <div
            className={`prose prose-lg max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              At Mow&Shine, our mission has always been simple: to make homes
              and commercial spaces shine like never before. When we look at a
              job, we see more than just surfaces to clean. We see an
              opportunity to transform your environment so you can feel
              comfortable and confident in your space. After earning our
              clients' trust through years of dedication and hard work, we're
              proud to be Seattle's premier choice for both residential and
              commercial cleaning. Whether it's your home or your workplace, we
              treat every space as if it were our own, ensuring the highest
              level of care and attention to detail that every space deserves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
