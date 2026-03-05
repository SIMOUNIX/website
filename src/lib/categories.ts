export type CategoryKey = "foods" | "notes";

export type CategoryMeta = {
  key: CategoryKey;
  label: string;
  path: string;
  description: string;
  emptyMessage: string;
};

export const categories: CategoryMeta[] = [
  {
    key: "notes",
    label: "Tech Notes",
    path: "/notes",
    description: "Field notes on systems, tooling, and software craft.",
    emptyMessage: "No notes yet.",
  },
  {
    key: "foods",
    label: "Food Notes",
    path: "/foods",
    description: "Thoughts on cooking and food exploration.",
    emptyMessage: "No thoughts yet.",
  },
];

export function getCategory(key: string) {
  return categories.find((category) => category.key === key) ?? null;
}

export function getCategoryPath(key: CategoryKey) {
  return getCategory(key)?.path ?? "/notes";
}
