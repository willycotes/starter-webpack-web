/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Data = require('../src/data.json');

/** @type {import('webpack').Configuration} */

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
    home: path.resolve(__dirname, '../src/assets/js/entry-home.js'),
    about: path.resolve(__dirname, '../src/assets/js/entry-about.js'),
    contacts: path.resolve(__dirname, '../src/assets/js/entry-contacts.js'),
  },
  resolve: {
    extensions: ['.js'],
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   use: 'html-loader',
      // },
      {
        test: /\.ejs$/,
        use: 'ejs-compiled-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    // home page
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'Inicio',
      description: 'Descripción del contenido de la página de inicio',
      template: path.resolve(__dirname, '../src/template/index.js'),
      page: 'home',
      templateParameters: Data,
      filename: 'index.html',
      chunks: ['index', 'home'],
      baseURL: 'http://127.0.0.1:9000/',
    }),
    // about page
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'Nosotros',
      description: 'Descripción del contenido de la página sobre nosotros',
      template: path.resolve(__dirname, '../src/template/index.js'),
      page: 'about',
      templateParameters: Data,
      filename: 'nosotros.html',
      chunks: ['index', 'about'],
      baseURL: 'http://127.0.0.1:5500/',
    }),
    // contacts page
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'Contáctenos',
      description: 'Descripción del contenido de la página de contáctenos',
      template: path.resolve(__dirname, '../src/template/index.js'),
      page: 'contacts',
      templateParameters: Data,
      filename: 'contactenos.html',
      chunks: ['index', 'contacts'],
      baseURL: 'http://127.0.0.1:5500/',
    }),
    new DotEnv(),
    new StylelintPlugin(),
    new ESLintPlugin(),
  ],
};
