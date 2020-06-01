
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

interface Window {
  appConf:{
    lang:string
    api:{
      login:string,
      userInfo:string,
      logout:string,
      tasks:string
    }
  }
}
