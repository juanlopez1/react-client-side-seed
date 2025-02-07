const path = require('node:path');
const { loadEnvFile } = require('node:process');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

loadEnvFile('.env.development');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, '../public'),
        open: true,
        compress: true,
        port: process.env.PORT,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
});
