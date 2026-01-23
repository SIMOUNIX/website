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
          I am THUAUD Simon a simple guy that like programming and AI. My other
          passion is cooking. This website is being filled...
        </p>
      </div>
    </section>
  );
}
