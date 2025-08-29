import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "calc(100vh - 96px)" }}
    >
      {/* Background Image with overlay effect */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(/home_background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Special Savings Banner */}
        <div className="mb-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-5 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide shadow-sm">
              ✨ Special Savings
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white/5 rounded-lg p-5 border border-white/10 shadow-sm hover:bg-white/10 transition">
              <p className="text-lg font-semibold mb-2">
                🎉 Limited Time Offer
              </p>
              <p className="text-yellow-300 font-bold text-2xl">50% OFF</p>
              <p className="text-sm text-gray-200">
                when you sign up for 3 months
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-5 border border-white/10 shadow-sm hover:bg-white/10 transition">
              <p className="text-lg font-semibold mb-2">💰 Bundle Discount</p>
              <p className="text-yellow-300 font-bold text-2xl">20% OFF</p>
              <p className="text-sm text-gray-200">
                for Lawn Mowing + Cleaning
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Mow&Shine
          <br />
          Cleaning and Lawn Mowing Services
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Professional cleaning and lawn care services for Wellington region
        </p>

        <Link
          href="tel:+64-21-555-0123"
          className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          Call Us Today
        </Link>
      </div>
    </section>
  );
};

export default Hero;
