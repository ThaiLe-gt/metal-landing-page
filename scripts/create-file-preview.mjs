import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

let html = readFileSync("out/index.html", "utf8");
html = html.replace(/<link\b[^>]*href="(\/_next\/[^"\s]+\.css)"[^>]*>/g, (_, file) => {
  const css = readFileSync(path.join("out", file), "utf8").replaceAll("/fonts/", "./fonts/");
  return `<style>${css}</style>`;
});
for (const asset of ["/_next/", "/industrial-hero.webp", "/favicon.svg"]) {
  html = html.replaceAll(asset, `.${asset}`);
}
writeFileSync("out/preview.html", html);
console.log("Open out/preview.html directly in your browser.");
