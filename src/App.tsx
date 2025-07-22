import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import { ThemeProvider } from "./components/theme-provider";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TechStackSection from "./components/sections/TechStack";
export const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-gray-50">
        <Navigation />

        <main>
          <HeroSection />

          <AboutSection />
          <ExperienceSection />
          <TechStackSection />
        </main>
      </div>
    </ThemeProvider>
  );
};
