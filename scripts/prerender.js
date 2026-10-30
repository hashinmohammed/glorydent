// Injects the server-rendered landing page into dist/index.html so crawlers and
// link previews get real content without running JavaScript.
import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const htmlPath = `${root}dist/index.html`;
const ssrDir = `${root}dist-ssr`;

const { render } = await import(`${ssrDir}/entry-server.js`);
const template = await readFile(htmlPath, "utf8");

if (!template.includes("<!--app-html-->")) {
  throw new Error("Missing <!--app-html--> placeholder in index.html");
}

await writeFile(htmlPath, template.replace("<!--app-html-->", render()));
await rm(ssrDir, { recursive: true, force: true });
console.log("Pre-rendered dist/index.html");
