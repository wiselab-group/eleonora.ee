// Recompresses the statically prerendered opengraph-image PNGs.
// next/og (Satori) always emits uncompressed PNG (~750KB), which is slow
// for Threads/Telegram/etc. to fetch when generating a link preview.
// sharp re-encodes to a compressed PNG (same lossless format required by
// the .meta content-type) at a fraction of the size.

import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const APP_DIR = join(process.cwd(), ".next/server/app");

async function findOgImageBodies(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await findOgImageBodies(fullPath)));
    } else if (entry.name === "opengraph-image.body") {
      results.push(fullPath);
    }
  }
  return results;
}

async function main() {
  const targets = await findOgImageBodies(APP_DIR);
  if (targets.length === 0) {
    console.warn("No opengraph-image.body files found; skipping.");
    return;
  }

  for (const filePath of targets) {
    const before = (await stat(filePath)).size;
    const optimized = await sharp(filePath)
      .png({ compressionLevel: 9, palette: true })
      .toBuffer();
    if (optimized.length < before) {
      await sharp(optimized).toFile(filePath + ".tmp");
      await import("node:fs/promises").then(({ rename }) =>
        rename(filePath + ".tmp", filePath),
      );
    }
    const after = (await stat(filePath)).size;
    console.log(
      `${filePath.replace(process.cwd() + "/", "")}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`,
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
