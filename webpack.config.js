var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: {
        path: path.resolve(__dirname, 'public') + '/app',
        filename: 'react-redux-todo.js',
        publicPath: '/app/'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'src'),
        port: 3000,
        compress: true,
        overlay: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}