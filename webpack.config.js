var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ScriptExtWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
    entry: {
        main: './app/index.js',
        moment: "moment"
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['moment', 'manifest'], // vendor libs + extracted manifest
            minChunks: Infinity,
        }),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};