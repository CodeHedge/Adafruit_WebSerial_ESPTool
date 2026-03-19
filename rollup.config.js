import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

const config = {
  input: "dist/index.js",
  output: {
    file: "dist/web/index.js",
    format: "module",
    inlineDynamicImports: true,
  },
  // preserveEntrySignatures: false,
  plugins: [nodeResolve(), json()],
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    terser({
      ecma: 2019,
      toplevel: true,
      output: {
        comments: false,
      },
    })
  );
}

export default config;
