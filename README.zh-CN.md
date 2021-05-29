<div align="center">
<a target="_blank" href="https://admin.senseui.im/">
    <img height="100" src="./public/img/logo.svg" alt="logo" >
</a><br>
# ABT：admin base template
</div>

中文 | [English](./README.md)
> 你是否还在为启动前端项目的缓慢等待而焦急，为修改代码等代码编译看效果而烦恼……
> 是时候抛弃Webpack了,拥抱Vite,开发环境秒开，修改代码秒更新不是梦！

> vite2 + vue3的开发，网上已有大量文章介绍。
但是我们原有项目大部分还都是Vue2.x版本，不可能一上来就全部用vue3重构，那么能不能用vite2运行之前的vue2开发的项目呢?

## 总览
![pewview](./public/img/preview.gif)

本项目是一个admin后台系统的基础套件。已基于vite2.0（esmodule+esbuild）重新改造完成（之前是webpack，vue-cli4.x版本）。

技术栈是：Vue2+ElementUI+Typescript，让Vue2+ts的旧项目也享受到了vite2带来的秒开福利。

Mock 数据部分，通过 [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock)启动服务，通过vite.config.js配置并运行。

### 基础功能
> 管理系统必要的基础功能模块。
已有功能
- [x] 登录/登出
- [x] 权限控制:路由权限/元素权限/接口权限
- [x] 国际化：支持图片或其他资源同时切换(登录页切换示例)
- [x] 一键换肤(右上角)，通过css 的var 无感切换,包括logo,chart，都可以根据主题动态切换配色。
- [x] 响应式布局：完美适配`PC/iPad/Phone`
- [x] mock数据(`mock/`文件夹下)

### ToDo 

- [ ] 重写Element UI的样式部分：引入css var，更方便更自由的定制主题
- [ ] 登录页切换主题
- [ ] 可配置的布局：菜单支持左右结构，上下结构切换
- [ ] loading 骨架图
- [ ] 添加Material Design 风格主题
- [ ] 登录加密web cryptography API：https://github.com/GetStream/encrypted-web-chat
### 安装依赖

```bash
npm install
```
### 启动本地开发环境（带热启动）

```bash
npm run dev
```
### 构建生产环境 (带压缩)

```bash
npm run build
```
### 生产环境预览

```bash
npm run serve
```


## 参考致谢

[vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template/tree/minimal) 

https://coderthemes.com/greeva/layouts/vertical-dark/ui-buttons.html

[adminlte](adminlte.io)
[animate.style](https://animate.style/)