var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
    entry: {
        main: './src/main.js',
        deps_1: ['./src/a.js', './src/b.js', 'random-int'],
        deps_2: ['./src/c.js', './src/d.js', 'camelcase'],
        common: []
    },
    output: {
        path: './dist',
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [node_modules_dir],
            loader: 'babel'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ names: ['deps_1', 'deps_2', 'common'], minChunks: Infinity})
    ]
};

module.exports = config;
