import Vue from 'vue'
import '@/assets/styles/index.scss'
import microApp from '@micro-zoe/micro-app'

//全量引入
import ElementUI from 'element-ui'
Vue.use(ElementUI)

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import '@/router/permission'

let currentTheme = localStorage.getItem('currentTheme')
if(currentTheme){
  store.dispatch('SetTheme',currentTheme)
}
microApp.start()

import i18n from '@/lang/index'
import permission from '@/utils/directive'
Vue.prototype.$permission = permission.hasPermission;
Vue.directive('permission',permission);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#main-app')
