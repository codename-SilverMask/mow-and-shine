import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  HeroContact,
  ContactFormSection,
  ContactInfo,
  MapEmbed,
} from "../../components/contact";

export const metadata = {
  title: "Contact Us | Mow&Shine",
  description:
    "Get in touch with Mow&Shine for all your cleaning and landscaping needs. Contact us for free estimates, schedule services, or ask questions about our residential, commercial, and lawn care services.",
  keywords:
    "contact mow shine, cleaning services contact, landscaping contact, wellington cleaning, free estimate, schedule service",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroContact />
      <ContactFormSection />
      <ContactInfo />
      <MapEmbed />
      <Footer />
    </main>
  );
}
