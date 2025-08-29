import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CallbackForm from "../../components/about/CallbackForm";
import {
  HeroResidential,
  ServicesGrid,
  PromoBanner,
  Gallery,
} from "../../components/residential";

export const metadata = {
  title: "Residential Cleaning Services | Mow&Shine",
  description:
    "Professional residential cleaning services for your home. From regular maintenance to deep cleaning, we cover all your residential cleaning needs.",
  keywords:
    "residential cleaning, home cleaning, house cleaning, maid service, cleaning service",
};

export default function ResidentialPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroResidential />
      <ServicesGrid />
      <PromoBanner />
      <Gallery />
      <div id="callback-form">
        <CallbackForm />
      </div>
      <Footer />
    </main>
  );
}
