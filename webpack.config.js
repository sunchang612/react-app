let path = require('path');
let htmlWebpackPlugin  = require('html-webpack-plugin');
let extractTextWebpackPlugin = require('extract-text-webpack-plugin');
let extract = new extractTextWebpackPlugin('build.css');
module.exports={
    entry:{
        index:'./app/index.js',
        vendor:['react','react-dom','redux','react-redux','react-router-dom']
    },
    output: {
        filename: "[name].js",
        path: path.resolve('dist')
    },
    module: {
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:extract.extract(['css-loader',{
                loader:'postcss-loader',
               options:{
                   plugins:[
                       require('autoprefixer') // 添加css前缀
                   ]
               }

            },'less-loader'])}
        ]
    },
    plugins: [
        extract,
        new htmlWebpackPlugin({
            template:'./app/index.html'
            }
        )
    ],
    devtool:'source-map',  // 错误时可以提示源码的错误 不会光显示bundle.js错误
    devServer:{
        proxy:{
            '/api':'http://localhost:3000'
        }
    }
}
