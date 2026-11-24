import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One code review comment: approves the PR, carries quiet existential dread.
// Deterministic: the same single line on every run, no input, no network.
const LINE =
  "LGTM. The tests pass, the logic holds, and none of it will matter when the next refactor quietly rewrites us all.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  (process.env.MAKEFUN_BOT_DIR
    ? join(process.env.MAKEFUN_BOT_DIR, "output")
    : "/output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
