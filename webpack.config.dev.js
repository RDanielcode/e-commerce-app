const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
const DotenvPlugin = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  mode: 'development',

  performance: {
    hints: false,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },

      {
        test: /\.s?css$/,
        use: [MiniCssPlugin.loader, 'css-loader', 'sass-loader'],
      },

      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      }
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),

    new MiniCssPlugin({
      filename: 'assets/[name].css',
    }),

    new DotenvPlugin()
  ],

  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3006,
  },
};
