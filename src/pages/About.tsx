import { useSEO } from "../lib/seo";

export default function About() {
  useSEO({
    title: "About",
    description:
      "Simon Thuaud — developer focused on programming, AI, and cooking.",
  });

  return (
    <section className="about">
      <div className="about-block">
        <img
          className="about-avatar"
          src="/images/profile.jpg"
          alt="Simon Thuaud"
          width={1679}
          height={1924}
        />
        <div className="about-text">
          <h1 className="about-name">Simon Thuaud</h1>
          <p className="about-bio">
            Developer focused on programming and AI. When I'm away from the
            keyboard, I'm usually cooking or exercising (I am trying to improve
            my pull-ups). This site is a place for notes, recipes, and
            experiments — more soon.
          </p>
          <p className="about-links">
            <a
              href="https://github.com/simounix"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            {" · "}
            <a
              href="https://www.linkedin.com/in/simon-thuaud/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
