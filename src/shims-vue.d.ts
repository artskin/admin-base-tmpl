
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

interface Window {
  appConf:{
    lang:string
    mWidth:number
    api:{
      login:string,
      userInfo:string,
      userList:string,
      logout:string,
      tasks:string,
      records:string,
      top:string,
      statistics:string
    }
  }
}
