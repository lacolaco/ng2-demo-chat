const webpack = require("webpack");

module.exports = {
    entry: "./src/main.ts",
    output: {
        filename: "./dist/main.bundle.js",
    },
    devtool: [],
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            test: /main\.bundle\.js$/,
            compress: {
                warnings: false,
            },
            mangle: false,
        }),
    ],
    resolve: {
        extensions: ["", ".ts", ".js", ".html"]
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader" },
            { test: /\.html$/, loader: "html-loader" },
        ]
    },
    htmlLoader: {
        minimize: false,
    },
    devServer: {
        compress: true
    }
}