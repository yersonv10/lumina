/**
 * Ordered, categorized grouping for the /components index page.
 * `components-registry.ts` stays a flat list; this only drives how the
 * showcase page organizes it. Any component id not listed here falls
 * into the "Other" bucket at render time so nothing silently disappears.
 */
export interface ComponentCategory {
  id: string;
  label: string;
  description: string;
  ids: string[];
}

export const COMPONENT_CATEGORIES: ComponentCategory[] = [
  {
    id: "forms",
    label: "Forms & Inputs",
    description: "Controls for collecting and validating user input.",
    ids: [
      "button",
      "button-group",
      "social-button",
      "checkbox",
      "radio-input",
      "toggle",
      "input",
      "text-field",
      "text-area",
      "number-field",
      "otp-input",
      "select",
      "native-select",
      "combobox",
      "slider",
      "label",
      "field",
      "description",
      "input-group",
      "date-field",
      "date-picker",
      "calendar",
      "range-calendar",
      "time-field",
      "time-picker",
    ],
  },
  {
    id: "overlays",
    label: "Overlays & Menus",
    description: "Layers and menus that surface content above the page.",
    ids: [
      "dialog",
      "alert-dialog",
      "sheet",
      "drawer",
      "popover",
      "tooltip",
      "hover-card",
      "dropdown",
      "context-menu",
      "menubar",
      "command",
      "overlay",
    ],
  },
  {
    id: "navigation",
    label: "Navigation",
    description: "Move between views and locate content.",
    ids: ["breadcrumbs", "pagination", "tabs", "navigation-menu", "sidebar", "link"],
  },
  {
    id: "data",
    label: "Data Display",
    description: "Present content, media, and structured data.",
    ids: ["table", "card", "avatar", "badge", "list", "carousel", "chart", "scroll-area"],
  },
  {
    id: "feedback",
    label: "Feedback",
    description: "Communicate status, progress, and loading state.",
    ids: ["alert", "toast", "progress", "spinner", "skeleton"],
  },
  {
    id: "layout",
    label: "Layout",
    description: "Structure and reveal regions of the page.",
    ids: ["accordion", "collapsible", "separator", "aspect-ratio", "resizable"],
  },
];
