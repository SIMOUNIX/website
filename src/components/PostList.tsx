import { Link } from "react-router-dom";
import { formatDate } from "../lib/date";
import { getAllPosts, getPostPath } from "../lib/posts";
import type { CategoryKey } from "../lib/categories";

type PostListProps = {
  limit?: number;
  showSummary?: boolean;
  category?: CategoryKey;
  emptyMessage?: string;
};

export default function PostList({
  limit,
  showSummary = true,
  category,
  emptyMessage = "No posts yet.",
}: PostListProps) {
  const posts = getAllPosts();
  const filteredPosts = category
    ? posts.filter((post) => post.frontmatter.category === category)
    : posts;
  const visiblePosts =
    typeof limit === "number" ? filteredPosts.slice(0, limit) : filteredPosts;

  if (!visiblePosts.length) {
    return <p className="post-empty">{emptyMessage}</p>;
  }

  return (
    <div className="post-list">
      {visiblePosts.map((post) => (
        <Link key={post.slug} to={getPostPath(post)} className="post-item">
          <h3 className="post-title">{post.frontmatter.title}</h3>
          <p className="post-meta">
            {formatDate(post.frontmatter.publishedAt)}
          </p>
          {showSummary && post.frontmatter.summary && (
            <p className="post-summary">{post.frontmatter.summary}</p>
          )}
        </Link>
      ))}
    </div>
  );
}
