import type { ComponentType } from "react";
import { getCategoryPath, type CategoryKey } from "./categories";

export type Frontmatter = {
  title: string;
  publishedAt: string;
  summary: string;
  category: CategoryKey;
  image?: string;
};

export type Post = {
  slug: string;
  frontmatter: Frontmatter;
  component: ComponentType<{ components?: Record<string, ComponentType<any>> }>;
};

type MdxModule = {
  default: ComponentType<{ components?: Record<string, ComponentType<any>> }>;
  frontmatter: Frontmatter;
};

const modules = import.meta.glob(
  ["../content/notes/*.mdx", "../content/recipes/*.mdx"],
  { eager: true },
);

const posts: Post[] = Object.entries(modules).map(([path, mod]) => {
  const module = mod as MdxModule;

  return {
    slug: slugFromPath(path),
    frontmatter: module.frontmatter,
    component: module.default,
  };
});

function slugFromPath(filePath: string) {
  const parts = filePath.split("/");
  const fileName = parts[parts.length - 1] || "";
  return fileName.replace(/\.mdx$/, "");
}

export function getAllPosts() {
  return [...posts].sort((a, b) => {
    return (
      new Date(b.frontmatter.publishedAt).getTime() -
      new Date(a.frontmatter.publishedAt).getTime()
    );
  });
}

export function getPostBySlug(slug: string, category?: CategoryKey) {
  return (
    posts.find(
      (post) =>
        post.slug === slug &&
        (!category || post.frontmatter.category === category),
    ) ?? null
  );
}

export function getPostSlugs() {
  return posts.map((post) => post.slug);
}

export function getPostPath(post: Post) {
  return `${getCategoryPath(post.frontmatter.category)}/${post.slug}`;
}

export function getPostPaths() {
  return posts.map((post) => getPostPath(post));
}
