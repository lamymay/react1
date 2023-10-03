const {createProxyMiddleware} = require('http-proxy-middleware')
// 这个玩意不用下，react里自己带了

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/zero/**',
            {  // 发送请求的时候 react会自动去找这个api1，匹配这个路径，然后去发送对的请求
                // target: 'https://localhost.charlesproxy.com:9000',
                target: 'https://192.168.2.102:9000',
                changeOrigin: true, //控制服务器接收到的请求头中host字段的值
                secure: false,
                //pathRewrite: {'^/zero': ''} // 跟上面匹配，这个api1只是找这个路径用的，实际接口中没有server，所以找个目标地址后，要把server给替换成空
            }
        ),
        // changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
        // changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
        // 注意！！注意！！注意！！ changeOrigin默认值为false，需要我们自己动手把changeOrigin值设为true
        // createProxyMiddleware('/backup', {
        //     target: 'https://192.168.2.102:9000',
        //     changeOrigin: true,
        //     pathRewrite: {'^/backup': ''}
        // }),
    )
}


