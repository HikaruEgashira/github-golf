import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const workflowsDir = join(process.cwd(), ".github", "workflows");

const minimumMajor = {
  "actions/deploy-pages": 5,
};

let failed = false;

for (const file of readdirSync(workflowsDir)) {
  if (!file.endsWith(".yml") && !file.endsWith(".yaml")) continue;

  const path = join(workflowsDir, file);
  const lines = readFileSync(path, "utf8").split("\n");

  lines.forEach((line, index) => {
    const match = line.match(/^\s*(?:-\s*)?uses:\s*([^\s#]+)/);
    if (!match) return;

    const ref = match[1];
    const at = ref.lastIndexOf("@");
    if (at === -1) return;

    const action = ref.slice(0, at);
    const version = ref.slice(at + 1);
    const required = minimumMajor[action];
    if (required === undefined) return;

    const major = Number.parseInt(version.replace(/^v/, ""), 10);
    if (Number.isNaN(major) || major < required) {
      failed = true;
      console.error(
        `${file}:${index + 1} ${action}@${version} targets Node.js 20; ` +
          `use @v${required} or newer for Node.js 24 support.`,
      );
    }
  });
}

if (failed) {
  process.exit(1);
}

console.log("All GitHub Actions use Node.js 24-compatible versions.");
