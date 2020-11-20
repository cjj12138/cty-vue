module.exports = {
    // 关闭线上源码
    productionSourceMap: false,
    publicPath: process.env.VUE_APP_URL,
    // productionSourceMap:false,
    outputDir: 'static',

    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                },
            },
        }
    },
}