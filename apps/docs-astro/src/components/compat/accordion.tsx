import type { ReactNode } from "react";

export function Accordions({ children }: { children: ReactNode; defaultValue?: string }) {
  return (
    <div className="divide-y divide-border rounded-(--radius-card) border border-border">
      {children}
    </div>
  );
}

export function Accordion({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details open className="group p-4">
      <summary className="cursor-pointer font-medium text-text-primary marker:content-none">
        {title}
      </summary>
      <div className="prose-sm mt-3 text-text-secondary">{children}</div>
    </details>
  );
}
