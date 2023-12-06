import avatar from "public/images/avatar.png";
import Image from "next/image";
import ContactLink from "../components/ui/AboutLink";
import NextLink from "next/link";
import ExperienceItem from "../components/ui/ExperienceItem";
import { workData } from "../content/workData";
import { aboutLinks } from "../content/aboutLinks";
import AboutLink from "../components/ui/AboutLink";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      <section className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-8 md:items-center">
          <Image
            src={avatar}
            width={110}
            height={110}
            alt="avatar"
            className="rounded-full animate-from-bottom"
          />
          <div>
            <p
              className="text-gray-600 dark:text-gray-300 mb-1 animate-from-bottom"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              Hi! 👋 My name is
            </p>
            <h1 className="text-3xl mb-1.5 font-bold animate-from-bottom">
              Harry Baines
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg animate-from-bottom">
              Full-stack software engineer 🚀
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 animate-from-bottom">
          <p style={{ "--index": 2 } as React.CSSProperties}>
            Experienced software engineer with experience in web dev, data
            science, AI and blockchains. Currently building a project management
            system for a large architecture firm.
            <NextLink
              href="/about"
              className=" text-gray-600 dark:text-gray-400 underline ml-2"
            >
              Read more
            </NextLink>
          </p>
          <div
            className="flex flex-row gap-3 animate-from-bottom"
            style={{ "--index": 3 } as React.CSSProperties}
          >
            {aboutLinks.map((link) => (
              <AboutLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      </section>
      <section
        className="animate-from-bottom"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <h2 className="text-2xl font-bold mb-10">Experience</h2>
        <div className="grid grid-cols-10 gap-y-8 gap-x-4">
          {workData.map((job) => (
            <ExperienceItem key={job.date} minimal job={job} />
          ))}
        </div>
      </section>
    </div>
  );
}
