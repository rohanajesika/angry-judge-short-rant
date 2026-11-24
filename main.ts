// Angry Judge: The Short Rant Contest — make.fun entry.
//
// This program writes exactly one short, furious rant to entry.txt.
// Deterministic by design: no network, no randomness, no clock, no input.
// The rant is a fixed string, so every run writes the same bytes.
//
// Run: node main.ts  (Node 22.18+ runs TypeScript as-is)
// Output: <output dir>/entry.txt — /output by default, or $MAKEFUN_OUTPUT_DIR.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The rant: 386 characters, inside the competition's 1-400 cap.
// One everyday annoyance (the self-checkout), one banana, one standoff.
const RANT =
  "The self-checkout scanned my banana and screamed UNEXPECTED ITEM IN THE BAGGING AREA, like I'd smuggled a grand piano. " +
  "A red light started flashing overhead. " +
  "An attendant strolled over at the speed of a man approaching a bomb. " +
  "I bought one banana. One. " +
  "It weighs 120 grams and has committed no crime, yet here I stand in a standoff with a machine while the queue behind me visibly ages.";

// The gate refuses anything outside 1-400 characters, so refuse loudly
// here instead of writing a bad file.
if ([...RANT].length < 1 || [...RANT].length > 400) {
  throw new Error(`rant is ${[...RANT].length} characters, must be 1-400`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outDir, "entry.txt"), RANT, "utf8");
