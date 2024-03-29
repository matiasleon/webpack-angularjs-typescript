var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: [
                    'ng-annotate-loader',
                    'ts-loader'
                ]
            }, {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + __dirname + '/!html'
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                loader: 'file-loader?name=res/[name].[ext]?[hash]' // sacar res par q lo cree en el build
            },
            { 
                test: /\.(png|eot|ttf|svg|gif)$/, loader: 'url-loader?limit=100000' 
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({ //para q genere automaticamente el index.html
            template: './src/index.ejs'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts']
    },
    entry: {
        app: './src/app/app.module.ts'
    },
    devtool: 'source-map'
};