import { createRequire } from "module";

const require = createRequire(import.meta.url);
const nextPlugin = require("@next/eslint-plugin-next");

export default [
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      "@next/next/no-html-link-for-pages": "error",
    },
  },
];
