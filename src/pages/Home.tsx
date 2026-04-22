import { Link } from "react-router-dom";
import { getAllPosts, getPostPath } from "../lib/posts";
import { formatShortDate } from "../lib/date";
import { useSEO } from "../lib/seo";

function getYear(date: string) {
  return new Date(
    date.includes("T") ? date : `${date}T00:00:00`
  ).getFullYear();
}

export default function Home() {
  useSEO({
    description:
      "Notes on programming, AI, and cooking by Simon Thuaud.",
  });

  const posts = getAllPosts();

  const byYear: Record<number, typeof posts> = {};
  for (const post of posts) {
    const year = getYear(post.frontmatter.publishedAt);
    if (!byYear[year]) byYear[year] = [];
    byYear[year].push(post);
  }
  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="home">
      <p className="home-tagline">
        notes on programming, AI, and cooking.{" "}
        <Link to="/about">more about me →</Link>
      </p>

      {posts.length === 0 ? (
        <p className="archive-empty">No posts yet.</p>
      ) : (
        <div className="archive">
          {years.map((year) => (
            <div key={year} className="archive-section">
              <h2 className="archive-year">{year}</h2>
              {byYear[year].map((post) => (
                <Link
                  key={post.slug}
                  to={getPostPath(post)}
                  className="archive-post"
                >
                  <span className="archive-date">
                    {formatShortDate(post.frontmatter.publishedAt)}
                  </span>
                  <span className="archive-title">
                    {post.frontmatter.title}
                  </span>
                  <span className="archive-tag">
                    {post.frontmatter.category}
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
