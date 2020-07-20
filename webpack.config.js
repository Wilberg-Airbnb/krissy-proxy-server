const webpack = require('webpack');
const dotenv = require('dotenv').config({path: __dirname + '/.env'});
// const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    loaders: [
      {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
      {loader: 'style-loader!css-loader', test: /\.css$/},
      {loader: 'url-loader', test: /\.gif$/},
      {loader: 'file-loader', test: /\.(ttf|eot|svg|png)$/},
    ],
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    // new Dotenv()
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed
    })
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  resolve: {
    alias: {
      config$: './configs/app-config.js',
      react: './vendor/react-master',
    },
    extensions: ['', 'js', 'jsx'],
    modules: [
      'node_modules',
      'bower_components',
      'shared',
      '/shared/vendor/modules',
    ],
  },  
 
}