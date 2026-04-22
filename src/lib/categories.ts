export type CategoryKey = "tech" | "foods" | "notes";

export type CategoryMeta = {
  key: CategoryKey;
  label: string;
  path: string;
  description: string;
  emptyMessage: string;
};

export const categories: CategoryMeta[] = [
  {
    key: "tech",
    label: "Tech",
    path: "/blog",
    description: "Notes on software, tooling, and AI.",
    emptyMessage: "No posts yet.",
  },
];

export function getCategory(key: string) {
  return categories.find((category) => category.key === key) ?? null;
}

export function getCategoryPath(key: CategoryKey) {
  return getCategory(key)?.path ?? "/blog";
}
