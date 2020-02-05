[nodejs 开始配置教程](https://www.cnblogs.com/zhouyu2017/p/6485265.html)

```
1下载安装一个原则，安装的文件夹所在路径上无中文空格即可，一路点击next即可。


2环境配置
[目的是：
1 【必要】全局任何位置都可以使用node相关命令,则需要去配置'系统环境变量Path'；
2 【非必要】将缓存cache与文件放在非默认的C盘的路径下则需要去配置node参数]

3 怎么配置环境变量：
“我的电脑”-右键-“属性”-“高级系统设置”-“高级”-“环境变量”进入环境变量对话框
假定你的nodejs安装文件夹是： D:\dev\nodejs\ 
//key value 是说明作用，这里若看不懂的就参考其他人的教程吧

key=NODE_PATH     value=D:\dev\nodejs\node_global\node_modules
key=Path        value=D:\dev\nodejs\node_global


范例：我的配置【我的nodejs 安装在C:\Java\nodejs\路径下】

step1.系统全局配置：
NODE_PATH
C:\Pro\nodejs
 C:\Java\nodejs\node_global\node_modules
Path	  C:\Java\nodejs\node_global
step2.删除用户下Path中的一条关于nodejs的配置，使之使用全局配置！


【对于第2点有两种方法：命令模式或者添加配置文件来配置】

去配置node参数修改默认的全局目录
方法一： 到node安装目录[D:/node]执行以下命令： 打开cmd命令窗口，输入
npm config set prefix "C:\Java\nodejs\node_global"/ //全局包目录，就在node安装目录新建了个nodejs文件夹存放
npm config set cache  "C:\Java\nodejs\node_cache"/  //全局包缓存目录，就在node安装目录新建了个nodejs文件夹存放
npm config set registry http://registry.npm.taobao.org/	//切换到淘宝镜像源：

方法二
直接修改node配置文件的cache值和prefix值，文件路径在【%userProfile%/.npmrc】，值改为：
prefix=C:\nodejs\node_global
cache=C:\nodejs\node_cache
registry=https://registry.npm.taobao.org/



说明：
默认安装路径在【%userProfile%\AppData\Roaming\npm】路径中，占C盘空间。

例如：我希望将模块所在路径和缓存路径放在指定的文件夹中，而不是放在默认路径上。

则指定路径（你想把文件放在新指定的路径下， 那么久先建两个文件夹准备着）：建两个文件夹【node_global】及【node_cache】：

后面的可选参数-g，g代表global全局安装的意思


关于npm 的 prefix,在npm中安装全局文件时，npm会把他安装在npm里面配置的prefix路径下。
查看prefix的方法是：npm config list
设置方法是 npm config set prefix 你的路径

```

配置OK后的使用：
```
0. npm版本更新方法。首先我们查看一下npm当前版本，打开cmd，运行指令
npm -v

1. 如果不是最新版本，运行一下代码即可。运行指令，这样npm就更新到最新版本了。
npm install -g npm

2.如果想更新到指定版本，运行指令	（@后跟版本号），这样我们就可以更新npm版本了。
npm -g install npm@2.9.1




还有一点需要注意的，因为国内的网络环境原因，在下载npm包的时候经常会遇到无法正常下载的情况。国内淘宝推出了 npm 镜像，这是一个完整的 npmjs.org 镜像，同步频率为15分钟一次，保证与官方服务同步。推荐使用该镜像。使用方法如下,切换到淘宝镜像源：之后所有用到的 npm 命令都可以使用 cnpm 来代替进行 install。但是 cnpm 不支持 publish 命令，需要注意。

输入以下命令:
npm install -g cnpm --registry=http://registry.npm.taobao.org


```

附：
%ProgramFiles%

