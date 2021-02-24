# Aurora admin template

> 你是否还在为启动前端项目的缓慢等待而焦急。为修改代码等代码编译 running而烦恼。是时候抛弃webpack了。

> 拥抱vite,开发环境秒开，修改代码秒更新不是梦...

> vite2 + vue3的开发，网上已有大量文章介绍。
但是我们原有项目不可能一上来就全部用vue3重构，那么能不能用vite2完美运行之前的vue2开发的项目呢? ——答案是：true
## 总览
本项目是一个admin后台系统的基础框架。基于vite2.0（esbuild）重新搭建（之前是webpack，vue-cli4.x版本）。

由于之前项目的包袱，所以项目代码还是vue2+typescript，经过几天的研究调试，终于让vue2+ts的旧项目也享受到了vite2带来的秒开快感。

技术栈 vue vue-router vuex typescript admin 。
包含了 Element UI & Axios & Permission control & 国际化切换及配置，等后台必要的基础功能模块。


Mock 数据部分，可以通过 [vite-plugin-mock]()启动服务，通过vite.config.js配置并运行。

### 功能列表

- 登录/登出
- 权限控制
- 国际化(登录页切换示例)
- mock数据

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

### ToDo 


- [x] 国际化切换：支持图片或其他资源同时切换（添加示例）
- [x] elementUI按需引入，并更改主题
- [ ] 添加一键换肤
- [ ] 路由根据目录自动生成

### 自定义 Vue 配置

看这里 [Configuration Reference](https://cli.vuejs.org/config/).

## 相关项目
[vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template/tree/minimal) 

[vue-typescript-admin-mock-server](https://github.com/armour/vue-typescript-admin-mock-server) (Mock 服务器)

[vue-typescript-admin-docs](https://github.com/armour/vue-typescript-admin-docs) (项目文档)

Javascript 版本相关:

[PanJiaChen/vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) (a vue2.0 minimal admin template)

[PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) (full features supported vue admin)

[PanJiaChen/electron-vue-admin](https://github.com/PanJiaChen/electron-vue-admin) (a vue electron admin project)