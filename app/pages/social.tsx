import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface SocialLink {
  link: string;
  name: string;
  icon: keyof typeof iconMap;
}

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaInstagram: FaInstagram,
};

const socialLinks: SocialLink[] = [
  {
    link: "https://github.com/choirulanwarr",
    name: "Github",
    icon: "FaGithub",
  },
  {
    link: "https://www.linkedin.com/in/choirul-anwar-27398b120/",
    name: "LinkedIn",
    icon: "FaLinkedin",
  },
  {
    link: "https://instagram.com/choirulanwarl",
    name: "Instagram",
    icon: "FaInstagram",
  },
];

export default function Social() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {socialLinks.map((social, index) => {
        const IconComponent = iconMap[social.icon];
        return (
          <li key={index} className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-slate-200"
              href={social.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">{social.name}</span>
              <IconComponent className="h-6 w-6 fill-white" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}