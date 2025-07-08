import ProfileImageComponent from "@/components/ProfileImage";
import { Button } from "../ui/button";
import { GoDownload } from "react-icons/go";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8 font-montserrat tracking-tight">
              About Me
            </h2>
            <div className="w-16 h-px bg-foreground mb-8"></div>
            <p className="text-lg text-muted-foreground mb-8 font-poppins font-light leading-relaxed">
              Hi! I’m into data, design, and front-end stuff—basically making
              things look good and make sense.
            </p>
            <Button size="lg" asChild>
              <a
                href="/Viernes__Josiah__Resume.pdf"
                download="Josiah_Viernes_Resume.pdf"
              >
                <GoDownload /> Download Resume
              </a>
            </Button>
          </div>
          <ProfileImageComponent />
        </div>
      </div>
    </section>
  );
}
