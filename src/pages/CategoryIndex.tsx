import { useParams } from "react-router-dom";
import PostList from "../components/PostList";
import { getCategory } from "../lib/categories";
import { useSEO } from "../lib/seo";
import NotFound from "./NotFound";

export default function CategoryIndex() {
  const { category } = useParams();
  const meta = category ? getCategory(category) : null;

  useSEO(
    meta
      ? {
          title: meta.label,
          description: meta.description,
        }
      : {}
  );

  if (!meta) {
    return <NotFound />;
  }

  return (
    <section>
      <div className="category-header">
        <h1 className="category-title">{meta.label}</h1>
        <p className="category-desc">{meta.description}</p>
      </div>
      <PostList category={meta.key} emptyMessage={meta.emptyMessage} />
    </section>
  );
}
