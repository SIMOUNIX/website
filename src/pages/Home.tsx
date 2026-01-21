import PostList from "../components/PostList";
import { getCategory } from "../lib/categories";

export default function Home() {
  const recipes = getCategory("recipes");
  const notes = getCategory("notes");

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
