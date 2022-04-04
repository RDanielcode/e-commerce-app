const path = require('path');
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
require('dotenv').config()
// const CopyPlugin = require('copy-webpack-plugin')
// const DotenvPlugin = require('dotenv-webpack')


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  mode: 'production',

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

    // new DotenvPlugin(),

		new webpack.DefinePlugin({
			'process.env.REACT_APP_CLIENT_ID': JSON.stringify(process.env.REACT_APP_CLIENT_ID),
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
			},
		),

  //   new CopyPlugin({
  //     patterns: [{
  //         from: path.resolve(__dirname, "src", "assets"),
  //         to: "assets/images"
  //     }
  //     ]
  //   })
  ],

  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3006,
  },
};
