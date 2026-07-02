const sources = import.meta.glob(["/src/components/preview/**/*.tsx", "/content/**/*.css"], {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

/**
 * Reads a preview source file at build time (Vite's module graph), mirroring
 * the request-time fs.readFileSync of the Next.js app.
 */
export function getFileContent(relativePath: string): string {
  const key = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
  const raw = sources[key];
  if (!raw) {
    throw new Error(`getFileContent: no source found for "${relativePath}"`);
  }
  return raw;
}
