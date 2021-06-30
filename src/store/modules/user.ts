import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { login, logout, getUserInfo } from '@/api/users'
import { getToken, setToken, removeToken,setUid,getUid } from '@/utils/cookies'
import {resetRouter} from '@/router'
import store from '@/store'

export interface IUserState {
  token: string
  uid:string
  name: string
  avatar: string
  introduction: string
  roles: string[]
  permissionCodes: string[]
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = getToken() || ''
  public name = ''
  public uid = ''
  public avatar = ''
  public introduction = ''
  public roles: string[] = []
  public permissionCodes: string[] = []

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token;
    setToken(token)
  }
  @Mutation
  private SET_UID(uid: string) {
    this.uid = uid;
    setUid(uid)
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }

  @Mutation
  private SET_PermissionCodes(codes:string[]) {
    this.permissionCodes = codes
    localStorage.setItem('permissionCodes',codes as any)
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar
  }

  @Mutation
  private SET_INTRODUCTION(introduction: string) {
    this.introduction = introduction
  }

  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles
  }

  @Action
  public async Login(userInfo: { username: string, password: string }) {
    let { username, password } = userInfo;
    username = username.trim()
    const { data } = await login({ username, password })
    
    this.SET_TOKEN(data.accessToken)
    this.SET_UID(data.uid)
  }

  @Action
  public ResetToken() {
    removeToken()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }

  @Action({rawError: true})
  public async GetUserInfo() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }
    const { data } = await getUserInfo({uid:this.uid || getUid('uid')})
    
    if (!data) {
      throw Error('Verification failed, please Login again.')
    }
    const { roles, name, avatar, introduction,username,permissionCodes } = data
    // roles must be a non-empty array
    if (!roles || roles.length <= 0) {
      throw Error('GetUserInfo: roles must be a non-null array!')
    }
    this.SET_ROLES(roles)
    this.SET_NAME(username)
    this.SET_AVATAR(avatar)
    this.SET_INTRODUCTION(introduction)
    this.SET_PermissionCodes(permissionCodes)
    return data
  }

  @Action
  public async LogOut() {
    console.log(this.token)
    if (this.token === '') {
      throw Error('LogOut: token is undefined!')
    }
    console.log(await logout())
    await logout()
    removeToken()
    resetRouter()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }
}

export const UserModule = getModule(User)
