import NextLink from "next/link";
import { IconType } from "react-icons";

export interface CustomLinkProps {
  label: string;
  href: string;
  icon?: IconType;
}

export default function CustomLink({ label, href, icon }: CustomLinkProps) {
  const Icon = icon;
  return (
    <NextLink href={href}>
      <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 px-6 py-2 rounded-md hover:cursor-pointer transition-all">
        {Icon && <Icon />}
        {label}
      </div>
    </NextLink>
  );
}
