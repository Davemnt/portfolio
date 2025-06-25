import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavbarSection from "./components/NavbarSection";
import AboutSection from "./components/AboutSection";
import StudiesSection from "./components/StudiesSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#fff] ">
         <NavbarSection />
        <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <StudiesSection />
        <PortfolioSection />
        <ContactSection />
        <FooterSection />
        </div>
      </main>
  );  
 
}
