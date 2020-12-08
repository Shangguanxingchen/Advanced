module.exports = {
    publicPath: '/dist',
    devServer: {
        port: 8081,
        proxy: {
            '/api': {
                target: 'http://localhost:7777',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}