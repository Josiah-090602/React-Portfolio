import { HoverEffect } from "../components/ui/card-hover-effect";
import { MdLocationPin, MdOutlineEmail, MdPhone } from "react-icons/md";

export const projects = [
  {
    title: "Email",
    description: "viernesjosiah6@gmail.com",
    link: "mailto:viernesjosiah6@gmail.com",
    icon: <MdOutlineEmail className="text-3xl text-accent-foreground" />,
  },
  {
    title: "Phone",
    description: "+63 927 123 4567",
    link: "tel:+639271234567",
    icon: <MdPhone className="text-3xl text-accent-foreground" />,
  },
  {
    title: "Location",
    description: "San Pedro, Irosin Sorsogon",
    link: "https://maps.app.goo.gl/mfy9pGwGW7uow1nc7",
    icon: <MdLocationPin className="text-3xl text-accent-foreground" />, // You can replace this with a location icon if available
  },
];

export function ContactCard() {
  return (
    <div className="max-w-5xl mx-auto px-0">
      <HoverEffect items={projects} />
    </div>
  );
}
