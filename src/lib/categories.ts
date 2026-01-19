export type CategoryKey = "recipes" | "notes";

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
    key: "recipes",
    label: "Recipes",
    path: "/recipes",
    description: "Minimal recipes with clear ratios and repeatable steps.",
    emptyMessage: "No recipes yet.",
  },
];

export function getCategory(key: string) {
  return categories.find((category) => category.key === key) ?? null;
}

export function getCategoryPath(key: CategoryKey) {
  return getCategory(key)?.path ?? "/notes";
}
