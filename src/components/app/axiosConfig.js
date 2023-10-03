// axiosConfig.js

import axios from 'axios';
import config from './config'; // 引入配置文件

const axiosInstance = axios.create({
    baseURL: `${config.server_base_urr}/info.`, // 替换为您的 API 基础 URL
    timeout: 60000, // 设置请求超时时间为 60 秒
    httpsAgent: new https.Agent({ rejectUnauthorized: false }), // 信任任何证书
});

export default axiosInstance;
