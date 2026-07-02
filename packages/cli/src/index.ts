#!/usr/bin/env node

import { Command } from "commander";
import { createRequire } from "node:module";
import { initCommand } from "./commands/init.ts";
import { addCommand } from "./commands/add.ts";

// Read the real version from package.json (relative to the built dist/index.js)
// so `lumina --version` always matches the published package.
const { version } = createRequire(import.meta.url)("../package.json") as {
  version: string;
};

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const program = new Command()
    .name("lumina")
    .description("A CLI tool for managing Lumina components")
    .version(version);

  program.addCommand(initCommand).addCommand(addCommand);

  program.parse();
}

main();
