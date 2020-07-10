const 404 = () => import(/* webpackChunkName: "404" */ '@/views/404')
const loginIndex = () => import(/* webpackChunkName: "loginIndex" */ '@/views/login/index')
const tableIndex = () => import(/* webpackChunkName: "tableIndex" */ '@/views/table/index')
const formIndex = () => import(/* webpackChunkName: "formIndex" */ '@/views/form/index')
const treeIndex = () => import(/* webpackChunkName: "treeIndex" */ '@/views/tree/index')
const dashboardIndex = () => import(/* webpackChunkName: "dashboardIndex" */ '@/views/dashboard/index')
const nestedMenu2Index = () => import(/* webpackChunkName: "nestedMenu2Index" */ '@/views/nested/menu2/index')
const nestedMenu1Index = () => import(/* webpackChunkName: "nestedMenu1Index" */ '@/views/nested/menu1/index')
const nestedMenu1Menu13Index = () => import(/* webpackChunkName: "nestedMenu1Menu13Index" */ '@/views/nested/menu1/menu1-3/index')
const nestedMenu1Menu11Index = () => import(/* webpackChunkName: "nestedMenu1Menu11Index" */ '@/views/nested/menu1/menu1-1/index')
const nestedMenu1Menu12Index = () => import(/* webpackChunkName: "nestedMenu1Menu12Index" */ '@/views/nested/menu1/menu1-2/index')
const nestedMenu1Menu12Menu121Index = () => import(/* webpackChunkName: "nestedMenu1Menu12Menu121Index" */ '@/views/nested/menu1/menu1-2/menu1-2-1/index')
const nestedMenu1Menu12Menu122Index = () => import(/* webpackChunkName: "nestedMenu1Menu12Menu122Index" */ '@/views/nested/menu1/menu1-2/menu1-2-2/index')
export default [
  {
    name: '404',
    path: '/404',
    component: 404
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: dashboardIndex
  },
  {
    name: 'form',
    path: '/form',
    component: formIndex
  },
  {
    name: 'login',
    path: '/login',
    component: loginIndex
  },
  {
    name: 'table',
    path: '/table',
    component: tableIndex
  },
  {
    name: 'tree',
    path: '/tree',
    component: treeIndex
  },
  {
    name: 'nested-menu1',
    path: '/nested/menu1',
    component: nestedMenu1Index
  },
  {
    name: 'nested-menu2',
    path: '/nested/menu2',
    component: nestedMenu2Index
  },
  {
    name: 'nested-menu1-menu1-1',
    path: '/nested/menu1/menu1-1',
    component: nestedMenu1Menu11Index
  },
  {
    name: 'nested-menu1-menu1-2',
    path: '/nested/menu1/menu1-2',
    component: nestedMenu1Menu12Index
  },
  {
    name: 'nested-menu1-menu1-3',
    path: '/nested/menu1/menu1-3',
    component: nestedMenu1Menu13Index
  },
  {
    name: 'nested-menu1-menu1-2-menu1-2-1',
    path: '/nested/menu1/menu1-2/menu1-2-1',
    component: nestedMenu1Menu12Menu121Index
  },
  {
    name: 'nested-menu1-menu1-2-menu1-2-2',
    path: '/nested/menu1/menu1-2/menu1-2-2',
    component: nestedMenu1Menu12Menu122Index
  }
]
