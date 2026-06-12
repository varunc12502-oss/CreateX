export type ProjectType = "resume" | "presentation" | "pdf" | "document" | "design";

export type Project = {
  id: string;
  title: string;
  type: ProjectType;
  updatedAt: string;
  meta: string;
};
