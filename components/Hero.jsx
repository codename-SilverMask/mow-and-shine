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
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(http://localhost:3000/home_background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>{" "}
      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
