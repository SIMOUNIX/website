import { useSEO } from "../lib/seo";

export default function Home() {
  useSEO({
    description:
      "Personal website of Simon Thuaud. Developer passionate about programming, AI, and cooking.",
  });

  return (
    <section className="hero">
      <h1 className="hero-title">hello!</h1>
      <div className="home-section-block">
        <img
          className="hero-avatar"
          src="/images/profile.jpg"
          alt="Simon Thuaud"
          loading="lazy"
        />
        <p className="hero-intro">
          I'm Simon Thuaud, a developer focused on programming and AI. When I'm
          away from the keyboard, I'm usually cooking or exercising (I am trying to improve my pull-ups). This site is a place for
          notes, recipes, and experiments - more soon.
        </p>
      </div>
    </section>
  );
}
