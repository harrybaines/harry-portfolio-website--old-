import { format, parseISO } from "date-fns";
import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import CustomImage from "components/ui/CustomImage";

export const generateStaticParams = async () =>
  allProjects.map((project) => ({ slug: project._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === params.slug
  );
  if (!project) throw new Error(`Project not found for slug: ${params.slug}`);
  return { title: project.title };
};

const mdxComponents: MDXComponents = {
  Image: CustomImage,
};

const ProjectLayout = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === params.slug
  );
  if (!project) throw new Error(`Project not found for slug: ${params.slug}`);

  const formattedStartDate = format(parseISO(project.startDate), "LLL yyyy");
  const formattedEndDate = project.endDate
    ? format(parseISO(project.endDate), "LLL yyyy")
    : "";

  const MDXContent = useMDXComponent(project.body.code);

  return (
    <article>
      <div className="my-8 animate-from-bottom">
        <time
          dateTime={project.startDate}
          className="text-sm text-gray-700 dark:text-gray-400"
        >
          {formattedStartDate}
          {project.endDate && formattedEndDate}
        </time>
        <h1 className="text-3xl font-bold mt-2">{project.title}</h1>
        <p className="text-xl mt-3 text-gray-400">{project.description}</p>
      </div>
      {/* <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0 animate-from-bottom"
        style={{ "--index": 1 } as React.CSSProperties}
        dangerouslySetInnerHTML={{ __html: project.body.html }}
      /> */}
      <div
        className="animate-from-bottom"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <MDXContent components={mdxComponents} />
      </div>
      <Link href="/projects" className="text-primary underline">
        ← All Projects
      </Link>
    </article>
  );
};

export default ProjectLayout;
