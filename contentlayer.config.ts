import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

const projectComputedFields: ComputedFields = {
  url: {
    type: "string",
    resolve: (project) => `/projects/${project._raw.flattenedPath}`,
  },
  image: {
    type: "string",
    resolve: (doc) => `/projects/${getSlug(doc)}/cover.png`,
  },
};

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    startDate: { type: "date", required: true },
    endDate: { type: "date", required: false },
    description: { type: "string", required: true },
    projectType: { type: "string", required: true },
  },
  computedFields: projectComputedFields,
}));

export default makeSource({
  contentDirPath: "projects",
  documentTypes: [Project],
});
