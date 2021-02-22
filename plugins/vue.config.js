const path = require('path')
const name = 'Aurora template'

const RouterWebpackPlugin = require('./router.webpack.plugin')
//接口服务器地址
let crossHost = 'http://localhost:9528';

module.exports = {
  devServer: {
    disableHostCheck: true,
    allowedHosts: [ '10.151.101.14:6061' ],
    host: "0.0.0.0", //如果是真机测试，就使用这个IP
    port: 6066,
    https: true,
    hotOnly: false, //热更新（webpack已实现了，这里false即可）
    proxy: { //配置跨域(本地开发)
      '/v1': {
        target: crossHost,
        changOrigin: true,
        https: false,
        ws: true,
        pathRewrite: {
          '^/v1': ''
        }
      }
    }
  },
  // publicPath: process.env.NODE_ENV === 'production' ? '/vue-typescript-admin-template/' : '/', // TODO: Remember to change this to fit your need
  // lintOnSave: process.env.NODE_ENV === 'development',
  pwa: {
    name: name
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss')
      ]
    }
  },
  chainWebpack(config) {
    //console.log(config)
    // Provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // api.configureWebpack(webpackConfig => {
    //   creatRouter.creatRouter(false)
    // })
    //creatRouter.creatRouter(false)
    config.set('name', name)
  },
  configureWebpack: config => {
    //自动生成路由插件
    config.plugins.push(new RouterWebpackPlugin())
  }
}
