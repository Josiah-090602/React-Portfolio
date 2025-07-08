import { Button } from "@/components/ui/button";
import SocialLinksSection from "../SocialLinks";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="static min-h-screen flex items-center justify-center bg-background"
    >
      <SocialLinksSection />
      <div className="text-center max-w-4xl flex flex-col mx-auto px-6 gap-6">
        <h1 className="text-3xl md:text-5xl font-light text-foreground font-montserrat tracking-tight">
          Hello, I'm <span className="font-semibold">Josiah</span>
        </h1>

        <p className="text-l md:text-xl text-muted-foreground  font-poppins font-light">
          Front End Developer, System Analyst & UI/UX Designer
        </p>

        <div className="flex flex-col  sm:flex-row gap-6 justify-center">
          <Button
            variant="default"
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/80 transition-colors"
            onClick={() => (window.location.href = "#projects")}
          >
            View my Works
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = "#contact")}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
