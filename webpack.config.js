const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

require('@babel/register'); // development.jsでES6を使えるようにする

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: [
    './index.js',
  ],
  output: {
    filename: './bundle.js?dwefe=grgergseerwrwerwergsrghrgstrh',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    port: 8080,
  },

  devtool: PRODUCTION ? 'cheap-module-source-map' : 'inline-source-map',
  module: {
    rules: [
      { test: /\.js?$/, enforce: 'pre', exclude: /node_modules/, loader: 'eslint-loader' },
      { test: /\.js?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      {
        test: /\.svg$/,
        loader: 'react-svg-loader',
        query: {
          svgo: {
            // svgo options
            plugins: [{removeTitle: false}],
            floatPrecision: 2
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[sha512:hash:base64:7].[ext]'
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      // inject: 'body',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: './.eslintrc',
        },
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    ...(
      PRODUCTION ? [
        new UglifyJsPlugin({
          sourceMap: true,
          uglifyOptions: {
            ecma:8
          }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
      ] : [
        new webpack.NamedModulesPlugin(),
      ]
    ),
  ],
};
