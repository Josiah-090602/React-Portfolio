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

export const TechStackIcons = [
  {
    id: 1,
    name: "React",
    designation: "",
    image: <BiLogoReact className="w-full h-full" />,
  },
  {
    id: 2,
    name: "React",
    designation: "",
    image: <BiLogoReact className="w-full h-full" />,
  },
  {
    id: 3,
    name: "React",
    designation: "",
    image: <BiLogoReact className="w-full h-full" />,
  },
];

export type myTechstackTypes = {
  id: number;
  name: string;
  designation: string;
  image: React.ReactNode;
};

export default function TechStackIcon(props: { items: myTechstackTypes[] }) {
  return <AnimatedTooltip items={props.items} />;
}
