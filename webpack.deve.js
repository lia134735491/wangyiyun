let {merge} = require('webpack-merge');
let base = require('./webpack.base.js')
let VueLoaderPlugin = require('vue-loader/lib/plugin')
let {CleanWebpackPlugin} = require('clean-webpack-plugin')
let webpack = require('webpack');
module.exports = merge(base,{
    mode: 'development',
    
    devServer:{
        hot: true,
        contentBase:  "dist",
        open: true,
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.vue/,
                use:{
                    loader: 'vue-loader'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
})