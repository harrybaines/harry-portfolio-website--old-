import NextLink, { LinkProps as NextLinkProps } from "next/link";

export default function ContactLink({ title, link }) {
  return (
    <NextLink
      href={link}
      className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 px-6 py-2 rounded-md hover:cursor-pointer transition-all"
    >
      {title}
    </NextLink>
  );
}
