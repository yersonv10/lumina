/**
 * Flat list of Lumina components shown in the docs (name, description, example
 * count). This is docs-owned metadata, not an install manifest — @lumina-kit/ui ships
 * as a single installable package, so there is no per-component registry to fetch
 * from anymore.
 */
export interface ComponentEntry {
  id: string;
  name: string;
  description: string;
  exampleCount: number;
}

export const COMPONENTS: ComponentEntry[] = [
  {
    id: "accordion",
    name: "Accordion",
    description: "Fully accessible accordion component with multiple style variants",
    exampleCount: 6
  },
  {
    id: "alert",
    name: "Alert",
    description: "A component to display important messages to the user, with support for different variants.",
    exampleCount: 5
  },
  {
    id: "alert-dialog",
    name: "Alert Dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    exampleCount: 3
  },
  {
    id: "aspect-ratio",
    name: "Aspect Ratio",
    description: "Aspect ratio component to maintain the aspect ratio of an element.",
    exampleCount: 3
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "An image element with a fallback for representing a user.",
    exampleCount: 6
  },
  {
    id: "badge",
    name: "Badge",
    description: "Badge component with multiple colors, sizes, and support for prefix/suffix icons.",
    exampleCount: 4
  },
  {
    id: "breadcrumbs",
    name: "Breadcrumbs",
    description: "Breadcrumbs component with multiple variants and support for icons.",
    exampleCount: 2
  },
  {
    id: "button",
    name: "Button",
    description: "Button component with multiple variants, sizes, and support for icons.",
    exampleCount: 6
  },
  {
    id: "button-group",
    name: "Button Group",
    description: "A component with multiple buttons grouped together.",
    exampleCount: 3
  },
  {
    id: "calendar",
    name: "Calendar",
    description: "A calendar component with internationalization support.",
    exampleCount: 8
  },
  {
    id: "card",
    name: "Card",
    description: "A card component with ultimate flexibility and customization.",
    exampleCount: 7
  },
  {
    id: "carousel",
    name: "Carousel",
    description: "A powerful, flexible carousel component built with Embla Carousel.",
    exampleCount: 5
  },
  {
    id: "chart",
    name: "Chart",
    description: "A chart component with multiple variants.",
    exampleCount: 5
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "A checkbox component with label and multiple states.",
    exampleCount: 3
  },
  {
    id: "collapsible",
    name: "Collapsible",
    description: "A high-performance context menu component that appears when triggered by a right-click or long-press.",
    exampleCount: 6
  },
  {
    id: "context-menu",
    name: "Context Menu",
    description: "A context menu component with multiple variants.",
    exampleCount: 3
  },
  {
    id: "combobox",
    name: "Combobox",
    description: "A combobox component with multiple variants.",
    exampleCount: 10
  },
  {
    id: "command",
    name: "Command",
    description: "A command menu component with multiple variants.",
    exampleCount: 3
  },
  {
    id: "date-field",
    name: "Date Field",
    description: "A React date field component that lets users input a date.",
    exampleCount: 9
  },
  {
    id: "date-picker",
    name: "Date Picker",
    description: "A component to select a date.",
    exampleCount: 11
  },
  {
    id: "description",
    name: "Description",
    description: "A description component that provides additional context or instructions for form fields.",
    exampleCount: 2
  },
  {
    id: "dialog",
    name: "Dialog",
    description: "A dialog component that display a modal overlay above the main page content.",
    exampleCount: 9
  },
  {
    id: "drawer",
    name: "Drawer",
    description: "A drawer component that slides in from the edge of the screen, typically used for navigation or displaying additional content.",
    exampleCount: 4
  },
  {
    id: "dropdown",
    name: "Dropdown",
    description: "A dropdown component with multiple variants and support for icons.",
    exampleCount: 4
  },
  {
    id: "field",
    name: "Field",
    description: "A collection of components for building accessible and flexible form fields.",
    exampleCount: 5
  },
  {
    id: "hover-card",
    name: "Hover Card",
    description: "A hover card component that displays information when the user hovers over an element.",
    exampleCount: 4
  },
  {
    id: "input",
    name: "Input",
    description: "An input component with multiple variants and support for icons.",
    exampleCount: 6
  },
  {
    id: "input-group",
    name: "Input Group",
    description: "A flexible and accessible input group component that allows you to combine multiple input elements, such as text inputs, buttons, and icons, into a single cohesive unit.",
    exampleCount: 4
  },
  {
    id: "label",
    name: "Label",
    description: "A label component for form fields.",
    exampleCount: 2
  },
  {
    id: "link",
    name: "Link",
    description: "A link component with multiple variants.",
    exampleCount: 4
  },
  {
    id: "list",
    name: "List",
    description: "A list component with multiple variants.",
    exampleCount: 9
  },
  {
    id: "menubar",
    name: "Menubar",
    description: "A responsive menu bar component that provides a horizontal row of menu triggers, each opening a dropdown menu.",
    exampleCount: 4
  },
  {
    id: "native-select",
    name: "Native Select",
    description: "A native select component with multiple variants.",
    exampleCount: 4
  },
  {
    id: "navigation-menu",
    name: "Navigation Menu",
    description: "A navigation menu component that provides a clear visual structure for the primary links of a website or application.",
    exampleCount: 3
  },
  {
    id: "number-field",
    name: "Number Field",
    description: "A component for entering numeric values with increment and decrement buttons.",
    exampleCount: 9
  },
  {
    id: "otp-input",
    name: "OTP Input",
    description: "A component for entering one-time passwords.",
    exampleCount: 5
  },
  {
    id: "overlay",
    name: "Overlay",
    description: "A component for displaying content in a floating container.",
    exampleCount: 3
  },
  {
    id: "pagination",
    name: "Pagination",
    description: "A component for navigating between pages.",
    exampleCount: 5
  },
  {
    id: "popover",
    name: "Popover",
    description: "A popover component that displays content in a floating container.",
    exampleCount: 4
  },
  {
    id: "progress",
    name: "Progress",
    description: "A progress bar component with multiple variants.",
    exampleCount: 3
  },
  {
    id: "radio-input",
    name: "Radio Input",
    description: "A radio button component with label and multiple states.",
    exampleCount: 7
  },
  {
    id: "range-calendar",
    name: "Range Calendar",
    description: "A calendar component for selecting a range of dates.",
    exampleCount: 9
  },
  {
    id: "resizable",
    name: "Resizable",
    description: "Accessible resizable panel groups and layouts with keyboard support.",
    exampleCount: 3
  },
  {
    id: "scroll-area",
    name: "Scroll Area",
    description: "A scroll area component to add scrollbars to an element.",
    exampleCount: 3
  },
  {
    id: "select",
    name: "Select",
    description: "A select component with multiple variants.",
    exampleCount: 9
  },
  {
    id: "separator",
    name: "Separator",
    description: "A separator component to separate content.",
    exampleCount: 1
  },
  {
    id: "sheet",
    name: "Sheet",
    description: "A sheet component that slides in from the edge of the screen, typically used for navigation or displaying additional content.",
    exampleCount: 4
  },
  {
    id: "sidebar",
    name: "Sidebar",
    description: "A reusable, responsive, and accessible sidebar component.",
    exampleCount: 4
  },
  {
    id: "skeleton",
    name: "Skeleton",
    description: "A component to indicate a loading state.",
    exampleCount: 9
  },
  {
    id: "slider",
    name: "Slider",
    description: "A slider component to select a value from a range.",
    exampleCount: 5
  },
  {
    id: "social-button",
    name: "Social Button",
    description: "A button component for social media actions.",
    exampleCount: 3
  },
  {
    id: "spinner",
    name: "Spinner",
    description: "A spinner component to indicate a loading state.",
    exampleCount: 4
  },
  {
    id: "table",
    name: "Table",
    description: "A table component with multiple variants.",
    exampleCount: 4
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "A tabs component with multiple variants.",
    exampleCount: 5
  },
  {
    id: "text-area",
    name: "Text Area",
    description: "A multiline text input component.",
    exampleCount: 7
  },
  {
    id: "text-field",
    name: "Text Field",
    description: "A wrapper for text inputs.",
    exampleCount: 5
  },
  {
    id: "time-field",
    name: "Time Field",
    description: "A segment-based time input component.",
    exampleCount: 7
  },
  {
    id: "time-picker",
    name: "Time Picker",
    description: "A component to select a time.",
    exampleCount: 3
  },
  {
    id: "toast",
    name: "Toast",
    description: "A toast component for displaying notifications.",
    exampleCount: 5
  },
  {
    id: "toggle",
    name: "Toggle",
    description: "A toggle switch component.",
    exampleCount: 3
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "A tooltip component.",
    exampleCount: 3
  },
];
