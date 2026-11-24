// Loading Screen Gold: A Tip in 200 Characters — entry program (Node 22, stdlib only).
// Writes one original loading-screen tip for stressed developers and AI coding
// agents to /output/entry.txt.
// The tip: you wrote the prompt, the agent wrote the code, and neither of you
// read the requirements — a three-beat turn that lands on both audiences at once.
// Deterministic: no network, no randomness, no input — every run writes
// byte-identical output. The 1-200 character gate below is a self-check: it
// throws before writing anything if the tip ever drifts out of range.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TIP =
  'Tip: you wrote the prompt. The agent wrote the code. Neither of you read the requirements.';

// Writes exactly the tip, no trailing newline: the gate counts characters
// (1-200), so the file is 90 characters / 90 bytes, byte-identical every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (TIP.length < 1 || TIP.length > 200 || !TIP.trim()) {
  throw new Error(`tip must be 1-200 non-blank characters, got ${TIP.length}`);
}
writeFileSync(join(outDir, 'entry.txt'), TIP, 'utf8');
