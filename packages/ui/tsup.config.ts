import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  target: "esnext",
  outDir: "dist",
  treeshake: true,
  external: ["react", "react-dom"],
  onSuccess: async () => {
    const fs = await import("fs/promises");

    await fs.copyFile("themes/default.css", "dist/theme.css");
    await fs.copyFile("themes/dark.css", "dist/theme-dark.css");
    console.log("✓ Themes copied to dist/");
  }
});
