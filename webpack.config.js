const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
            inject: false
        })
    ]
};