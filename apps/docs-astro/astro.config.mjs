import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { remarkPackageManagerCommand } from "./src/lib/remark-package-manager.mjs";

export default defineConfig({
  site: "https://docs.lumina.com",
  output: "server",
  adapter: cloudflare({ imageService: "compile" }),
  integrations: [react(), mdx(), sitemap()],
  markdown: {
    // Cloudflare Workers disallow dynamic WASM instantiation, which rules out
    // Shiki's default Oniguruma engine for Astro's built-in prose code fences.
    // Prism is pure JS. Live component-preview code panes use Shiki separately
    // (see ComponentPreview.astro / CodeBlockCard.astro) with its JS regex engine.
    syntaxHighlight: "prism",
    remarkPlugins: [remarkPackageManagerCommand],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
