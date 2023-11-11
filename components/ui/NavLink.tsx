"use client";

import NextLink from "next/link";
import { ReactNode } from "react";
import cn from "clsx";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <NextLink
      className={cn(
        "px-4 py-2 rounded-lg text-sm text-foreground hover:text-primary transition-colors",
        active ? "underline" : ""
      )}
      href={href}
    >
      {children}
    </NextLink>
  );
}
