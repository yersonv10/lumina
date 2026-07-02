import fs from "node:fs/promises";
import path from "node:path";
import { existsSync } from "node:fs";

type GetDefaultTargetPathParams = {
  type: string;
  sourcePath: string;
  srcExists?: boolean;
};

export function getDefaultTargetPath({
  type,
  sourcePath,
  srcExists
}: GetDefaultTargetPathParams) {
  const cwd = process.cwd();
  const filename = path.basename(sourcePath);

  const baseDir = srcExists ? "src" : "";

  return path.join(cwd, baseDir, "components", "lumina", type, filename);
}

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

export async function detectPackageManager(): Promise<PackageManager> {
  if (existsSync("pnpm-lock.yaml")) return "pnpm";
  if (existsSync("yarn.lock")) return "yarn";
  // Bun >=1.2 uses the text-based `bun.lock`; older versions use `bun.lockb`.
  if (existsSync("bun.lock") || existsSync("bun.lockb")) return "bun";
  return "npm";
}

export async function directoryExists(dirPath: string) {
  try {
    const stat = await fs.stat(dirPath);
    return stat.isDirectory();
  } catch {
    return false;
  }
}
