import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Wellington",
      rating: 5,
      comment:
        "Absolutely fantastic service! The team from Mow&Shine transformed our home. Professional, reliable, and always on time.",
      image: "/testimonial-1.png",
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "Lower Hutt",
      rating: 5,
      comment:
        "Outstanding lawn care service. Our garden has never looked better! Highly recommend their attention to detail.",
      image: "/testimonial-2.png",
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "Porirua",
      rating: 5,
      comment:
        "Exceptional cleaning service for our office. The staff is professional and the results speak for themselves.",
      image: "/testimonial-3.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied
            customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 italic">
                &quot;{testimonial.comment}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
