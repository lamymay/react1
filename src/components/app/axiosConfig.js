import axios from 'axios';
import config from './config'; // 引入配置文件
import https from 'https'; // 导入 https 模块

const axiosInstance = axios.create({
    baseURL: `${config.server_base_uri}`, // 替换为您的 API 基础 URL
    timeout: 60000, // 设置请求超时时间为 60 秒
    httpsAgent: new https.Agent({ rejectUnauthorized: true }), // 信任任何证书
});

export default axiosInstance;
