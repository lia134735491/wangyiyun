let path = require('path');
let miniCssExtractPlugin = require('mini-css-extract-plugin');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    optimization:{
        splitChunks:{
            chunks: 'all'
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader']
            },
            //下载sass-loader,node-sass
            {
                test: /\.scss/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader']
            },
            // 下载file-loaer, url-loader来处理图片和字体图标
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/, 
                use: ['file-loader'] 
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename: 'index.html'
        }),
        new miniCssExtractPlugin({
            filename:'[name].css',//分离后的文件名
        })
    ]
}