/**
 * Static, SSR-safe stand-in previews for the /components catalog cards whose
 * real preview needs the browser (chart/carousel measure the DOM) or only
 * renders a bare trigger at rest (combobox/hover-card) or needs hydration to
 * swap in its image (avatar). These are catalog thumbnails only — the
 * component doc pages still use the real live previews.
 */
import { ChevronDown, Search1 } from "@lumina-kit/icons";

export function AvatarCatalogPreview() {
  return (
    <div className="relative size-14">
      <img
        src="/images/avatar/avatar-1.webp"
        alt="Avatar"
        className="size-14 rounded-full object-cover"
      />
      <span className="absolute right-0 bottom-0 size-3.5 rounded-full border-2 border-background-soft bg-success" />
    </div>
  );
}

export function ComboboxCatalogPreview() {
  return (
    <div className="w-64 rounded-(--radius-control) border border-border bg-background px-3 py-2 text-sm">
      <div className="flex items-center gap-2 text-text-muted">
        <Search1 className="size-4" />
        <span>Search a fruit…</span>
        <ChevronDown className="ml-auto size-4" />
      </div>
    </div>
  );
}

export function HoverCardCatalogPreview() {
  return (
    <div className="w-64 rounded-(--radius-card) border border-border bg-background p-4 shadow-(--shadow-card)">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-primary-500 text-sm font-medium text-text-on-brand">
          LU
        </div>
        <div className="leading-tight">
          <p className="m-0 text-sm font-medium text-text-primary">Lumina</p>
          <p className="m-0 text-xs text-text-secondary">@lumina</p>
        </div>
      </div>
      <p className="mt-3 mb-0 text-xs text-text-secondary">
        Accessible React components you copy into your project.
      </p>
    </div>
  );
}

export function ChartCatalogPreview() {
  return (
    <svg viewBox="0 0 240 120" className="w-64" fill="none" role="img" aria-label="Area chart">
      <defs>
        <linearGradient id="catalog-chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-primary-500)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-primary-500)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 90 L40 70 L80 78 L120 40 L160 52 L200 24 L240 34 L240 120 L0 120 Z"
        fill="url(#catalog-chart-fill)"
      />
      <path
        d="M0 90 L40 70 L80 78 L120 40 L160 52 L200 24 L240 34"
        stroke="var(--color-primary-500)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CarouselCatalogPreview() {
  return (
    <div className="w-64">
      <div className="flex h-28 items-center justify-center rounded-(--radius-card) border border-border bg-background text-2xl font-medium text-text-secondary">
        1
      </div>
      <div className="mt-3 flex items-center justify-center gap-1.5">
        <span className="size-1.5 rounded-full bg-primary-500" />
        <span className="size-1.5 rounded-full bg-border" />
        <span className="size-1.5 rounded-full bg-border" />
      </div>
    </div>
  );
}
