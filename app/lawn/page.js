import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CallbackForm from "../../components/about/CallbackForm";
import {
  HeroLawn,
  EstimateFormSection,
  ProcessSteps,
} from "../../components/lawn";

export const metadata = {
  title: "Professional Lawn Care Services | Mow&Shine",
  description:
    "Expert lawn care and maintenance services tailored to your property. From regular upkeep to specialized treatments, we keep your lawn healthy and beautiful year-round.",
  keywords:
    "lawn care, lawn maintenance, grass cutting, landscaping, lawn treatment, yard care, professional lawn service",
};

export default function LawnPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroLawn />
      <EstimateFormSection />
      <ProcessSteps />
      <div id="callback-form">
        <CallbackForm />
      </div>
      <Footer />
    </main>
  );
}
