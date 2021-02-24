
//let host ="http://localhost:9528";
//apiserver 和前端在同一个服务器时host=''
let host =""

window.appConf = {
  "lang":"en",
  "api":{
    login    :host+'/users/login',
    userInfo :host+'/users/info',
    sysInfo  :host+'/sys/info',
    logout   :host+'/users/logout',
    tasks    :host+'/api/v1/tasks',
  }
  
}