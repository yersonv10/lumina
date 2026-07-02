import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

export async function getStaticPaths() {
  const docs = await getCollection("docs");
  return docs
    .map((entry) => entry.id.replace(/\.mdx$/, ""))
    .filter((slug) => slug !== "index")
    .map((slug) => ({ params: { slug: `${slug}.md` } }));
}

export const GET: APIRoute = async ({ params }) => {
  const slug = (params.slug ?? "").replace(/\.md$/, "");
  const docs = await getCollection("docs");
  const entry = docs.find((d) => d.id.replace(/\.mdx$/, "") === slug);

  if (!entry) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(entry.body ?? "", {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
