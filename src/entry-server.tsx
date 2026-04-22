import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { getPostPaths } from "./lib/posts";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}

export function getStaticPaths() {
  const postPaths = getPostPaths();
  return ["/", "/about", ...postPaths, "/404"];
}
