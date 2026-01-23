import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { getPostPaths } from "./lib/posts";
import { categories } from "./lib/categories";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}

export function getStaticPaths() {
  const postPaths = getPostPaths();
  const categoryPaths = categories.map((category) => category.path);
  return ["/", ...categoryPaths, ...postPaths, "/404"];
}
