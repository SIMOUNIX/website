/// <reference types="vite/client" />

declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const frontmatter: {
    title: string;
    publishedAt: string;
    summary: string;
    category?: "notes" | "recipes";
    image?: string;
  };

  const MDXComponent: ComponentType<{
    components?: Record<string, ComponentType<unknown>>;
  }>;

  export default MDXComponent;
}
