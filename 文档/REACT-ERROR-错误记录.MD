

#报错: 命令执行以管理员身份运行：Windows PowerShell
1. npm error MSB3428: 未能加载 Visual C++ 组件“VCBuild.exe”。要解决此问题,1) 安装
2018年07月02日 11:39:05 剑神花 阅读数：3185
错误原因：缺少windows构建插件

解决方法：在命令行工具中运行：
npm install –global –production windows-build-tools 
（全局安装windows构建工具）

npm install --global --production windows-build-tools
npm install -g node-gyp




2. 查看已经安装过的node包
npm ls -g --depth 0
webpack 版本查询
npm info webpack
安装指定版本
npm install webpack@3.0.0 -g 
安装最新版本
npm install webpack -g
 
3. 


--------

