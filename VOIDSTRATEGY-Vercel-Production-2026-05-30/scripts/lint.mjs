import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const required = [
  "package.json",
  "vercel.json",
  "src/content.mjs",
  "src/styles.css",
  "scripts/build.mjs",
  "src/assets/void-map.svg",
  "src/assets/strategy-placeholder.svg",
];

const errors = [];

for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) {
    errors.push(`Missing required file: ${file}`);
  }
}

const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
for (const script of ["build", "lint"]) {
  if (!packageJson.scripts?.[script]) {
    errors.push(`Missing npm script: ${script}`);
  }
}

const css = fs.readFileSync(path.join(root, "src/styles.css"), "utf8");
const buildScript = fs.readFileSync(path.join(root, "scripts/build.mjs"), "utf8");
for (const assetRef of ["/assets/void-map.svg", "/assets/strategy-placeholder.svg"]) {
  if (!css.includes(assetRef) && !buildScript.includes(assetRef)) {
    errors.push(`Project does not reference expected asset: ${assetRef}`);
  }
}

const content = fs.readFileSync(path.join(root, "src/content.mjs"), "utf8");
for (const token of ["VOIDSTRATEGY", "EL MUNDO ES UN TABLERO.", "Analizamos lo que otros ignoran."]) {
  if (!content.includes(token)) {
    errors.push(`Missing brand token: ${token}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Lint checks passed.");
