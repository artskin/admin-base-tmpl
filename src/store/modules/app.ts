import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import Cookies from 'js-cookie';
import { getSidebarStatus, setSidebarStatus } from '@/utils/cookies'
const initLang = window.appConf?.lang || 'en'
import store from '@/store'

export enum DeviceType {
  Mobile,
  Desktop,
  language,
}

export interface IAppState {
  device: DeviceType
  language:string
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
  theme:string
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
  public sidebar = {
    opened: getSidebarStatus() !== 'closed',
    withoutAnimation: false
  }
  public device = DeviceType.Desktop
  public language = Cookies.get('language') || initLang;
  public theme = 'default';

  @Mutation
  private TOGGLE_SIDEBAR(withoutAnimation: boolean) {
    this.sidebar.opened = !this.sidebar.opened
    this.sidebar.withoutAnimation = withoutAnimation
    if (this.sidebar.opened) {
      setSidebarStatus('opened')
    } else {
      setSidebarStatus('closed')
    }
  }

  @Mutation
  private CLOSE_SIDEBAR(withoutAnimation: boolean) {
    this.sidebar.opened = false
    this.sidebar.withoutAnimation = withoutAnimation
    setSidebarStatus('closed')
  }

  @Mutation
  private TOGGLE_DEVICE(device: DeviceType) {
    this.device = device
  }

  @Mutation
  SET_THEME(theme:string) {
    this.theme = theme
  }
  
  @Mutation
  SET_LANGUAGE(language: string) {
    this.language = language;
    Cookies.set('language', language)
  }

  @Action
  public ToggleSideBar(withoutAnimation: boolean) {
    this.TOGGLE_SIDEBAR(withoutAnimation)
  }

  @Action
  public CloseSideBar(withoutAnimation: boolean) {
    this.CLOSE_SIDEBAR(withoutAnimation)
  }

  @Action
  public ToggleDevice(device: DeviceType) {
    this.TOGGLE_DEVICE(device)
  }
  //i18n-setting
  @Action({ commit: 'SET_LANGUAGE' })
  async SetLanguage(language: string) {
    return language;
  }
  @Action({ commit: 'SET_THEME' })
  async SetTheme(theme: string) {
    return theme;
  }
}

export const AppModule = getModule(App)
