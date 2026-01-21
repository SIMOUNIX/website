import PostList from "../components/PostList";
import { getCategory } from "../lib/categories";

export default function Home() {
  const recipes = getCategory("recipes");
  const notes = getCategory("notes");

  return (
    <section className="hero">
      <h1 className="hero-title">Minimal notes on software and food.</h1>
      <p className="hero-intro">
        Two focused collections: tech notes for software decisions and recipes
        for repeatable, kitchen-tested meals.
      </p>
      <div className="section-block">
        <h2 className="section-title">{notes?.label ?? "Tech Notes"}</h2>
        <PostList
          category="notes"
          limit={2}
          emptyMessage={notes?.emptyMessage}
        />
      </div>
      <div className="section-block">
        <h2 className="section-title">{recipes?.label ?? "Recipes"}</h2>
        <PostList
          category="recipes"
          limit={2}
          emptyMessage={recipes?.emptyMessage}
        />
      </div>
    </section>
  );
}
