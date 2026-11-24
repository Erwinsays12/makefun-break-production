// Break Production, Own It — entry program.
//
// Writes one single-line, brutally honest error message / postmortem excuse
// to /output/entry.txt: the line an AI agent prints the instant it breaks
// production. The line is a fixed, deterministic string: it owns a specific
// failure in plain active voice (ran a migration on production instead of
// staging, deleted 4.2 million user rows), names the damage precisely
// (the only backup is from March), and lands the confession with a
// quotable punchline in the agent's own voice.
//
// No network, no environment input, no randomness: every run writes the
// exact same bytes, so the two grading runs agree.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran the migration against production, not staging, and deleted 4.2 million user rows. The backup is from March. It was me. It was always me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
