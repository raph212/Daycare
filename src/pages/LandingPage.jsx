import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProgramsSection from "../components/ProgramsSection";
import ExploreSection from "../components/ExploreSection";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";

export default function LandingPage({ onLogin }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar onLogin={onLogin} />
      <div id="home"><HeroSection onLogin={onLogin} /></div>
      <div id="about"><AboutSection /></div>
      <div id="programs"><ProgramsSection /></div>
      <div id="explore"><ExploreSection /></div>
      <div id="contact"><ContactSection /></div>
      <div id="faq"><FAQSection /></div>
      <Footer />
    </div>
  );
}