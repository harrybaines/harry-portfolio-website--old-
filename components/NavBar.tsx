"use client";

import Link from "next/link";
import NavLink from "./ui/NavLink";
import ThemeToggleButton from "./ui/ThemeToggleButton";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
];

export default function Header() {
  return (
    <header className="max-w-[700px] mx-auto bg-background">
      <nav className="flex justify-between items-center gap-3 px-4 md:px-6 py-3">
        <ul className="flex">
          {links.map((link) => (
            <li
              key={link.href}
              className="relative after:content-['/'] after:absolute after:inset-y-0 after:right-[-3px] after:text-gray-500 last:after:content-['']"
            >
              <NavLink href={link.href}>{link.label.toUpperCase()}</NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center w-8 h-8">
          <ThemeToggleButton />
        </div>
      </nav>
    </header>
  );
}
