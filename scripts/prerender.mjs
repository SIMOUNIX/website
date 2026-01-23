import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");
const template = await readFile(path.join(distDir, "index.html"), "utf-8");

const serverEntryPath = path.join(distDir, "server", "entry-server.js");
const { render, getStaticPaths } = await import(
  pathToFileURL(serverEntryPath).href
);

const routes = await getStaticPaths();

for (const url of routes) {
  const appHtml = render(url);
  let html = template.replace("<!--app-html-->", appHtml);

  if (html === template) {
    html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );
  }

  const routePath = url === "/" ? "" : url.replace(/^\//, "");
  const filePath = path.join(distDir, routePath, "index.html");

  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, html);

  if (url === "/404") {
    await writeFile(path.join(distDir, "404.html"), html);
  }
}
