import type { NavigationListTypes } from "../../types";
import { useState, useEffect } from "react";
import {
  GoStack,
  GoFlame,
  GoPerson,
  GoMail,
  GoBriefcase,
} from "react-icons/go";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ModeToggle } from "./mode-toggle";

const NavigationList: NavigationListTypes[] = [
  { name: "Hero", href: "#home", icon: <GoFlame /> },
  { name: "About", href: "#about", icon: <GoPerson /> },
  { name: "Experience", href: "#experience", icon: <GoBriefcase /> },
  { name: "Skills", href: "#techstack", icon: <GoStack /> },
  { name: "Contact", href: "#contact", icon: <GoMail /> },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "techstack", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <TooltipProvider>
      <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-center">
          <span className="mb-4">
            <ModeToggle />
          </span>
          {NavigationList.map((item, index) => (
            <div
              key={item.name}
              className="relative flex flex-col items-center"
            >
              <NavigationListItem
                item={item}
                isActive={activeSection === item.href.substring(1)}
                onClick={(e) => handleNavClick(e, item.href)}
              />
              {index < NavigationList.length - 1 && (
                <div className="w-0.5 h-8 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </TooltipProvider>
  );
}

function NavigationListItem({
  item,
  isActive,
  onClick,
}: {
  item: NavigationListTypes;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={item.href}
          onClick={onClick}
          className={`hover:bg-zinc-700 group relative flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-full shadow-md hover:shadow-lg border-1 active:scale-95 active:shadow-sm ${
            isActive
              ? "bg-primary text-accent hover:text-white border-primary shadow-lg "
              : " bg-background hover:bg-primary hover:text-white border-gray-200 hover:border-primary hover:scale-105"
          }`}
        >
          <span className="text-xl transition-all duration-300 group-hover:scale-110 group-active:scale-90">
            {item.icon}
          </span>
          {/* Click ripple effect */}
          <span className="absolute border-2inset-0 rounded-full bg-white opacity-0 group-active:opacity-30 group-active:animate-ping"></span>
        </a>
      </TooltipTrigger>
      <TooltipContent side="right" className="ml-2">
        <p className="font-medium">{item.name}</p>
      </TooltipContent>
    </Tooltip>
  );
}
