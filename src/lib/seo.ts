import { useEffect } from "react";

export interface SEOProps {
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = "simon thuaud";
const DEFAULT_DESCRIPTION =
  "Personal website of Simon THUAUD. Developer passionate about programming, AI, and cooking. Sharing notes, recipes, and thoughts.";

export function useSEO({
  title,
  description = DEFAULT_DESCRIPTION,
}: SEOProps = {}) {
  useEffect(() => {
    const fullTitle = title ? `simon thuaud - ${title}` : DEFAULT_TITLE;

    // Update document title
    document.title = fullTitle;

    // Update description meta tag
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute("content", description);
    }

    // Cleanup: Reset to defaults when unmounting
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description]);
}
