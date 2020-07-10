# Aurora admin template


## 总览

这是一个 vue vuex typescript admin 搭建的基础管理后台。
包含了 Element UI & Axios & Permission control & 国际化切换及配置，等后台必要的基础功能模块。

基于webpack4.x，vue-cli4.x版本

Mock 数据部分，可以通过 [mock-data](http://gitlab.sz.sensetime.com/fe/mock-data.git)启动服务，通过vue.config.js配置proxy跨域方式或绝对路径访问。

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
npm run serve
```

### 构建生产环境 (带压缩)

```bash
npm run build
```

### 代码格式检查以及自动修复

```bash
npm run lint
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