const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
    mode: 'development',

    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.scss$/, use: [ { loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader' ] },
            { test: /\.handlebars$/, loader: 'handlebars-loader' }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.handlebars',
            inject: false,
            minify: {
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true,
                processConditionalComments: true,
                quoteCharacter: '"',
                removeAttributeQuotes: false,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                sortAttributes: true,
                sortClassName: true
            }
        })
    ],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({ cache: true, parallel: true }),
            new OptimizeCSSAssetsPlugin()
        ]
    }
};