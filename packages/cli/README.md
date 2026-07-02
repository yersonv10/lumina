# Lumina CLI

The Lumina CLI is a command-line tool that helps you manage Lumina components in your React projects.

## Commands

### `init`

The `init` command initializes Lumina in your project.

```bash
npx @lumina/cli init
```

This will prompt you to:

- Select a theme for your components.
- Configure an import alias for your project.

The `init` command will create the following files:

- `lumina.config.json`: Configuration file for the Lumina CLI.
- `lumina.css`: The base styles for Lumina components.
- A `cn` utility file for merging Tailwind CSS classes.

It will also install the required dependencies (`clsx`, `@tailwindcss/forms`, and `tailwind-merge`).

### `add`

The `add` command adds Lumina components to your project. It copies the component files to your project's `components/lumina/core` directory and adds the required dependencies.

#### Usage

To add one or more components to your project, run the `add` command followed by the component IDs. You can find the component IDs in the [Lumina documentation](https://lumina.com/docs).

```bash
npx @lumina/cli add <component-id-1> <component-id-2> ...
```

For example, to add the `button` and `dialog` components, run the following command:

```bash
npx @lumina/cli add button dialog
```

This will create the following files in your project:

```
components/
└── lumina/
    ├── button.tsx
    └── dialog.tsx
```

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.
