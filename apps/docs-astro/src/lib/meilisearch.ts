import { MeiliSearch } from "meilisearch";

const host = import.meta.env.PUBLIC_MEILISEARCH_HOST;
const apiKey = import.meta.env.PUBLIC_MEILISEARCH_SEARCH_KEY;

// Lazily constructed: this module is evaluated during SSR (Astro always
// server-renders the initial markup of a hydrated island), so it must not
// throw at import time when search isn't configured for a given environment.
let client: MeiliSearch | undefined;
function getClient(): MeiliSearch | undefined {
  if (!host) return undefined;
  client ??= new MeiliSearch({ host, apiKey });
  return client;
}

export interface SearchResultItem {
  id: string;
  type: "doc" | "block" | "template" | "page";
  title: string;
  url: string;
  createdAt: string;
  tag?: string;
}

export interface SearchResults {
  docs: SearchResultItem[];
  blocks: SearchResultItem[];
  templates: SearchResultItem[];
  pages: SearchResultItem[];
}

export async function search(query: string): Promise<SearchResults> {
  const searchTerm = query.trim();
  const empty: SearchResults = { docs: [], blocks: [], templates: [], pages: [] };

  const meili = getClient();
  if (!meili) return empty;

  try {
    const response = await meili.multiSearch({
      queries: [
        { indexUid: "lumina-v2-search", q: searchTerm, filter: "type = doc", limit: 5 },
        { indexUid: "lumina-v2-search", q: searchTerm, filter: "type = block", limit: 8 },
        { indexUid: "lumina-v2-search", q: searchTerm, filter: "type = template", limit: 6 },
        { indexUid: "lumina-v2-search", q: searchTerm, filter: "type = page", limit: 5 },
      ],
    });

    return {
      docs: (response.results[0]?.hits as unknown as SearchResultItem[]) ?? [],
      blocks: (response.results[1]?.hits as unknown as SearchResultItem[]) ?? [],
      templates: (response.results[2]?.hits as unknown as SearchResultItem[]) ?? [],
      pages: (response.results[3]?.hits as unknown as SearchResultItem[]) ?? [],
    };
  } catch (error) {
    console.error("Meilisearch error:", error);
    return empty;
  }
}
