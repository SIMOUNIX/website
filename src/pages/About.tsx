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
            Software developer with a focus on AI and tooling. Between builds:
            cooking and a persistent attempt to get better at pull-ups. This is
            where I keep notes.
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
