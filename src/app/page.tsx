import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { ExperiencesSection } from "@/sections/Experiences";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
export default function Home() {
  return (
    <div>
      < Header />
      < HeroSection />
      < ProjectsSection />
      < ExperiencesSection />
      < TapeSection />
      < TestimonialsSection />
      < AboutSection />
      < ContactSection />
      < Footer />
    </div>
  );
}
