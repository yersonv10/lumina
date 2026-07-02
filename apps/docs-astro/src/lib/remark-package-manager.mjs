import { visit } from "unist-util-visit";

/**
 * Fenced code blocks tagged ```npm are authored as a single npm command.
 * This swaps them for a <PackageManagerTabs> JSX node so the docs render
 * npm/pnpm/yarn/bun equivalents instead of a plain, npm-only code block.
 * Runs on the mdast tree (remark), before Shiki/Prism ever sees the node,
 * since MDX resolves unimported capitalized JSX names via the `components`
 * prop passed to <Content components={{ PackageManagerTabs }} />.
 */
export function remarkPackageManagerCommand() {
  return (tree) => {
    visit(tree, "code", (node, index, parent) => {
      if (node.lang !== "npm" || !parent || index === undefined) return;

      parent.children[index] = {
        type: "mdxJsxFlowElement",
        name: "PackageManagerTabs",
        attributes: [{ type: "mdxJsxAttribute", name: "command", value: node.value }],
        children: [],
      };
    });
  };
}
