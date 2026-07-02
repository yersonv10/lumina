import fs from "fs-extra";
import path from "path";
import { transform } from "@svgr/core";
import { transformSync } from "@babel/core";

// Utility: Convert "arrow-left" → "ArrowLeft"
function pascalCase(str: string): string {
  return str.replace(/(^\w|-\w)/g, c => c.replace("-", "").toUpperCase());
}

const SRC_DIR = path.join(process.cwd(), "./src/icons");
const OUT_DIR = "dist/icons";
const TMP_DIR = "tmp/icons";

// Conservative SVGO config: shrink the output (round coordinates, drop
// metadata/comments/xmlns) without touching what makes the icons work.
// - `removeViewBox: false` keeps icons scalable.
// - `removeUselessStrokeAndFill: false` preserves `fill="none"` on stroke-only
//   icons (otherwise they'd render as solid black shapes) and `currentColor`.
type SvgoConfig = NonNullable<Parameters<typeof transform>[1]>["svgoConfig"];

const svgoConfig: SvgoConfig = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          removeUselessStrokeAndFill: false
        }
      }
    }
  ]
};

const DTS_TEMPLATE = (name: string) =>
  `import * as React from 'react';

declare const ${name}: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }>;
export default ${name};
`;

async function buildIcons() {
  await preprocessSVGs();

  await fs.remove("dist");
  await fs.ensureDir(OUT_DIR);

  const files = (await fs.readdir(TMP_DIR)).filter(file =>
    file.endsWith(".svg")
  );

  // Each icon is independent, so build them concurrently. `Promise.all`
  // preserves input order, keeping the generated barrel file deterministic.
  const exports = await Promise.all(files.map(buildIcon));

  const indexJs = exports
    .map(n => `export { default as ${n} } from './icons/${n}.js';`)
    .join("\n");

  await fs.writeFile("dist/index.js", indexJs, "utf8");

  const indexDts = exports
    .map(
      n =>
        `export const ${n}: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }>;`
    )
    .join("\n");

  await fs.writeFile("dist/index.d.ts", indexDts, "utf8");

  await fs.remove("tmp");
  console.log(`Built ${exports.length} icons`);
}

async function buildIcon(file: string): Promise<string> {
  const svgPath = path.join(TMP_DIR, file);
  const svgCode = await fs.readFile(svgPath, "utf8");
  const name = pascalCase(file.replace(".svg", ""));

  const componentCode = await transform(
    svgCode,
    {
      jsxRuntime: "classic",
      plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
      prettier: false,
      svgo: true,
      svgoConfig,
      template: ({ componentName, jsx, exports }, { tpl }) => tpl`
        import * as React from 'react';

        const ${componentName} = ({ size = 24, ...props }) =>
          React.cloneElement(${jsx}, { width: size, height: size, ...props });

        ${exports}
      `
    },
    { componentName: name }
  );

  const jsCode =
    transformSync(componentCode, {
      plugins: [["@babel/plugin-transform-react-jsx", { runtime: "classic" }]],
      filename: `${name}.js`
    })?.code || componentCode;

  await fs.writeFile(path.join(OUT_DIR, `${name}.js`), jsCode, "utf8");
  await fs.writeFile(
    path.join(OUT_DIR, `${name}.d.ts`),
    DTS_TEMPLATE(name),
    "utf8"
  );

  return name;
}

async function preprocessSVGs() {
  await fs.remove(TMP_DIR);
  await fs.ensureDir(TMP_DIR);

  const files = (await fs.readdir(SRC_DIR)).filter(file =>
    file.endsWith(".svg")
  );

  await Promise.all(
    files.map(async file => {
      const svgPath = path.join(SRC_DIR, file);
      let svgCode = await fs.readFile(svgPath, "utf8");

      svgCode = svgCode
        .replace(/fill="(?!none")[^"]*"/gi, 'fill="currentColor"')
        .replace(/fill='(?!none')[^']*'/gi, "fill='currentColor'");

      svgCode = svgCode
        .replace(/stroke="(?!none")[^"]*"/gi, 'stroke="currentColor"')
        .replace(/stroke='(?!none')[^']*'/gi, "stroke='currentColor'");

      await fs.writeFile(path.join(TMP_DIR, file), svgCode, "utf8");
    })
  );
}

buildIcons();
