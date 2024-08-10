import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ExcelTable",
      fileName: "excel-table",
      formats: ["umd", "cjs", "es", "system", "iife", "amd"],
    },

    rollupOptions: {
      external: ["JSzip"],
      output: {
        globals: {
          jszip: "JSzip",
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
