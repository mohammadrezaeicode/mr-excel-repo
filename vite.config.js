// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
const path = require("path");
import dts from "vite-plugin-dts";
const fs = require("fs");
fs.existsSync(path.join(__dirname, "dist")) &&
  fs.rmdirSync(path.join(__dirname, "dist"), {
    recursive: true,
  });
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "ExcelTable",
      // the proper extensions will be added
      fileName: "excel-table",
    },

    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["JSzip"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          JSzip: "JSzip",
        },
      },
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
});
