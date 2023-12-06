"use client";

import NavLink from "./ui/NavLink";
import ThemeToggleButton from "./ui/ThemeToggleButton";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function Header() {
  return (
    <header className="max-w-[700px] mx-auto bg-background">
      <nav className="flex justify-between py-3 px-2">
        <ul className="flex">
          {links.map((link) => (
            <li
              key={link.href}
              className="relative after:content-['/'] after:absolute after:inset-y-0 after:right-[-3px] after:text-gray-500 last:after:content-['']"
            >
              <NavLink href={link.href}>{link.label}</NavLink>
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
