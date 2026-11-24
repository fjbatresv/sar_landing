import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const roots = ['src', 'public', 'dist'];
const forbidden = [
  /mcdgt/i, /back0ffice/i, /sarcbo/i, /sarbo/i, /cognits/i, /mcdonald/i, /arcos/i,
  /arn:aws/i, /amazonaws\.com/i,
  /\b\d{12}\b/,
  /\b(?:10\.(?:\d{1,3}\.){2}\d{1,3}|192\.168\.(?:\d{1,3}\.){1}\d{1,3}|172\.(?:1[6-9]|2\d|3[01])\.(?:\d{1,3}\.)\d{1,3})\b/,
];
const violations = [];

async function scan(file) {
  const info = await stat(file);
  if (info.isDirectory()) {
    for (const entry of await readdir(file)) await scan(path.join(file, entry));
    return;
  }
  const data = await readFile(file);
  const text = data.toString('utf8');
  if (!text.includes('\uFFFD')) {
    for (const pattern of forbidden) {
      pattern.lastIndex = 0;
      if (pattern.test(text)) violations.push(`${file}: ${pattern}`);
    }
    for (const email of text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? []) {
      if (email.toLowerCase() !== 'fjbatresv@gmail.com') violations.push(`${file}: unapproved email`);
    }
  }
  if (/\.(?:png|jpe?g|webp)$/i.test(file)) {
    const image = await sharp(data).metadata();
    if (image.exif || image.iptc || image.xmp) violations.push(`${file}: embedded image metadata`);
  }
}

for (const root of roots) {
  try { await scan(root); } catch (error) { if (error.code !== 'ENOENT') throw error; }
}
if (violations.length) {
  console.error(`Sanitization failed:\n${violations.join('\n')}`);
  process.exitCode = 1;
} else console.log('Sanitization passed.');
