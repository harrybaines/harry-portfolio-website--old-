import NextLink from "next/link";
import { IconType } from "react-icons";

export interface AboutLinkProps {
  label: string;
  href: string;
  icon: IconType;
}

export default function AboutLink({ label, href, icon }: AboutLinkProps) {
  const Icon = icon;
  return (
    <NextLink
      href={href}
      className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 px-6 py-2 rounded-md hover:cursor-pointer transition-all"
    >
      <div className="flex items-center gap-2">
        <Icon />
        {label}
      </div>
    </NextLink>
  );
}
