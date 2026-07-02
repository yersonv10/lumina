import { useEffect, useMemo, useRef, useState } from "react";
import { useSearch } from "./useSearch";
import type { SearchResultItem } from "@/lib/meilisearch";

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const { docs, blocks, templates, pages } = useSearch(query);
  const allResults = useMemo(() => [...docs, ...blocks, ...templates, ...pages], [docs, blocks, templates, pages]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((v) => !v);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => setSelectedIndex(0), [query]);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, allResults.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && allResults[selectedIndex]) {
        window.location.href = allResults[selectedIndex].url;
      }
    }
    function onClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) setIsOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isOpen, selectedIndex, allResults]);

  function renderSection(title: string, items: SearchResultItem[], startIndex: number) {
    if (items.length === 0) return null;
    return (
      <div key={title} className="py-3">
        <div className="px-5 py-2">
          <h3 className="text-xs font-medium text-text-muted uppercase">{title}</h3>
        </div>
        {items.map((item, index) => {
          const globalIndex = startIndex + index;
          return (
            <a
              key={item.id}
              href={item.url}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-5 py-3 text-sm ${
                selectedIndex === globalIndex ? "bg-background-soft text-text-primary" : "text-text-secondary"
              }`}
            >
              <span>{item.title}</span>
              {item.tag && (
                <span className="rounded bg-primary-500 px-2 py-0.5 text-[10px] text-text-on-brand uppercase">
                  {item.tag}
                </span>
              )}
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="hidden items-center gap-2 rounded-(--radius-control) border border-border px-3 py-1.5 text-sm text-text-secondary md:flex"
      >
        <span>Search</span>
        <kbd className="rounded bg-background-soft px-1.5 py-0.5 font-mono text-xs">⌘K</kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-start justify-center px-4 pt-[14vh]">
          <div className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm" />
          <div
            ref={modalRef}
            className="relative w-full max-w-150 overflow-hidden rounded-(--radius-card) border border-border bg-background-raised p-3 shadow-(--shadow-card)"
          >
            <div className="flex items-center gap-3 rounded-(--radius-control) border border-border bg-background-soft px-4 py-2.5">
              <input
                ref={inputRef}
                type="text"
                placeholder="Type something to search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm text-text-primary outline-none placeholder:text-text-muted"
              />
              {query.length > 0 && (
                <button type="button" onClick={() => setQuery("")} className="text-text-muted hover:text-text-primary">
                  ×
                </button>
              )}
            </div>

            <div className="max-h-100 overflow-y-auto">
              {allResults.length === 0 ? (
                <div className="px-5 py-8 text-center text-sm text-text-secondary">
                  {query ? `No results found for "${query}"` : "Start typing to search"}
                </div>
              ) : (
                <>
                  {renderSection("Docs", docs, 0)}
                  {renderSection("Blocks", blocks, docs.length)}
                  {renderSection("Templates", templates, docs.length + blocks.length)}
                  {renderSection("Pages", pages, docs.length + blocks.length + templates.length)}
                </>
              )}
            </div>

            <div className="flex items-center justify-center gap-6 border-t border-dashed border-border px-5 pt-4 pb-2 text-xs text-text-secondary">
              <span>↑↓ Navigate</span>
              <span>↵ Enter</span>
              <span>Esc Close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
