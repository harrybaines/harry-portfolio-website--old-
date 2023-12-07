import { compareDesc } from "date-fns";
import PageHeading from "../../components/ui/PageHeading";
import { allProjects } from "contentlayer/generated";
import ProjectCard from "components/ui/ProjectCard";

export default function ProjectsPage() {
  return (
    <div>
      <PageHeading title="Projects" />
      <section className="text-lg">
        <div
          className="animate-from-bottom"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <p className="mt-6">
            Here are some of the key projects I&apos;ve worked on.
          </p>
          <div className="mt-8 mb-16">
            {allProjects
              .filter((project) => project.highlight)
              .sort((a, b) => a.order - b.order)
              .map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
          </div>
        </div>
        <div
          className=" animate-from-bottom"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <p>And a few others I&apos;m also proud of:</p>
          <div className="grid grid-cols-2 mt-8 animate-from-bottom">
            {allProjects
              .sort((a, b) =>
                compareDesc(new Date(a.startDate), new Date(b.startDate))
              )
              .filter((project) => !project.highlight)
              .map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
