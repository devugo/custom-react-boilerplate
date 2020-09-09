const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/App.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            { 
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // Clean builds not in use
        new MiniCssExtractPlugin({
            filename: 'main.[hash].css'
        }), // SExtract css to a file
        new HtmlWebpackPlugin({template: './public/index.html'})
    ]
}