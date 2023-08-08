const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

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
    library: "ExcelTable",
    libraryTarget: "umd",
    // globalObject: "this",
  },
  plugins: [
    new CompressionWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "bundle-report.html",
    }),
  ],
  optimization: {
    // splitChunks: {
    //   chunks: "all",
    // },

    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 5, // Set the ECMAScript version (5, 6, 7, etc.)
          mangle: true, // Minify and obfuscate variable and function names
          compress: {
            warnings: false, // Disable warnings (set to true to show warnings)
            drop_console: true, // Remove console.* statements
            dead_code: true, // Remove unreachable code
            unused: true, // Remove unused variables and functions
          },
          output: {
            comments: false, // Remove comments
          },
        },
        extractComments: false, // Don't extract comments to separate files
      }),
    ],
  },
};
