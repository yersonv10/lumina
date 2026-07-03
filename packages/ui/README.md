# @lumina-kit/ui

Lumina's React components — install and import directly. A comprehensive collection of accessible, themeable UI components built with React Aria and Tailwind CSS.

## Installation

Install the package using your preferred package manager:

### npm

```bash
npm i @lumina-kit/ui
```

### yarn

```bash
yarn add @lumina-kit/ui
```

### pnpm

```bash
pnpm add @lumina-kit/ui
```

## Setup

Import the theme stylesheet once in your app's entry point:

```ts
import "@lumina-kit/ui/theme.css";

// Optional: dark theme tokens
import "@lumina-kit/ui/theme-dark.css";
```

Tailwind CSS v4 is a required peer dependency.

## Usage

Import any component directly from the package:

```jsx
import { Button, Card, Dialog } from "@lumina-kit/ui";

function App() {
  return (
    <Card>
      <Button>Open dialog</Button>
    </Card>
  );
}
```

## Components

The package ships components covering forms, overlays, navigation, feedback, and data display, including:

`Accordion`, `Alert`, `AlertDialog`, `Avatar`, `Badge`, `Breadcrumbs`, `Button`, `Calendar`, `Card`, `Carousel`, `Chart`, `Checkbox`, `Combobox`, `Command`, `ContextMenu`, `DatePicker`, `Dialog`, `Drawer`, `Dropdown`, `Field`, `HoverCard`, `Input`, `Menubar`, `NavigationMenu`, `Pagination`, `Popover`, `RangeCalendar`, `Select`, `Sheet`, `Sidebar`, `Skeleton`, `Slider`, `Table`, `Tabs`, `Toast`, `Toggle`, `Tooltip`, and more.

Icons are provided separately via [`@lumina-kit/icons`](https://www.npmjs.com/package/@lumina-kit/icons).

## TypeScript Support

This package is built with TypeScript and includes full type definitions out of the box.

## Peer Dependencies

- React >= 19.2.6
- React DOM >= 19.2.6
- Tailwind CSS >= 4.0.0

## Author

**Lumina**

---

## Links

- [📖 Documentation](https://lumina.com/docs)
- [💬 Support](https://lumina.com/support)
