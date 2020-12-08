const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    mode: 'development',
    devtool: 'source-map',
    entry: {
        index: './src/main.ts'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/, 
                loader: "ts-loader" // 需要安装本地（当前项目）typescript编译器
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./template/index.html"
        })
    ],

    devServer: {
        port: 8082,
        open: true,
    }

}