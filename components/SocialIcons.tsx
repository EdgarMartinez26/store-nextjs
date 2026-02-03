"use client";

import {
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
  RiTiktokFill,
} from "react-icons/ri";

const storeSocialLinks = [
  {
    icon: RiInstagramFill,
    href: "https://www.instagram.com/yourstore",
  },
  {
    icon: RiTwitterFill,
    href: "https://twitter.com/yourstore",
  },
  {
    icon: RiFacebookFill,
    href: "https://www.facebook.com/yourstore",
  },
  {
    icon: RiTiktokFill,
    href: "https://www.tiktok.com/@yourstore",
  },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-2 border border-neutral-800 max-w-max p-1 rounded-full items-center">
      {storeSocialLinks.map(({ icon: Icon, href }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center aspect-square hover:bg-neutral-700 transition-colors"
        >
          <Icon className="text-white" size={20} />
        </a>
      ))}
    </div>
  );
}
