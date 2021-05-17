import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index.vue'
// import routes from './routes.js'
Vue.use(Router)

/*
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    hidden: true                 if true, this route will not show in the sidebar (default is false)
  }
*/

export default new Router({
  //mode: 'history',  // Enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: '',
  routes: [
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
      meta: { hidden: true,title: 'Login' }
    },
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
      meta: { hidden: true }
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
      path: '/example',
      component: Layout,
      redirect: '/example/tree',
      meta: {
        title: 'Pages',
        icon: 'el-icon-document-copy'
      },
      children: [
        {
          path: 'cards',
          component: () => import(/* webpackChunkName: "tree" */ '@/views/list/card.vue'),
          meta: {
            title: 'Card list',
            icon: 'el-icon-files'
          }
        },
        {
          path: 'task',
          component: () => import(/* webpackChunkName: "table" */ '@/views/task/index.vue'),
          meta: {
            title: 'Task List',
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
          component: () => import(/* webpackChunkName: "menu1" */ '@/views/nested/menu1/index.vue'),
          redirect: '/nested/menu1/menu1-1',
          meta: { title: 'Menu1' },
          children: [
            {
              path: 'menu1-1',
              component: () => import(/* webpackChunkName: "menu1-1" */ '@/views/nested/menu1/menu1-1/index.vue'),
              meta: { title: 'Menu1-01' }
            },
            {
              path: 'menu1-2',
              component: () => import(/* webpackChunkName: "menu1-2" */ '@/views/nested/menu1/menu1-2/index.vue'),
              meta: { title: 'Menu1-02' }
            },
            {
              path: 'menu1-3',
              component: () => import(/* webpackChunkName: "menu1-3" */ '@/views/nested/menu1/menu1-3/index.vue'),
              meta: { title: 'Menu1-03' }
            }
          ]
        },
        {
          path: 'menu2',
          component: () => import(/* webpackChunkName: "menu2" */ '@/views/nested/menu2/index.vue'),
          meta: { title: 'Menu2'}
        }
      ]
    },
    {
      path: '/senseui',
      component: Layout,
      children: [
        {
          path: 'https://senseui.im',
          meta: {
            title: 'Sense UI',
            icon: 'el-icon-menu'
          }
        }
      ]
    },
    {
      path: '/gudong',
      component: Layout,
      children: [
        {
          path: 'https://gudong.im',
          meta: {
            title: 'FE Notes',
            icon: 'el-icon-notebook-1'
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/404',
      meta: { hidden: true }
    }
  ]
})
