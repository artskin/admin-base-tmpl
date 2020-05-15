import Vue from 'vue'

//全量引入
// import ElementUI from 'element-ui'
// Vue.use(ElementUI)

//按需引入
import { Button,Dropdown,DropdownMenu,DropdownItem,Form,FormItem,Input } from 'element-ui';
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)


//import '@/styles/element-variables.scss'
import '@/styles/index.scss'

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import '@/permission'


import i18n from '@/lang/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
