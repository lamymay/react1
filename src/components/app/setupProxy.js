const { createProxyMiddleware } = require('http-proxy-middleware');

import config from './config'; // 引入配置文件

module.exports = function (app) {
    app.use(
        '/zero', // 代理请求的端点（根据您的后端API更改此端点）
        createProxyMiddleware({
            target: `${config.server_base_uri}`, // 您的后端服务器的URL
            changeOrigin: true, // 对于虚拟托管站点需要这个
        })
    );
};
