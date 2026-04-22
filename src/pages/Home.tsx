import { useRef } from "react";
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
    description: "Notes on programming, AI, and cooking by Simon Thuaud.",
  });

  const dotRef = useRef<HTMLSpanElement>(null);
  const archiveRef = useRef<HTMLDivElement>(null);

  const moveDot = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const dot = dotRef.current;
    const archive = archiveRef.current;
    if (!dot || !archive) return;

    const archiveRect = archive.getBoundingClientRect();
    const postRect = e.currentTarget.getBoundingClientRect();
    const y = postRect.top - archiveRect.top + postRect.height / 2 - 2.5;

    const visible = parseFloat(dot.style.opacity || "0") > 0;
    if (!visible) {
      dot.style.transition = "none";
      dot.style.transform = `translateY(${y}px)`;
      dot.getBoundingClientRect();
      dot.style.transition = "transform 0.18s ease, opacity 0.2s ease";
    } else {
      dot.style.transform = `translateY(${y}px)`;
    }
    dot.style.opacity = "1";
  };

  const hideDot = () => {
    const dot = dotRef.current;
    if (!dot) return;
    dot.style.opacity = "0";
  };

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
      {posts.length === 0 ? (
        <p className="archive-empty">No posts yet.</p>
      ) : (
        <div className="archive" ref={archiveRef} onMouseLeave={hideDot}>
          <span className="archive-dot" ref={dotRef} />
          {years.map((year) => (
            <div key={year} className="archive-section">
              <h2 className="archive-year">{year}</h2>
              {byYear[year].map((post) => (
                <Link
                  key={post.slug}
                  to={getPostPath(post)}
                  className="archive-post"
                  onMouseEnter={moveDot}
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
