import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Project } from "contentlayer/generated";
import Image from "next/image";

export default function ProjectCard(project: Project) {
  const formattedStartDate = format(parseISO(project.startDate), "LLL yyyy");
  const formattedEndDate = project.endDate
    ? format(parseISO(project.endDate), "LLL yyyy")
    : "";

  return (
    <div className="flex gap-x-4 gap-y-10 mb-8 animate-from-bottom">
      <div className="flex-none w-52 h-28 filter:text-black bg-gray-100 dark:bg-gray-800 rounded-md">
        <div className="relative h-full w-full">
          <Image
            src={project.image}
            alt={project.title}
            // height={200}
            // width={200}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div>
        <h2 className="mb-1 text-lg hover:underline">
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
          <p className="text-sm bg-gray-100 dark:bg-gray-700 rounded-sm px-2">
            {project.projectType}
          </p>
        </div>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  );
}
