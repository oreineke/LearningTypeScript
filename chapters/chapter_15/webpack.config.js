const { CheckerPlugin } = require("awesome-typescript-loader");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require ("path");

const corePlugins = [
    new CheckerPlugin(),
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
    }),
    new ExtractTextPlugin({
        filename: "main.css",
        allChunks: true
    }),
    new CopyWebpackPlugin([
        { from: "./web/frontend/index.html", to: "index.html" }
    ]),
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: (module) => module.context && /node_modules/.test(module.context)
    })
];

const devPlugins = [];

const prodPlugins = [
    new webpack.optimize.UglifyJsPlugin({ output: { comments: false } })
];

const isProduction = process.env.NODE_ENV === "production";
const plugins = isProduction ? corePlugins.concat(prodPlugins) : corePlugins.concat(devPlugins);

module.exports = {
    entry: [
        "zone.js/dist/zone",
        "./web/frontend/main.ts"
    ],
    devServer: {
        inline: true
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[name]-chunk.js",
        publicPath: "/public/",
        path: path.resolve(__dirname, "public")
    },
    devtool: isProduction ? "source-map" : "eval-source-map",
    resolve: {
        extensions: [".webpack.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [/node_modules/]
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
                exclude: [/node_modules/]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "resolve-url-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: plugins
};
