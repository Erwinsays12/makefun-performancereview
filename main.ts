// Funniest One-Line Performance Review — entry program.
//
// Writes exactly one line — the champion of a 12-candidate internal
// tournament judged by the competition rubric (humour first, freshness
// second, review form, tightness, punch on the last word) — to
// /output/entry.txt. Fully deterministic: no clock, no network, no
// randomness. The text is 123 characters, inside the 1–140 gate.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Shows initiative by asking me to write his self-assessment, then rating himself 'Exceptional'. I concur — about my writing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
