import { HoverEffect } from "../components/ui/card-hover-effect";
import { MdOutlineEmail } from "react-icons/md";

export const projects = [
  {
    title: "Email",
    description: "viernesjosiah6@gmail.com",
    link: "",
    icon: <MdOutlineEmail className="text-3xl text-accent-foreground" />,
  },
  {
    title: "Phone",
    description: "+63 927 123 4567",
    link: "",
  },
  {
    title: "Location",
    description: "Cebu City, Philippines",
    link: "",
  },
];

export function ContactCard() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
