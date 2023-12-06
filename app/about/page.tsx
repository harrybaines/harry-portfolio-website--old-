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
      {/* <PageHeading title="About Me" /> */}
      <p className="text-4xl font-bold mb-4 animate-from-bottom">
        Hi, I'm Harry 👋
      </p>
      <p
        className="text-2xl font-semibold animate-from-bottom"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        I write <span className="text-orange-400">code</span> and build{" "}
        <span className="text-blue-400">apps</span>.
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
      <section className="my-10">
        <h2 className="text-xl font-semibold my-4">About Me</h2>
        <ul>
          <li>5+ years experience as a Full-Stack Software Engineer</li>
          <li>2 years experience as a Data Scientist</li>
        </ul>
        <p>Download CV</p>
      </section>
      <section
        className="animate-from-bottom my-16"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <h2 className="text-xl font-semibold my-4">Experience</h2>
        <div className="grid grid-cols-4 gap-y-10">
          {workData.map((job) => (
            <ExperienceItem key={job.id} minimal={false} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
}
