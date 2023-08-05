const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

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
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist2"),
    // library: "ExcelTable",
    libraryTarget: "umd",
    // globalObject: "this",
  },
};
