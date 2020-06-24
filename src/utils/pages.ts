
/*
    支持路由懒加载
  使用注意点: 
    1. 页面中的 `name`属性必填,这将会成为router路由对象的name和path的组成部分
    2. 在routeConfig.js中,维护meta redirect等时,key必须为路由对象的name属性的值
    3. 扩展到了三级路由 
*/
interface roterItem {
  name:""
  path:""
  component:Function
  father:""
}

import routeConfig from '@/utils/routeConfig'
let files = require.context('../views', true, /\.vue$/);
let jsfile = require.context('../views')
console.log(jsfile)
const pages = {}
let routeArr:Array<roterItem> = []
// files.keys().forEach((key) => {
//   //console.log(key)
//   pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
//   pages[key.replace(/(\.\/|\.vue)/g, '')].filePath = key
//     .split('/')
//     .slice(1)
//     .join('/')
// })

// 
// let threeLevelRoute = {}
// let twoLevelRoute = {}
// let oneLevelRoute = {}
// for (let key in pages) {
//   let nameArr = key.split('/')
//   if (nameArr.length == 2) {
//     let obj:roterItem = {
//       name: pages[key].name,
//       path: `/${pages[key].name}`,
//       component: () => import(`@/views/${pages[key].filePath}`),
//     }
//     if (routeConfig[pages[key].name]) {
//       obj.meta = routeConfig[pages[key].name].meta
//       obj.redirect = routeConfig[pages[key].name].redirect
//     }
//     oneLevelRoute[nameArr[0]] = obj
//   } else if (nameArr.length == 3) {
//     let obj:roterItem = {
//       name: pages[key].name,
//       path: pages[key].name,
//       component: () => import(`@/views/${pages[key].filePath}`),
//       father: nameArr[0],
//     }
//     if (routeConfig[pages[key].name]) {
//       obj.meta = routeConfig[pages[key].name].meta
//       obj.redirect = routeConfig[pages[key].name].redirect
//     }
//     if (!twoLevelRoute[nameArr[1]]) {
//       twoLevelRoute[nameArr[1]] = []
//     }
//     twoLevelRoute[nameArr[1]] = obj
//   } else if (nameArr.length == 4) {
//     let obj = {
//       name: pages[key].name,
//       path: pages[key].name,
//       component: () => import(`@/views/${pages[key].filePath}`),
//       father: nameArr[1],
//     }
//     if (routeConfig[pages[key].name]) {
//       obj.meta = routeConfig[pages[key].name].meta
//       obj.redirect = routeConfig[pages[key].name].redirect
//     }
//     if (!threeLevelRoute[nameArr[2]]) {
//       threeLevelRoute[nameArr[2]] = []
//     }
//     threeLevelRoute[nameArr[2]] = obj
//   }
// }

// // 向二级路由组装children
// for (let key in threeLevelRoute) {
//   let fatherName = threeLevelRoute[key].father
//   if (!twoLevelRoute[fatherName].children) {
//     twoLevelRoute[fatherName].children = []
//   }
//   twoLevelRoute[fatherName].children.push(threeLevelRoute[key])
// }
// // 向一级路由组装children
// for (let key in twoLevelRoute) {
//   let fatherName = twoLevelRoute[key].father
//   if (!oneLevelRoute[fatherName].children) {
//     oneLevelRoute[fatherName].children = []
//   }
//   oneLevelRoute[fatherName].children.push(twoLevelRoute[key])
// }

// for (let key in oneLevelRoute) {
//   routeArr.push(oneLevelRoute[key])
// }

// // 根据meta配置的sort进行排序  根路由必须配置sort
// routeArr.sort((a, b) => a.meta.sort - b.meta.sort)

// // 去除无值的key
// routeArr.forEach((ele) => {
//   for (let key in ele) {
//     if (!ele[key]) {
//       delete ele[key]
//     }
//   }
// })

export default routeArr