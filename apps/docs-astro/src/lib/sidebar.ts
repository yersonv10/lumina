import { getCollection, type CollectionEntry } from "astro:content";

export interface SidebarLink {
  type: "link";
  label: string;
  href: string;
  external: boolean;
}

export interface SidebarPage {
  type: "page";
  label: string;
  href: string;
  badge?: "new" | "updated";
}

export interface SidebarFolder {
  type: "folder";
  label: string;
  defaultOpen?: boolean;
  children: SidebarNode[];
}

export type SidebarNode = SidebarLink | SidebarPage | SidebarFolder;

const LINK_RE = /^\[(.+)\]\((.+)\)$/;

function joinSlug(dir: string, name: string) {
  return dir ? `${dir}/${name}` : name;
}

export async function buildSidebar(): Promise<SidebarNode[]> {
  const [metas, docs] = await Promise.all([getCollection("meta"), getCollection("docs")]);

  const metaByDir = new Map<string, CollectionEntry<"meta">>();
  for (const m of metas) {
    const dir = m.id.replace(/\/?meta\.json$/, "");
    metaByDir.set(dir, m);
  }

  const docByHref = new Map<string, CollectionEntry<"docs">>();
  for (const d of docs) {
    const slug = d.id.replace(/\.mdx$/, "");
    docByHref.set(slug === "index" ? "" : slug, d);
  }

  function buildFolder(dir: string): SidebarNode[] {
    const meta = metaByDir.get(dir);
    if (!meta) return [];

    return meta.data.pages.map((raw): SidebarNode => {
      const linkMatch = raw.match(LINK_RE);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        return { type: "link", label, href, external: /^https?:\/\//.test(href) };
      }

      const childDir = joinSlug(dir, raw);
      if (metaByDir.has(childDir)) {
        const childMeta = metaByDir.get(childDir)!;
        return {
          type: "folder",
          label: childMeta.data.title,
          defaultOpen: childMeta.data.defaultOpen,
          children: buildFolder(childDir),
        };
      }

      const doc = docByHref.get(childDir);
      return {
        type: "page",
        label: doc?.data.title ?? raw,
        href: `/${childDir}`,
        badge: meta.data.badges?.[raw],
      };
    });
  }

  return buildFolder("");
}

export function flattenPages(nodes: SidebarNode[]): SidebarPage[] {
  const pages: SidebarPage[] = [];
  for (const node of nodes) {
    if (node.type === "page") pages.push(node);
    if (node.type === "folder") pages.push(...flattenPages(node.children));
  }
  return pages;
}
