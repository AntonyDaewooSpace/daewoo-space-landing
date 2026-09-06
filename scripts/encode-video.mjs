// One-off: compress media-src/hero-src.mp4 into web-ready hero.mp4 + hero.webm.
// The hero autoplays muted, so audio is dropped. Usage: node scripts/encode-video.mjs
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ffmpeg = require('@ffmpeg-installer/ffmpeg').path;

const SRC = 'media-src/hero-src.mp4';
if (!existsSync(SRC)) {
  console.error(`Missing ${SRC} — drop the original video there first.`);
  process.exit(1);
}

const run = (args) => execFileSync(ffmpeg, ['-y', '-hide_banner', '-loglevel', 'error', ...args], { stdio: 'inherit' });

console.log('→ hero.mp4 (1080p, H.264 CRF 23)');
run([
  '-i', SRC,
  '-c:v', 'libx264', '-profile:v', 'high', '-crf', '23', '-preset', 'slow',
  '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an',
  'public/video/hero.mp4',
]);

console.log('→ hero.webm (1080p, VP9 CRF 32)');
run([
  '-i', SRC,
  '-c:v', 'libvpx-vp9', '-crf', '32', '-b:v', '0', '-row-mt', '1', '-deadline', 'good', '-cpu-used', '3', '-an',
  'public/video/hero.webm',
]);

console.log('done');
