const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: "./src/index.js"
    },
    output: {
        // path 一定要是绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            // 每一个对象就是一种模块的解析规则 - loader
            {
                // 用来匹配当前载入的模块规则
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        // outputPath 还是相对于全局的 outputPath
                        outputPath: "./images",
                        // 一个资源的 url 并不等同与资源的绝对存储路径
                        // 打包后文件的 url
                        publicPath: '/dist/images',
                        // 小于 100 字节转成 base64 格式
                        limit: 100
                    }
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {}
                    },
                    {
                        loader: "css-loader",
                        options: {
                            // 启用/禁用 url() 处理
                            url: true,
                            // 启用/禁用 @import 处理
                            import: true,
                            // 启用/禁用 Sourcemap
                            sourceMap: false,
                        }
                    }
                ]
            }
        ]
    }
}