#1请从中央仓库下载依赖
#registry=http://registry.npm.taobao.org


#https://expo.io/learn
npm install -g create-react-native-app

https://www.cnblogs.com/songwenlong/p/6131762.html















---------
https://guofanbang.com/使用vm15安装macos-mojave-10-14.html
打开，在 smc.present = "TRUE" 后添加（smc.version = "0"）(建议您复制，不包括括号) 后保存。

-----------


https://blog.csdn.net/Peter_cup/article/details/87718966

Install package control 安装失败
环境：Windows 10

自动安装 报错：
Error installing Package Control: HTTP error encountered, giving up - <urlopen error [WinError 10060] 由于连接方在一段时间后没有正确答复或连接的主机没有反应，连接尝试失败。>
error: An error occurred installing Package Control

进行了大量搜索，发现很多人都认为Package Control被墙了。。。测试了一下自己的网络，没问题的

Package Control安装方式：
① 自动方式
使用 Ctrl+` 快捷键 或 通过View->Show Console菜单打开命令行，粘贴代码：

import urllib.request,os; pf = 'Package
Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener(
urllib.request.build_opener( urllib.request.ProxyHandler()) );
open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen(
'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())

接下来等候就行，注意别断网。笔者用手机热点建立的wifi，丢包率2%，深受其害。。。
②手动方式
1.点击Preferences->Browse Packages
2.进入打开的目录，返回上层目录，再进入Installed Packages文件夹。即Packages->Sublime Text 3->Installed Packages 文件夹
3.官网下载Package包Control.sublime-package，解压命名文件夹为Package Control，复制到Installed Packages文件夹里（官网可以下载Sublime程序，但Package包下载链接始终打不开）
4.重启Sublime Text

参考了大神的手法，找到了正确的解决方式：
①打开C:\Windows\system32\drivers\etc\hosts文件，找到hosts文件②使用文本编辑器打开（TXT或sublime均可）
添加
50.116.34.243 sublime.wbond.net
50.116.34.243 packagecontrol.io
保存，再次测试自动安装/手动安装，应该没问题了。注意，若编辑完成后无法保存，这里需要更改hosts文件使用权限。
hosts文件更改权限方法：
hosts文件右键属性->安全->Adminstrator / Users (组或用户名 使用你用的账户）->编辑->修改（点击允许)->确定
文本编辑器再测试一下，可以保存了

--------------------- 
原文：https://blog.csdn.net/Peter_cup/article/details/87718966 




在idea中向启动Tomcat那样启动一个react项目

https://www.cnblogs.com/dslx/p/10824087.html
