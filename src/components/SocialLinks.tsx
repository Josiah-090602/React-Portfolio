import { BiLogoGithub, BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";
import type { LinksType } from "types";

const Links: LinksType[] = [
  {
    name: "GitHub",
    icon: <BiLogoGithub className="text-sm" />,
    href: "https://github.com/Josiah-090602",
  },
  {
    name: "LinkedIn",
    icon: <BiLogoLinkedin className="text-sm" />,
    href: "https://www.linkedin.com/in/viernes-josiah/",
  },
  {
    name: "Instagram",
    icon: <BiLogoInstagram className="text-sm" />,
    href: "https://www.instagram.com/_yoshiyahuuuuu/",
  },
];
export default function SocialLinksSection() {
  return (
    <div className="flex gap-3 justify-center mt-8 absolute top-2 right-11">
      {Links.map((link, index) => (
        <div key={index} className="flex items-center gap-3">
          <a
            href={link.href}
            target="_blank"
            className="font-extralight text-sm opacity-60 hover:opacity-100 flex items-center justify-center gap-2 transition-all duration-300"
          >
            {link.icon}
            {link.name}
          </a>
          {index < Links.length - 1 && (
            <span className="text-muted-foreground">|</span>
          )}
        </div>
      ))}
    </div>
  );
}
