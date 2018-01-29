const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = path.resolve(__dirname, 'src')
const distDir = path.resolve(__dirname, 'dist')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: distDir,
        publicPath: '/',
        sourceMapFilename: 'index.map'
    },
    devServer: {
        contentBase: srcDir,
        publicPath: '/',
        historyApiFallback: true,
        port: 3122
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcDir, 'index.html'),
            path: distDir,
            filename: 'index.html'
        })
    ]
};