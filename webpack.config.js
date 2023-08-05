const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const fs = require("fs");
fs.existsSync(path.join(__dirname, "dist2")) &&
  fs.rmdirSync(path.join(__dirname, "dist2"), {
    recursive: true,
  });

module.exports = {
  devtool: "eval-source-map",
  entry: "./src/index.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })], // Add tsconfig-paths-webpack-plugin
  },
  output: {
    filename: "excel-table.js",
    path: path.resolve(__dirname, "dist2"),
    // library: "ExcelTable",
    libraryTarget: "umd",
    // globalObject: "this",
  },
};
