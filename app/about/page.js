import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import HeroAbout from "../../components/about/HeroAbout.jsx";
import FounderMessage from "../../components/about/FounderMessage.jsx";
import Promises from "../../components/about/Promises.jsx";
import CallToAction from "../../components/about/CallToAction.jsx";
import OurExperts from "../../components/about/OurExperts.jsx";
import CallbackForm from "../../components/about/CallbackForm.jsx";

export const metadata = {
  title: "About Us - Mow & Shine Cleaning Services",
  description:
    "Learn about Mow & Shine's professional cleaning team, our mission, and our commitment to making your space spotless. Trusted cleaning services in Seattle.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroAbout />
        <FounderMessage />
        <Promises />
        <CallToAction />
        <OurExperts />
        <CallbackForm />
      </main>
      <Footer />
    </div>
  );
}
