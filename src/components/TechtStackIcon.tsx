import React from "react";
import {
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoBootstrap,
  BiLogoNodejs,
  BiLogoJavascript,
  BiLogoReact,
} from "react-icons/bi";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import type { skillTypes } from "@/types";

export const stacklist: skillTypes[] = [
  {
    id: 1,
    name: "Html",
    designation: "",
    image: <BiLogoHtml5 className="w-full h-full" />,
  },
  {
    id: 2,
    name: "React",
    designation: "",
    image: <BiLogoReact className="w-full h-full" />,
  },
  {
    id: 3,
    name: "Tailwind CSS",
    designation: "",
    image: <BiLogoTailwindCss className="w-full h-full" />,
  },
  {
    id: 4,
    name: "Bootstrap",
    designation: "",
    image: <BiLogoBootstrap className="w-full h-full" />,
  },
  {
    id: 5,
    name: "Node.js",
    designation: "",
    image: <BiLogoNodejs className="w-full h-full" />,
  },
  {
    id: 6,
    name: "JavaScript",
    designation: "",
    image: <BiLogoJavascript className="w-full h-full" />,
  },
  {
    id: 7,
    name: "TypeScript",
    designation: "",
    image: <BiLogoTypescript className="w-full h-full" />,
  },
  {
    id: 8,
    name: "CSS",
    designation: "",
    image: <BiLogoCss3 className="w-full h-full" />,
  },
  // Add more technologies as needed
];

export type myTechstackTypes = {
  id: number;
  name: string;
  designation: string;
  image: React.ReactNode;
};

export default function TechStackIcon() {
  return <AnimatedTooltip items={stacklist} />;
}
