
//apiserver 和前端在同一个服务器时host=''
let host =""

window.appConf = {
  "lang":"en",
  "theme":"",
  "mWidth":900,
  "api":{
    login      : `${host}/users/login`,
    logout     : `${host}/users/logout`,
    userInfo   : `${host}/users/info`,
    sysInfo    : `${host}/sys/info`,
    tasks      : `${host}/task/list`,
    statistics : `${host}/statistics`
  }
}