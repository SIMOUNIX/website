import { useParams } from "react-router-dom";
import PostList from "../components/PostList";
import { getCategory } from "../lib/categories";
import NotFound from "./NotFound";

export default function CategoryIndex() {
  const { category } = useParams();
  const meta = category ? getCategory(category) : null;

  if (!meta) {
    return <NotFound />;
  }

  return (
    <section>
      <h1 className="hero-title">{meta.label}</h1>
      <p className="hero-intro">{meta.description}</p>
      <PostList category={meta.key} emptyMessage={meta.emptyMessage} />
    </section>
  );
}
