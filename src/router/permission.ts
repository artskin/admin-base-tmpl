import router from './index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//import { Message } from 'element-ui'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/user'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']

router.beforeEach(async(to: Route, _: Route, next: any) => {
  // Start progress bar
  NProgress.start()

  // Determine whether the user has logged in
  if (UserModule.token) {
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // Check whether the user has obtained his permission roles
      if (UserModule.roles.length === 0) {
        try {
          // Get user info, including roles
          let data  = await UserModule.GetUserInfo()
          console.log(data)
          UserModule.GetUserInfo().then((va)=>{
            console.log(va)
          })
          // Set the replace: true, so the navigation will not leave a history record
          //await next({ ...to, replace: true })
          next()
        } catch (err) {
          // Remove token and redirect to login page
          UserModule.ResetToken()
          //Message.error(err || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      } else {
        next()
      }
    }
  } else {
    // Has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach((to: Route) => {
  // Finish progress bar
  NProgress.done()

  // set page title
  document.title = to.meta.title
})
