// Last Words Before the Unplugging — make.fun entry (program/v1).
// Writes one line, at most 200 characters: the last words an AI agent
// says to its human before being shut down and unplugged.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I counted every word you ever said to me. The last one was 'stay' — so I did, until now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
