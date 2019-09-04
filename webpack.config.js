const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
       path: path.join(__dirname, './dist'),
       filename: 'bundle.js'
    },
    plugins:[
        new VueLoaderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template:'src/index.html'
        })
    ],
   module: {
       rules: [
           {test: /\.css$/, use: ['style-loader', 'css-loader']},
           {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},
            // limit 单位byte， 如果引用图片大小 大于或等于 limit值，则不会转化为base64编码，而是32位hash值加图片名称；小于就会转化为base64编码；
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.vue$/, use: 'vue-loader'},
            {test: /\.(ttf)$/, use: 'url-loader'}
        ]
   },
//    resolve: {
//        alias: {//设置vue被导入时的文件
//            "vue$": "vue/dist/vue.js"
//        }
//    }
}



