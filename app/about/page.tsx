import PageHeading from "../../components/ui/PageHeading";

import bikeImage from "public/images/bike.jpeg";
import runningImage from "public/images/running.jpeg";
import graduationImage from "public/images/graduation.jpeg";
import AboutImage from "../../components/ui/AboutImage";
import ExperienceItem from "../../components/ui/ExperienceItem";
import { workData } from "../../content/workData";
import NextLink from "next/link";
import CustomLink from "components/ui/CustomLink";

export default function AboutPage() {
  return (
    <div>
      {/* <PageHeading title="About Me" /> */}
      <p className="text-4xl font-bold mb-4 animate-from-bottom">
        Hi, I'm Harry 👋
      </p>
      <p
        className="text-2xl font-semibold animate-from-bottom"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        I write <span className="text-orange-400 underline">code</span> and
        build <span className="text-blue-400 underline">software</span>.
      </p>
      {/* <p
        className="text-lg animate-from-bottom dark:text-gray-300"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        Hi! 👋 I'm Harry. I'm a full-stack software engineer with 5+ years of
        experience. Currently, I'm building a project management system for a{" "}
        <a
          href="https://www.cassidyashton.co.uk"
          target="_blank"
          className="underline"
        >
          large architecture firm
        </a>
        .
      </p> */}
      <section className="flex gap-8 my-10">
        <div
          className="animate-from-bottom"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <AboutImage
            src={graduationImage}
            alt="graduation"
            caption="Masters graduation 12/20"
          />
        </div>
        <div
          className="animate-from-bottom"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <AboutImage
            src={runningImage}
            alt="me at parkrun"
            caption="Fleetwood parkrun 06/23"
          />
        </div>
        <div
          className="animate-from-bottom"
          style={{ "--index": 4 } as React.CSSProperties}
        >
          <AboutImage
            src={bikeImage}
            alt="me on bike"
            caption="Maldives 08/18"
          />
        </div>
      </section>
      <section
        className="my-10 animate-from-bottom"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <h2 className="text-2xl font-semibold my-6">About Me</h2>
        <ul className="list-disc pl-8 space-y-3">
          <li>5+ years experience as a Full-Stack Software Engineer</li>
          <li>2 years experience as a Data Scientist</li>
          <li>
            Studied MSc Data Science and BSc Computer Science at Lancaster
            University
          </li>
          <li>
            Experienced with building full-stack software applications,
            automation scripts, API's and machine learning models.
          </li>
          <li>
            During my 2nd year at university I created and sold a full-stack
            timesheet application to a large architecture firm as a side
            project, which is currently being used by 60+ employees on a daily
            basis. I'm currently building a second version of the system to
            utilise a more modern tech stack.
          </li>
          <li>
            I'm also passionate about leveraging AI/ML to build innovative
            solutions. Recently, I've been spending time investigating large
            language models.
          </li>
          <li>I like keeping up-to-date with the latest developments in AI.</li>
          <li>
            I'm a lifelong learner looking for opportunities to grow and improve
            my skills.
          </li>
        </ul>
        <p className="mt-6">
          In my free time I enjoy working on side projects, playing fantasy
          football and running. I also tend to consume rather large quantities
          of coffee :)
        </p>
        <div className="flex justify-center mt-8">
          <CustomLink label="Download CV" href="/cv/cv.pdf" />
        </div>
      </section>
      <section
        className="animate-from-bottom my-12"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <h2 className="text-2xl font-semibold my-6">Experience</h2>
        <div className="grid grid-cols-4 gap-y-10">
          {workData.map((job) => (
            <ExperienceItem key={job.id} minimal={false} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
}
