import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

interface SocialLink {
  link: string;
  name: string;
  icon: keyof typeof iconMap;
}

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaInstagram: FaInstagram,
  FaXTwitter: FaXTwitter,
  FaFacebook: FaFacebook,
  GoMail: GoMail
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
  {
    link: "https://x.com/caitusingkatan",
    name: "Twitter",
    icon: "FaXTwitter",
  },
  {
    link: "https://www.facebook.com/choirulsubwofer",
    name: "Facebook",
    icon: "FaFacebook",
  },
  {
    link: "mailto:find.choirul@gmail.com",
    name: "Email",
    icon: "GoMail",
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