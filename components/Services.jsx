import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Residential Cleaning",
      description:
        "Professional home cleaning services to keep your house spotless and comfortable.",
      image: "/residential_cleaning.png",
      link: "/residential",
    },
    {
      id: 2,
      title: "Commercial Cleaning",
      description:
        "Comprehensive cleaning solutions for offices, retail spaces, and commercial buildings.",
      image: "/commercial_cleaning.png",
      link: "/commercial",
    },
    {
      id: 3,
      title: "Lawn Care",
      description:
        "Professional lawn maintenance, landscaping, and outdoor beautification services for your property.",
      image: "/lawn-care-2.png",
      link: "/lawn",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide top-quality residential-cleaning, commercial-cleaning,
            and lawn care services throughout the Wellington region
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-center items-center h-32 bg-gray-50 p-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-block text-red-500 hover:text-red-600 font-medium transition-colors duration-200"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
