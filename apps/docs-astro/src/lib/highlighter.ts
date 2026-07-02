import { createHighlighterCore, type HighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

let highlighterPromise: Promise<HighlighterCore> | undefined;

/**
 * Cloudflare Workers disallow dynamic WASM instantiation, so we use Shiki's
 * pure-JS regex engine (createJavaScriptRegexEngine) instead of the default
 * Oniguruma/WASM engine. This requires the fine-grained `shiki/core` API with
 * explicit lang/theme imports rather than the "shiki" full-bundle convenience API.
 */
function getHighlighter() {
  highlighterPromise ??= createHighlighterCore({
    themes: [import("@shikijs/themes/github-light"), import("@shikijs/themes/github-dark")],
    langs: [
      import("@shikijs/langs/tsx"),
      import("@shikijs/langs/typescript"),
      import("@shikijs/langs/jsx"),
      import("@shikijs/langs/javascript"),
      import("@shikijs/langs/bash"),
      import("@shikijs/langs/json"),
      import("@shikijs/langs/css"),
    ],
    engine: createJavaScriptRegexEngine(),
  });
  return highlighterPromise;
}

export async function highlight(
  code: string,
  lang: string,
  transformers: Parameters<HighlighterCore["codeToHtml"]>[1]["transformers"] = [],
) {
  const highlighter = await getHighlighter();
  const loadedLangs = highlighter.getLoadedLanguages();
  const safeLang = loadedLangs.includes(lang) ? lang : "text";
  return highlighter.codeToHtml(code, {
    lang: safeLang,
    themes: { light: "github-light", dark: "github-dark" },
    transformers,
  });
}
