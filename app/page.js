import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ServiceAreas from "../components/ServiceAreas";
import Testimonials from "../components/Testimonials";
import RequestCallback from "../components/RequestCallback";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ServiceAreas />
        <Testimonials />
        <RequestCallback />
      </main>
      <Footer />
    </div>
  );
}
