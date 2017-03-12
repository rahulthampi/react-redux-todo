const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: `${path.resolve(__dirname, 'src')}/app/index.jsx`,
  output: {
    path: `${path.resolve(__dirname, 'public')}/app`,
    filename: 'react-redux-todo.js',
    publicPath: '/app/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'env'],
          env: {
            development: {
              plugins: [
                'transform-class-properties'
              ]
            }
          }
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
};