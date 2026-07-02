import { Children, isValidElement, type ReactNode } from "react";

export function Tabs({ items, children }: { items?: string[]; children: ReactNode }) {
  const kids = Children.toArray(children);
  return (
    <div className="rounded-(--radius-card) border border-border">
      <div className="flex border-b border-border">
        {kids.map((child, i) => {
          const label =
            (isValidElement(child) && (child.props as { value?: string }).value) ||
            items?.[i] ||
            `Tab ${i + 1}`;
          return (
            <label key={label} className="cursor-pointer border-r border-border px-4 py-2 text-sm text-text-secondary last:border-r-0">
              <input type="radio" name="lumina-tabs" defaultChecked={i === 0} className="peer sr-only" />
              <span className="peer-checked:text-text-primary">{label}</span>
            </label>
          );
        })}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export function Tab({ children }: { value?: string; children: ReactNode }) {
  return <div>{children}</div>;
}
