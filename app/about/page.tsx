import PageHeading from "../../components/ui/PageHeading";

import bikeImage from "public/images/bike.jpeg";
import runningImage from "public/images/running.jpeg";
import graduationImage from "public/images/graduation.jpeg";
import AboutImage from "../../components/ui/AboutImage";
import ExperienceItem from "../../components/ui/ExperienceItem";
import { workData } from "../../content/workData";

export default function AboutPage() {
  return (
    <div>
      <PageHeading title="About Me" />
      <p className="my-8 text-xl font-semibold animate-from-bottom">
        Hi! 👋 I'm Harry. I'm a full-stack software engineer with 5+ years of
        experience. Currently, I'm building a project management system for a{" "}
        <a href="https://www.cassidyashton.co.uk" target="_blank">
          large architecture firm
        </a>
        .
      </p>
      <section className="flex gap-8 my-8">
        <div
          className="animate-from-bottom"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <AboutImage
            src={graduationImage}
            alt="graduation"
            caption="Masters graduation, 2020"
          />
        </div>
        <div
          className="animate-from-bottom"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <AboutImage
            src={runningImage}
            alt="me at parkrun"
            caption="Fleetwood parkrun, Jun 2023"
          />
        </div>
        <div
          className="animate-from-bottom"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <AboutImage
            src={bikeImage}
            alt="me on bike"
            caption="Maldives, 2018"
          />
        </div>
      </section>
      <section
        className="animate-from-bottom"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="grid grid-cols-4 gap-y-8">
          {workData.map((job) => (
            <ExperienceItem minimal={false} job={job} />
          ))}
        </div>
        {/* <p>
          In 2018 I developed a full-stack timesheet system for a large
          architecture firm. Currently I'm building a new project management
          system with a modern tech stack and new features.
        </p> */}
      </section>
      <section>
        <h2 className="text-xl font-semibold">Interests</h2>
        {/* <ul className="list-disc">
          <li>Running 🏃‍♂️ - </li>
          <li>Gym 🏋️ - </li>
          <li>
          Indie hacking 👨‍💻 - I enjoy working in side projects in my free time
          and I love to learn new tools and technologies
          </li>
        </ul> */}
      </section>
      <section>
        {/* <h2 className="text-xl font-semibold">Principles</h2> */}
        {/* <ul className="list-disc">
          <li>
            <strong>Simplicity over complexity</strong>: I start with the
            simplest solution and scale up (inspired by Occam's razor).
          </li>
          <li>
            <strong></strong> I build slick, modern and feature-rich
            applications with minimal designs.
          </li>
          <li>Work hard, play hard!</li>
        </ul> */}
      </section>
    </div>
  );
}
