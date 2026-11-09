import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: "frontmatter" }],
        remarkGfm,
      ],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: "github-light",
            keepBackground: false,
          },
        ],
      ],
    }),
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        // client only: SSR build externalizes these
        manualChunks: isSsrBuild
          ? undefined
          : {
              react: ["react", "react-dom"],
              router: ["react-router-dom"],
            },
      },
    },
  },
}));
