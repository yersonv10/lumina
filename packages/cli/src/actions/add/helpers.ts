import ora from "ora";
import fs from "node:fs/promises";
import path from "node:path";
import chalk from "chalk";
import { directoryExists, getDefaultTargetPath } from "../../utils/index.ts";
import { COMPONENT_REGISTRY_RAW_BASE_URL } from "../../constants/urls.ts";
import { logger } from "../../utils/logger.ts";

interface FileConfig {
  type: "core";
  path: string;
  targetPath?: string;
}

type InstallFilesParams = {
  files: FileConfig[];
};

export async function addFiles({ files }: InstallFilesParams) {
  const spinner = ora();

  spinner.start(`📦 Installing ${files.length} file(s)...`);

  // Resolve the `src/` layout once instead of once per file, then download
  // every file in parallel — the files are independent of each other.
  const cwd = process.cwd();
  const srcExists = await directoryExists(path.join(cwd, "src"));

  try {
    await Promise.all(files.map(file => addFile(file, { cwd, srcExists })));
  } catch (error) {
    spinner.fail("Failed to add one or more files");
    throw error;
  }

  spinner.succeed("All files installed successfully!");
}

type AddFileContext = {
  cwd: string;
  srcExists: boolean;
};

async function addFile(file: FileConfig, { cwd, srcExists }: AddFileContext) {
  const { type, path: sourcePath, targetPath } = file;

  const finalTargetPath = targetPath
    ? path.join(cwd, srcExists ? "src" : "", targetPath)
    : getDefaultTargetPath({
        type,
        sourcePath,
        srcExists
      });

  const downloadUrl = `${COMPONENT_REGISTRY_RAW_BASE_URL}${sourcePath}`;

  logger.log(
    `  ${chalk.blue("-")} ${path.basename(sourcePath)} → ${path.relative(
      cwd,
      finalTargetPath
    )}`
  );

  const content = await fetchFileContent(downloadUrl);

  await fs.mkdir(path.dirname(finalTargetPath), { recursive: true });

  await fs.writeFile(finalTargetPath, content, "utf-8");
}

async function fetchFileContent(url: string) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Lumina CLI"
    }
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${url}: ${response.status} ${response.statusText}`
    );
  }

  return response.text();
}
