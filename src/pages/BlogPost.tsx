import { Link, useParams } from "react-router-dom";
import { formatDate } from "../lib/date";
import { getPostBySlug } from "../lib/posts";
import { mdxComponents } from "../components/mdx";
import { useSEO } from "../lib/seo";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : null;

  useSEO(
    post
      ? {
          title: post.frontmatter.title,
          description: post.frontmatter.summary,
        }
      : {}
  );

  if (!post) {
    return <NotFound />;
  }

  const Content = post.component;

  return (
    <section>
      <Link className="back-link" to="/">
        ← back
      </Link>
      <h1 className="post-page-title">{post.frontmatter.title}</h1>
      <p className="post-page-meta">{formatDate(post.frontmatter.publishedAt)}</p>
      <article className="prose">
        <Content components={mdxComponents} />
      </article>
    </section>
  );
}
