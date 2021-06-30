import Vue from 'vue'
import VueRouter,{RawLocation,RouteConfig } from 'vue-router'
import Layout from '../layout/index.vue'
// import routes from './routes.js'
const routerPush:any = VueRouter.prototype.push;
(VueRouter as any).prototype.push = function push(location:RawLocation, onResolve, onReject) {
  if (onResolve || onReject) return routerPush.call(this, location, onResolve, onReject);
  return routerPush.call(this, location).catch(error=> error)
};
Vue.use(VueRouter)

/*
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    hidden: true                 if true, this route will not show in the sidebar (default is false)
  }
*/
export const constantRoutes: RouteConfig[] = [
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: { hidden: true,title: 'Login' }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        meta: {
          title: 'Dashboard',
          icon: 'el-icon-data-analysis'
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
    meta: { hidden: true }
  },
  {
    path: 'https://senseui.im',
    meta: {
      title: 'Sense UI',
      icon: 'el-icon-menu'
    }
  },
  {
    path: 'https://gudong.im',
    meta: {
      title: 'FE Notes',
      icon: 'el-icon-notebook-1'
    }
  },
  {
    path: '*',
    redirect: '/404',
    meta: { hidden: true }
  }
]

export const asyncRoutes: RouteConfig[] = [
  {
    path: '/example',
    component: Layout,
    redirect: '/example/tree',
    meta: {
      title: 'Pages',
      id:'2007021',
      icon: 'el-icon-document-copy'
    },
    children: [
      {
        path: 'cards',
        component: () => import(/* webpackChunkName: "tree" */ '@/views/list/card.vue'),
        meta: {
          title: 'Card list',
          id:'2007022',
          icon: 'el-icon-files'
        }
      },
      {
        path: 'task',
        component: () => import(/* webpackChunkName: "table" */ '@/views/task/index.vue'),
        meta: {
          title: 'Task List',
          id:'2009527',
          icon: 'el-icon-s-grid'
        }
      },
      {
        path: 'tree',
        component: () => import(/* webpackChunkName: "tree" */ '@/views/tree/index.vue'),
        meta: {
          title: 'Tree',
          icon: 'el-icon-finished'
        }
      }
    ]
  },
  {
    path: '/ui',
    component: Layout,
    redirect: '/elements',
    children: [
      {
        path: 'elements',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/element-ui/index.vue'),
        meta: {
          title: 'Element UI',
          icon: 'el-icon-eleme'
        }
      }
    ]
  },
  {
    path: '/permission',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "form" */ '@/views/permission/index.vue'),
        meta: {
          title: 'router.permission',
          icon: 'el-icon-set-up'
        }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue'),
        meta: {
          title: 'Form',
          icon: 'el-icon-edit'
        }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    meta: {
      title: 'Nested',
      icon: 'el-icon-finished'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index.vue'),
        redirect: '/nested/menu1/menu1-1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
            meta: { title: 'Menu1-01' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
            meta: { title: 'Menu1-02' }
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3/index.vue'),
            meta: { title: 'Menu1-03' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index.vue'),
        meta: { title: 'Menu2'}
      }
    ]
  }
]

const createRouter = () => new VueRouter({
  // mode: 'history',  // Disabled due to Github Pages doesn't support this, enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: '',
  routes: constantRoutes
})
const router = createRouter()
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
