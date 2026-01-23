import { useSEO } from "../lib/seo";

export default function NotFound() {
  useSEO({
    title: "Page Not Found",
    description: "The page you requested doesn't exist.",
  });

  return (
    <section>
      <h1 className="hero-title">404 -- Page Not Found</h1>
      <p className="hero-intro">The page you requested doesn't exist.</p>
    </section>
  );
}
