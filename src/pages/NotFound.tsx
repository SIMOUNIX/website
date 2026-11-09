import { useSEO } from "../lib/seo";

export default function NotFound() {
  useSEO({
    title: "Page Not Found",
    description: "The page you requested doesn't exist.",
  });

  return (
    <section>
      <p className="hero-intro">what is it? where is it?</p>
    </section>
  );
}
