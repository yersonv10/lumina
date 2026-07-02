import { useEffect, useState } from "react";
import { search, type SearchResults } from "@/lib/meilisearch";

const empty: SearchResults = { docs: [], blocks: [], templates: [], pages: [] };

export function useSearch(query: string) {
  const [results, setResults] = useState<SearchResults>(empty);

  useEffect(() => {
    let cancelled = false;
    search(query).then((r) => {
      if (!cancelled) setResults(r);
    });
    return () => {
      cancelled = true;
    };
  }, [query]);

  return results;
}
