import React from "react";
import {
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoBootstrap,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoGit,
  BiLogoGithub,
} from "react-icons/bi";
import { FaFigma } from "react-icons/fa";

import { FaDotCircle } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";

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
    name: "Next Js",
    designation: "",
    image: <RiNextjsLine className="w-full h-full" />,
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
  {
    id: 9,
    name: "Git",
    designation: "",
    image: <BiLogoGit className="w-full h-full" />,
  },
  {
    id: 10,
    name: "GitHub",
    designation: "",
    image: <BiLogoGithub className="w-full h-full" />,
  },
  {
    id: 11,
    name: "Figma",
    designation: "",
    image: <FaFigma className="w-10 h-full" />,
  },
  {
    id: 12,
    name: "Outsystems",
    designation: "",
    image: <FaDotCircle className="w-15 h-full" />,
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
