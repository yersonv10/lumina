import { Command } from "commander";
import { handleInitCommand } from "../actions/init/index.ts";

export const initCommand = new Command()
  .name("init")
  .description("Initialize Lumina in your project")
  .action(handleInitCommand);
