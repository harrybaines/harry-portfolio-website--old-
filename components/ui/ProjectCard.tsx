import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Project } from "contentlayer/generated";

export default function ProjectCard(project: Project) {
  const formattedStartDate = format(parseISO(project.startDate), "LLL yyyy");
  const formattedEndDate = project.endDate
    ? format(parseISO(project.endDate), "LLL yyyy")
    : "";

  return (
    <div className="mb-8 animate-from-bottom">
      <h2 className="mb-1 text-lg font-semibold hover:underline">
        <Link href={project.url}>{project.title}</Link>
      </h2>
      <div className="flex items-center gap-3 mb-2">
        <time
          dateTime={project.startDate}
          className="block text-sm dark:text-gray-400"
        >
          {formattedStartDate}
          {project.endDate && ` - ${formattedEndDate}`}
        </time>
        <p className="text-xs bg-gray-100 dark:bg-gray-700 rounded-sm px-2">
          {project.projectType}
        </p>
      </div>
      <p className="text-sm">{project.description}</p>
    </div>
  );
}
