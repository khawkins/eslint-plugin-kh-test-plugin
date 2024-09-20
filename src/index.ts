import { rules } from "./rules/index.js";

const { name, version } =
    // `import`ing here would bypass the TSConfig's `"rootDir": "src"`
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("../package.json") as typeof import("../package.json");

const plugin = {
    meta: { name, version },
    rules,
};
