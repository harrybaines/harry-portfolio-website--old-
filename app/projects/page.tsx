import { compareDesc } from "date-fns";
import PageHeading from "../../components/ui/PageHeading";
import { allProjects } from "contentlayer/generated";
import ProjectCard from "components/ui/ProjectCard";

export default function ProjectsPage() {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.startDate), new Date(b.startDate))
  );

  return (
    <div>
      <PageHeading title="Projects" />
      <section
        className="text-lg animate-from-bottom"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        Here are some of the key projects I've worked on.
        <div className="my-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
