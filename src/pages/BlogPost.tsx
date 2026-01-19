import { Link, useParams } from "react-router-dom";
import { formatDate } from "../lib/date";
import { getPostBySlug } from "../lib/posts";
import { getCategory } from "../lib/categories";
import { mdxComponents } from "../components/mdx";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug, category } = useParams();
  const meta = category ? getCategory(category) : null;
  const post = slug && meta ? getPostBySlug(slug, meta.key) : null;

  if (!post || !meta) {
    return <NotFound />;
  }

  const Content = post.component;

  return (
    <section>
      <Link className="back-link" to={meta.path}>
        Back to {meta.label}
      </Link>
      <h1 className="post-title">{post.frontmatter.title}</h1>
      <p className="post-meta">{formatDate(post.frontmatter.publishedAt)}</p>
      <article className="prose">
        <Content components={mdxComponents} />
      </article>
    </section>
  );
}
