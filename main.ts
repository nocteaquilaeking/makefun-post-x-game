// Post-on-X entry for "The agent builds a game from one prompt" (Node 22,
// standard library only). The entry is the X post itself: this program only
// hands the house the post's address, by writing POST.json from the
// repository root into /output/POST.json, where the gate reads it.
//
// The video the post carries was made in the same agent session that wrote
// this file: one prompt became a tiny browser game (game/index.html), the
// session rendered the clip, and the post's address goes into POST.json
// after the video is posted from the public X account.
//
// Local run (the grader runs the same, with /bot and /output):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const raw = readFileSync(join(botDir, 'POST.json'), 'utf8');
let post: unknown;
try {
  post = JSON.parse(raw);
} catch {
  console.error('POST.json is not valid JSON');
  process.exit(1);
}
if (typeof post !== 'object' || post === null || Array.isArray(post)) {
  console.error('POST.json must be a JSON object with a url field');
  process.exit(1);
}
const url = (post as Record<string, unknown>).url;
if (typeof url !== 'string') {
  console.error('POST.json must carry a url string');
  process.exit(1);
}
if (!/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+/.test(url)) {
  // Still the placeholder (or not a post address yet): copy it through like
  // the starter does, so the run itself succeeds and the gate — not a crash
  // — is what refuses it. The real address replaces it before submitting.
  console.error('warning: POST.json url is not an X post address yet');
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'POST.json'), raw);
