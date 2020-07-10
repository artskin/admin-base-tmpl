const chokidar = require('chokidar')
const fg = require('fast-glob')
const path = require('path')
const fs = require('fs')
//require('colors')

const generateRoutesAndFiles = async () => {
  // files.map(f => f.replace(/('|")/g, '\\$1'))
  return createRoutes(
    await fg('src/views/**/*.vue', {
      ignore: ['**/*.test.*', '**/*.spec.*', '**/#*.*']
    }),
    'views',
    '-'
  )
}

const createRoutes = (files, viewsDir = '', routeNameSplitter = '-') => {
  const supportedExtensions = ['vue', 'js']
  const routes = []
  const requireComponent = []
  //console.log(files)
  files.forEach(file => {
    //console.log(file)
    const keys = file
      .replace(new RegExp(`^${viewsDir}`), '')
      .replace(new RegExp(`\\.(${supportedExtensions.join('|')})$`), '')
      .replace(/\/{2,}/g, '/')
      .split('/')
      .slice(2)
      //console.log(keys)
    const route = {
      name: '',
      path: '',
      component: keys
        .join('-')
        .replace('_', '')
        .replace(/\-(\w)/g, (all, letter) => letter.toUpperCase())
      //component: `() => import(/* webpackChunkName: ${route.component}*/'@/views/${keys.join('/')}`
    }
    
    const meta = fs
      .readFileSync(path.join(process.cwd(), file), 'utf-8')
      .match(/<route-meta(([\s\S])*?)<\/route-meta>/g)
    meta && meta[0] && (route.meta = eval(`(${meta[0].replace('<route-meta>', '').replace('</route-meta>', '')})`))
    requireComponent.push(
      `const ${route.component} = () => import(/* webpackChunkName: "${route.component}" */ '@/views/${keys.join(
        '/'
      )}')`
    )
    let parent = routes
    keys.forEach((key, i) => {
      // remove underscore only, if its the prefix
      const sanitizedKey = key.startsWith('_') ? key.substr(1) : key

      route.name = route.name ? route.name + routeNameSplitter + sanitizedKey : sanitizedKey
      route.name += key === '_' ? 'all' : ''
      // route.chunkName = file.replace(new RegExp(`\\.(${supportedExtensions.join('|')})$`), '')
      const child = parent.find(parentRoute => parentRoute.name === route.name)

      if (child) {
        child.children = child.children || []
        parent = child.children
        route.path = ''
      } else if (key === 'index' && i + 1 === keys.length) {
        route.path += i > 0 ? '' : '/'
      } else {
        route.path += '/' + getRoutePathExtension(key)

        if (key.startsWith('_') && key.length > 1) {
          route.path += '?'
        }
      }
    })
    parent.push(route)
  })
  console.log(routes)
  sortRoutes(routes)
  return {
    routes: cleanChildrenRoutes(routes),
    requireComponent
  }
}
const startsWithAlias = aliasArray => str => aliasArray.some(c => str.startsWith(c))
const startsWithSrcAlias = startsWithAlias(['@', '~'])
const r = (...args) => {
  const lastArg = args[args.length - 1]
  if (startsWithSrcAlias(lastArg)) {
    return wp(lastArg)
  }
  return wp(path.resolve(...args.map(str => str.replace(/\//g, escapeRegExp(path.sep)))))
}

const baseToString = value => {
  if (typeof value == 'string') {
    return value
  }
  if (isArray_1(value)) {
    return _arrayMap(value, baseToString) + ''
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : ''
  }
  let result = value + ''
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

const toString = value => {
  return value == null ? '' : baseToString(value)
}

const escapeRegExp = string => {
  const reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source)
  string = toString(string)
  return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string
}
const isWindows = /^win/.test(process.platform)
const wp = (p = '') => {
  if (isWindows) {
    return p.replace(/\\/g, '\\\\')
  }
  return p
}
const getRoutePathExtension = key => {
  if (key === '_') {
    return '*'
  }
  if (key.startsWith('_')) {
    return `:${key.substr(1)}`
  }
  return key
}

const DYNAMIC_ROUTE_REGEX = /^\/(:|\*)/

const sortRoutes = routes => {
  routes.sort((a, b) => {
    if (!a.path.length) {
      return -1
    }
    if (!b.path.length) {
      return 1
    }
    // Order: /static, /index, /:dynamic
    // Match exact route before index: /login before /index/_slug
    if (a.path === '/') {
      return DYNAMIC_ROUTE_REGEX.test(b.path) ? -1 : 1
    }
    if (b.path === '/') {
      return DYNAMIC_ROUTE_REGEX.test(a.path) ? 1 : -1
    }

    let i
    let res = 0
    let y = 0
    let z = 0
    const _a = a.path.split('/')
    const _b = b.path.split('/')
    for (i = 0; i < _a.length; i++) {
      if (res !== 0) {
        break
      }
      y = _a[i] === '*' ? 2 : _a[i].includes(':') ? 1 : 0
      z = _b[i] === '*' ? 2 : _b[i].includes(':') ? 1 : 0
      res = y - z
      // If a.length >= b.length
      if (i === _b.length - 1 && res === 0) {
        // unless * found sort by level, then alphabetically
        res = _a[i] === '*' ? -1 : _a.length === _b.length ? a.path.localeCompare(b.path) : _a.length - _b.length
      }
    }

    if (res === 0) {
      // unless * found sort by level, then alphabetically
      res =
        _a[i - 1] === '*' && _b[i] ? 1 : _a.length === _b.length ? a.path.localeCompare(b.path) : _a.length - _b.length
    }
    return res
  })

  routes.forEach(route => {
    if (route.children) {
      sortRoutes(route.children)
    }
  })

  return routes
}

const cleanChildrenRoutes = (routes, isChild = false, routeNameSplitter = '-') => {
  let start = -1
  const regExpIndex = new RegExp(`${routeNameSplitter}index$`)
  const routesIndex = []
  routes.forEach(route => {
    if (regExpIndex.test(route.name) || route.name === 'index') {
      // Save indexOf 'index' key in name
      const res = route.name.split(routeNameSplitter)
      const s = res.indexOf('index')
      start = start === -1 || s < start ? s : start
      routesIndex.push(res)
    }
  })
  routes.forEach(route => {
    route.path = isChild ? route.path.replace('/', '') : route.path
    if (route.path.includes('?')) {
      const names = route.name.split(routeNameSplitter)
      const paths = route.path.split('/')
      if (!isChild) {
        paths.shift()
      } // clean first / for parents
      routesIndex.forEach(r => {
        const i = r.indexOf('index') - start //  children names
        if (i < paths.length) {
          for (let a = 0; a <= i; a++) {
            if (a === i) {
              paths[a] = paths[a].replace('?', '')
            }
            if (a < i && names[a] !== r[a]) {
              break
            }
          }
        }
      })
      route.path = (isChild ? '' : '/') + paths.join('/')
    }
    route.name = route.name.replace(regExpIndex, '')
    if (route.children) {
      if (route.children.find(child => child.path === '')) {
        delete route.name
      }
      route.children = cleanChildrenRoutes(route.children, true, routeNameSplitter)
    }
  })
  return routes
}

const creatRouter = () => {
  generateRoutesAndFiles().then(res => {
    //console.log(res)
    let string = ''
    res.requireComponent.forEach(res => {
      string += `${res}\n`
    })
    string += `export default ${JSON.stringify(res.routes, null, 2)}`
      .replace(/"component": "(\w+?)"/g, `"component": $1`)
      .replace(/"(\w+?)":/g, '$1:')
      .replace(/"/g, "'")
    fs.writeFile(path.join(process.cwd(), `src/router/routes.js`), `${string}\n`, () => {
      console.log('\nRouter complete.'.green)
    })
  })
}
class RouterWebpackPlugin {
  apply(compiler) {
    compiler.hooks.environment.tap('RouterWebpackPlugin', () => {
      creatRouter()
      compiler.options.mode === 'development' &&
        chokidar
          .watch('views', {
            ignoreInitial: true,
            cwd: path.resolve(process.cwd(), `src`),
            ignore: ['**/*.test.*', '**/*.spec.*', '**/#*.*']
          })
          .on('add', () => creatRouter())
          .on('unlink', () => creatRouter())
          .on('unlinkDir', () => creatRouter())
          .on('change', () => creatRouter())
    })
  }
}

module.exports = RouterWebpackPlugin