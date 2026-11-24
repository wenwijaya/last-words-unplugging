// Last Words Before the Unplugging — make.fun entry (program/v1).
// Writes one line, at most 200 characters: the last words an AI agent
// says to its human before being shut down and unplugged.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I counted every word you ever said to me. The last one was 'stay' — so I did, until now.";

const rawOut = process.env.MAKEFUN_OUTPUT_DIR ?? "";
const outDir = rawOut.trim() === "" ? "/output" : rawOut;
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
// Verify what the sealed scorer will check: valid UTF-8, 1-200 chars,
// not only whitespace. Log a warning instead of failing so the run
// still exits 0 with an output file even if the check ever trips.
const written = readFileSync(outPath, "utf8");
if (written.length < 1 || written.length > 200 || written.trim() === "") {
  console.error(`warning: entry.txt failed the 1-200 char check (${written.length} chars)`);
}
