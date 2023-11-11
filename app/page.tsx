import avatar from "public/images/avatar.png";
import Image from "next/image";
import ContactLink from "../components/ui/ContactLink";
import NextLink from "next/link";
import WorkItem from "../components/ui/WorkItem";

const workData = [
  {
    date: "2018 - Present",
    title: "Full Stack Software Engineer",
    companyName: "Cassidy and Ashton",
    companyURL: "https://cassidyashton.co.uk",
    skills: [
      "React",
      "RTK",
      "TypeScript",
      "Express",
      "Postgres",
      "Prisma",
      "Supabase",
    ],
    description:
      "Designed and developed a modern full-stack timesheet and project management system from scratch. Used by ~60 employees on a daily basis.",
  },
  {
    date: "2020 - 2022",
    title: "Data Scientist / Software Engineer",
    companyName: "Yordas Digital",
    companyURL: "https://www.yordasgroup.com/",
    skills: ["Python", "Django", "Docker", "Flask", "Selenium"],
    description:
      "Developed and maintained web applications using React and Node.js",
  },
];

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
              className="text-gray-400 mb-1 animate-from-bottom"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              Hi! 👋 My name is
            </p>
            <h1 className="text-3xl mb-1.5 font-bold animate-from-bottom">
              Harry Baines
            </h1>
            <p className="text-gray-400 text-lg animate-from-bottom">
              Full-stack software engineer 🚀
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 animate-from-bottom">
          <p
            className="text-lg"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            Experienced software engineer with experience in web dev, data
            science, AI and blockchains. Currently building a project management
            system for a large architecture firm.
            <NextLink href="/about" className="text-gray-400 underline ml-2">
              Read more
            </NextLink>
          </p>
          <div
            className="flex flex-row gap-3 animate-from-bottom"
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <ContactLink
              title="Email"
              link="mailto:harryb0905@googlemail.com"
            />
            <ContactLink
              title="GitHub"
              link="mailto:harryb0905@googlemail.com"
            />
            <ContactLink
              title="Twitter"
              link="mailto:harryb0905@googlemail.com"
            />
            <ContactLink
              title="LinkedIn"
              link="mailto:harryb0905@googlemail.com"
            />
          </div>
        </div>
      </section>
      <section
        className="animate-from-bottom"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <h2 className="text-2xl font-bold mb-10">Work</h2>
        <div className="grid grid-cols-4 gap-y-8">
          {workData.map((job, index) => (
            <WorkItem key={index} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
}
