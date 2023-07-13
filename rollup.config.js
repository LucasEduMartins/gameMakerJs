import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";
import css from "rollup-plugin-import-css";

export default [
  // browser-friendly UMD build
  {
    input: "src/index.ts",
    output: {
      name: "bundle",
      file: "dist/bundle-umd.js",
      format: "umd",
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      typescript(), // so Rollup can convert TypeScript to JavaScript
      css(),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "src/index.ts",
    plugins: [
      typescript(), // so Rollup can convert TypeScript to JavaScript
      css(),
    ],
    output: [
      { file: "dist/bundle-cjs.js", format: "cjs" },
      { file: "dist/bundle-es.js", format: "es" },
    ],
  },
];
