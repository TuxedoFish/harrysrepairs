// webpack.config.js

const path = require( 'path' );
require('dotenv').config()

var HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || 'sb';
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:1337';
const GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID || 'N/A';

module.exports = {
    context: __dirname,

    // Bind mounts on a Windows host don't forward inotify events to the Linux
    // container, so --watch must poll to detect changes.
    watchOptions: {
        poll: 1000,
        ignored: /node_modules/,
    },

    entry: {
        index: './src/index.js',
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, `dist`),
        filename: `[name].js`,
    },
    plugins : [
        // Single HtmlWebpackPlugin: template + favicon together. Two separate
        // instances both emitting index.html produced a corrupted merged file
        // (wrong "Webpack App" title, broken <head>).
        new HtmlWebpackPlugin({
            hash: true,
            title: "Harry Liversedge",
            myPageHeader: 'Home Page',
            template: './templates/index.html',
            chunks: ['index'],
            filename: 'index.html', // relative to root of the application
            favicon: './src/images/favicon.ico'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV),
                'PAYPAL_CLIENT_ID': JSON.stringify(PAYPAL_CLIENT_ID),
                'REACT_APP_BACKEND_URL': JSON.stringify(REACT_APP_BACKEND_URL),
                'GOOGLE_ANALYTICS_ID': JSON.stringify(GOOGLE_ANALYTICS_ID)
            }
        }),
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
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
            },
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