let path = require('path');
// let miniCssExtractPlugin = require('mini-css-extract-plugin');
let htmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
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
            // {
            //     test: /\.css$/,
            //     use: [
            //         miniCssExtractPlugin.loader,
            //         'css-loader']
            // },
            //下载sass-loader,node-sass
            {
                test: /\.scss/,
                use: [
                    // miniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: ()=>[
                                require('postcss-preset-env')()
                            ]
                        }
                    },
                    'sass-loader']
            },
            // 下载file-loaer, url-loader来处理图片和字体图标
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/, 
                use: [
                    {
                        loader:'file-loader',
                        // 解决vue文件中的img标签图片问题
                        options: {
                            esModule: false,
                        }
                    }
                ] 
            },
            //下载eslint,eslint-loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                //优先执行该规则
                enforce: 'pre',
                use: [
                    {
                        loader: 'eslint-loader',
                        
                        
                    }
                ]
            },
            //下载babel-loader、@babel/preset-env、@babel/core
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader:'babel-loader',   
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template:'index.html',
            filename: 'index.html'
        }),
        // new miniCssExtractPlugin({
        //     filename:'[name].css',//分离后的文件名
        // })
    ]
}