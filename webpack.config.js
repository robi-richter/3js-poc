const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


const webpackConfig = {
  devtool: 'source-map',
  target: 'web',
  entry: './src/main.js',
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'css'),
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: false,
                sourceMap: true,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: [
          path.join(__dirname, 'src/assets'),
          path.join(__dirname, 'node_modules'),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    })
  ]
};

module.exports = webpackConfig;
