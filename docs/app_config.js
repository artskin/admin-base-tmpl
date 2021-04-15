
//apiserver 和前端在同一个服务器时host=''
let host ="https://yapi.baidu.com/mock/48673/api"
//let host =""
window.appConf = {
  "lang":"en",
  "theme":"",
  "mWidth":900,
  "api":{
    login    : `${host}/auth/login`,
    logout   : `${host}/auth/logout`,
    userInfo : `${host}/users/info`,
    sysInfo  : `${host}/sys/info`,
    tasks    : `${host}/task/list`,
    statistics:`${host}/statistics`
  }
}