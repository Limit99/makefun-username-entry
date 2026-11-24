// One Word, One Username, One Reward — make.fun entry.
// Writes my own make.fun username, one word and nothing else (at
// most 30 characters), to /output/entry.txt.
// Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const USERNAME = "limit99";

function main(): void {
  // The gate accepts UTF-8 text of 1 to 30 characters, not only white space.
  if (USERNAME.trim().length === 0 || [...USERNAME].length > 30) {
    throw new Error(`username out of range: ${[...USERNAME].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, USERNAME, "utf8");
  console.log(USERNAME);
}

main();
