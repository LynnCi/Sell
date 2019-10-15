# sell

> A Vue.js project

## 目录介绍

``` bash
sell{
    build{  //和config一样，是webpack配置相关文件
        dev-server.js  //webpack打包入口文件，若无此文件，直接在webpack.dev.conf.js中设置
        webpack.base.conf.js{
            module.exports = {}  //webpack基本配置
        }
    }  
    config
    node_modules  //npm install安装的依赖代码库
    src{  //存放源码
        assets{}
        common{}  //公共资源 
        components{}  //组件
        App.vue  //整个页面的vue实例文件
        main.js  //入口文件
    }
    static{  //存放静态资源
        .gitkeep  //创建空目录，也可以提交到代码库
    } 
    .babelrc  //babel配置 es6转es5
    .editorconfig  //编辑器的配置
    .gitignore  //git仓库忽略的文件
    index.html  //入口html文件
    package.json{  //项目的配置文件
        scripts  //配置执行命令
        dependencies  //项目生产环境的依赖
        devDependencies  //编译过程的依赖
    }  
    README.md  //项目描述文件
}

```

## webpack打包
``` bash

```

## 需求分析
``` bash
spa单页应用，切换tab时不会刷新整个页面

```

## 资源准备
``` bash
移动端2x\3x图是为了适应不同dpr（设备像素比）手机

```
