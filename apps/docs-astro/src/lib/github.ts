const REPO = "yersonv10/lumina";
const FALLBACK_STARS = "1.4K";

function formatStarCount(count: number): string {
  if (count < 1000) return String(count);
  return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}K`;
}

// Cloudflare Workers cache subrequests at the edge when `cf.cacheTtl` is set,
// so this stays well under GitHub's 60 req/hour unauthenticated rate limit
// even though `SiteHeader` renders on every request in `output: "server"`.
export async function getRepoStars(): Promise<string> {
  try {
    const response = await fetch(`https://api.github.com/repos/${REPO}`, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "lumina-docs" },
      // @ts-expect-error -- `cf` is a Cloudflare Workers-only fetch extension
      cf: { cacheTtl: 3600, cacheEverything: true },
    });

    if (!response.ok) return FALLBACK_STARS;

    const data = (await response.json()) as { stargazers_count?: number };
    if (typeof data.stargazers_count !== "number") return FALLBACK_STARS;

    return formatStarCount(data.stargazers_count);
  } catch (error) {
    console.error("GitHub stars fetch error:", error);
    return FALLBACK_STARS;
  }
}
