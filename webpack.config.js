var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
    entry: {main: "./js/main.jsx"},
    output: {
        path: path.resolve(__dirname, 'static'),
        publicPath: "/static/",
        filename: 'scripts/[name]-bundle-[hash].js'
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?sourceMap')},
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader?optional[]=runtime&stage=0" }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles/main-bundle-[hash].css'),
        new AssetsPlugin()
    ]
};
