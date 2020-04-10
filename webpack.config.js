// webpack.config.js

const path = require( 'path' );

var HtmlWebpackPlugin = require('html-webpack-plugin');

const dotenv = require('dotenv');
const webpack = require('webpack');

const env = dotenv.config().parsed;
  
// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

const environment = new webpack.DefinePlugin(envKeys)

module.exports = {
    context: __dirname,
    
    entry: {
        index: './src/index.js',
        tandc: './src/tandc.js',
        phone: './src/phone.js',
    },
    output: {
        path: path.resolve(__dirname, `dist`),
        filename: `[name].js`,
    },
    plugins : [
        new HtmlWebpackPlugin({
            favicon: "./src/images/favicon.ico",
        }),
        environment
    ],
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.(scss|css)$/,
            use: [
                { loader: `style-loader` },
                { loader: `css-loader` },
                { loader: `sass-loader` },
            ],
        },
        {
            test: /\.(svg)$/,
            loader: `url-loader`,
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  esModule: false,
                },
              },
            ],
        },
        ]
    }
};