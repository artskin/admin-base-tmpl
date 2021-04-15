import Vue from 'vue'

//全量引入
import ElementUI from 'element-ui'
Vue.use(ElementUI)
//import 'element-ui/lib/theme-chalk/index.css';

//按需引入
// import elementUI from '@/utils/need-element-ui'
// Vue.use(elementUI)

//import '@/styles/element-variables.scss'
import '@/assets/styles/index.scss'
//import '@/styles/theme_dark.less'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import '@/router/permission'


import i18n from '@/lang/index'
console.log(i18n.messages)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
