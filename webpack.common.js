const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    entry: ["./src/app.ts"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js", // Use [name] and [contenthash] placeholders
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    }
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/i,
                use: "url-loader?limit=1024&name=assets/fonts/[name].[ext]",
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    "file-loader?name=assets/images/[name].[ext]",
                    "image-webpack-loader?bypassOnDebug",
                ],
            },
            {
                test: /font-awesome\.config\.js/,
                use: [
                    { loader: "style-loader" },
                    { loader: "font-awesome-loader" },
                ],
            },
            {
                rules: [
                    {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                    },
                ],
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'], 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
    ],
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: "all",
            minSize: 0,
            maxSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        },
    },
}
