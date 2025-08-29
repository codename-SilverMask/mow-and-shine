import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CallbackForm from "../../components/about/CallbackForm";
import PromoBanner from "../../components/residential/PromoBanner";
import {
  HeroCommercial,
  ServicesGrid,
  Gallery,
} from "../../components/commercial";

export const metadata = {
  title: "Commercial Cleaning Services | Mow&Shine",
  description:
    "Professional commercial cleaning services for businesses, offices, retail spaces, and more. Our business is to make yours shine.",
  keywords:
    "commercial cleaning, office cleaning, business cleaning, retail cleaning, professional cleaning service",
};

export default function CommercialPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCommercial />
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
