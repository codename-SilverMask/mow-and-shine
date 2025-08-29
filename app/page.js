import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import ServiceAreas from "../components/ServiceAreas.jsx";
import Testimonials from "../components/Testimonials.jsx";
import RequestCallback from "../components/RequestCallback.jsx";
import Footer from "../components/Footer.jsx";

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
