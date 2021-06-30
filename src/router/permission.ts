import router,{asyncRoutes} from './index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//import { Message } from 'element-ui'
import { Route, RouteConfig } from 'vue-router'
import { UserModule } from '@/store/modules/user'
import { PermissionModule } from '@/store/modules/permission'
import Layout from '../layout/index.vue'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']

router.beforeEach(async(to: Route, _: Route, next: any) => {
  NProgress.start()
  // console.log(UserModule)
  // console.log(UserModule.token)
  // Determine whether the user has logged in
  if (UserModule.token) {
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // Check whether the user has obtained his permission roles
      
      if (UserModule.token) {
        try {
          // Get user info, including roles
          let data  = await UserModule.GetUserInfo()
          let {modules,permissionCodes} = data
          if(permissionCodes.length>0){
            console.log(modules,permissionCodes)
            console.log(asyncRoutes)
            PermissionModule.GenerateRoutes(permissionCodes)
          //   modules.forEach(item => {
          //     const routeObj:RouteConfig = {
          //       path: '/manage/userlist',
          //       name:'userlist',
          //       meta: {
          //         title: 'userlist',
          //         hidden: false,
          //         icon: 'el-icon-data-analysis'
          //       },
          //       component: () => import('@/views/manage/userlist.vue')
          //     }
          //     let myRouter = {
          //       path: '/manage',
          //       name:'manage',
          //       component: Layout,
          //       meta:{
          //         title:"Manage",
          //         icon:"el-icon-edit-outline"
          //       },
          //       children:[routeObj]
          //     }
          //     //console.log(router.addRoute)
          //     //console.log(router.getRoutes())
          //     //router.addRoute('manage',routeObj)
          //     //debugger
          //     router.addRoute(myRouter)
          //     router.options.routes?.push(myRouter)
          //     //console.log(router.getRoutes())
          //     //debugger
          //   });
          }
          // Set the replace: true, so the navigation will not leave a history record
          //await next({ ...to, replace: true })
          next()
        } catch (err) {
          console.log(err)
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
