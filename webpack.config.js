// webpack.config.js

const path = require( 'path' );

var HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || 'sb';

module.exports = {
    context: __dirname,
    
    entry: {
        index: './src/index.js',
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, `dist`),
        filename: `[name].js`,
    },
    plugins : [
        new HtmlWebpackPlugin({
            favicon: "./src/images/favicon.ico",
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: "Harry's Repairs",
            myPageHeader: 'Home Page',
            template: './templates/index.html',
            chunks: ['index'],
            filename: './index.html' // relative to root of the application
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV),
                'PAYPAL_CLIENT_ID': JSON.stringify(PAYPAL_CLIENT_ID),
            }
        })
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