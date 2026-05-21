#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { cpSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const workspace = readFileSync(join(rootDir, "pnpm-workspace.yaml"), "utf8");
const talks = workspace
  .split("\n")
  .map((line) => line.match(/^\s*-\s*"([^"]+)"/)?.[1])
  .filter(Boolean)
  .filter((name) => statSync(join(rootDir, name), { throwIfNoEntry: false })?.isDirectory());

const distDir = join(rootDir, "dist");
rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });

const talkMeta = [];
for (const name of talks) {
  const talkDir = join(rootDir, name);
  const base = `/${name}/`;
  console.log(`\n=== Building ${name} (base=${base}) ===`);
  execFileSync("pnpm", ["exec", "lets-talk-about", "build", "--base", base], {
    cwd: talkDir,
    stdio: "inherit",
  });
  cpSync(join(talkDir, "dist"), join(distDir, name), { recursive: true });

  let title = name;
  try {
    const slides = readFileSync(join(talkDir, "slides.md"), "utf8");
    const fmMatch = slides.match(/^---\n([\s\S]*?)\n---/);
    if (fmMatch) {
      const titleMatch = fmMatch[1].match(/^title:\s*(.+)$/m);
      if (titleMatch) title = titleMatch[1].replace(/^["']|["']$/g, "").trim();
    }
  } catch {}
  talkMeta.push({ name, title, base });
}

const indexHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>lets-talk-about — Talks by Tamino Martinius</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: #0c0c0c; color: #ddd; font-family: ui-monospace, "Cascadia Code", "JetBrains Mono", Menlo, monospace; }
  body { min-height: 100dvh; display: flex; flex-direction: column; align-items: center; padding: 6rem 1.5rem 4rem; }
  header { max-width: 720px; margin-bottom: 3rem; }
  h1 { color: #6c6; font-size: clamp(1.5rem, 4vw, 2.25rem); margin: 0 0 0.5rem; letter-spacing: -0.02em; }
  p.lead { color: #888; margin: 0; line-height: 1.6; }
  ul { list-style: none; padding: 0; margin: 0; max-width: 720px; width: 100%; display: grid; gap: 0.5rem; }
  a.talk { display: flex; align-items: baseline; gap: 0.75rem; padding: 0.85rem 1rem; border: 1px solid #1f1f1f; border-radius: 6px; color: #ddd; text-decoration: none; transition: border-color 120ms, background 120ms; }
  a.talk:hover { border-color: #6c6; background: #131313; }
  a.talk .name { color: #6c6; font-weight: 600; }
  a.talk .title { color: #aaa; font-size: 0.92rem; }
  footer { margin-top: 4rem; color: #555; font-size: 0.8rem; }
  footer a { color: #777; }
</style>
</head>
<body>
<header>
  <h1>lets-talk-about</h1>
  <p class="lead">Presentations by Tamino Martinius, built with <a href="https://github.com/tamino-martinius/lets-talk-about" style="color:#6c6">lets-talk-about</a>.</p>
</header>
<ul>
${talkMeta.map((t) => `  <li><a class="talk" href="${t.base}"><span class="name">${t.name}</span><span class="title">${t.title === t.name ? "" : t.title}</span></a></li>`).join("\n")}
</ul>
<footer>
  <a href="https://github.com/tamino-martinius/talks">source on github</a>
</footer>
</body>
</html>
`;
writeFileSync(join(distDir, "index.html"), indexHtml);
writeFileSync(join(distDir, "CNAME"), readFileSync(join(rootDir, "CNAME"), "utf8"));

console.log(`\nBuilt ${talkMeta.length} talks → dist/`);
for (const t of talkMeta) console.log(`  ${t.base.padEnd(35)} ${t.title}`);
