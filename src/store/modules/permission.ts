import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { RouteConfig } from 'vue-router'
import { asyncRoutes,constantRoutes } from '@/router'
import store from '@/store'
const permissionArr:string[] = []
const hasPermission = (path,route)=>{
  if(permissionArr.includes(path)){
    return true
  }else{
    return false
  }
}
export const filterAsyncRouters =(path,routes)=>{
  let res:RouteConfig[] = [];
  routes.map(item=>{
    const r = {...item}
    if(hasPermission(path,r)){
      r.children = filterAsyncRouters(path,r.children)
    }
    res.push(r)
  })
  return res
}


@Module({ dynamic: true, store, name: 'user' })
class Permission extends VuexModule {
  public routes:RouteConfig[] = []
  public dynamicRoutes:RouteConfig[] = []

  @Mutation
  private SET_ROUTES(routes: RouteConfig[]) {
    this.routes = constantRoutes.concat(routes);
    this.dynamicRoutes = routes
  }
  
  @Action
  public GenerateRoutes(roles: string[])  {
    let accesseRoutes = asyncRoutes;
    if(roles.includes('admin')){
      accesseRoutes = asyncRoutes
    }else{
      accesseRoutes = filterAsyncRouters(roles,asyncRoutes)
    }
    this.SET_ROUTES(accesseRoutes)
  }
}

export const PermissionModule = getModule(Permission)
