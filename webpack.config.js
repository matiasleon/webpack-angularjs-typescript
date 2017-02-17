var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'baggage?[file].html&[file].css'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: [
                    'ng-annotate-loader',
                    'ts-loader'
                ]
            }, {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo='+__dirname+'/!html'
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                loader: 'file-loader?name=res/[name].[ext]?[hash]'
            }, {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({ //para q genere automaticamente el index.html
            template: './src/index.html'
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