
//let host ="http://localhost:9528";
//apiserver 和前端在同一个服务器时host=''
let host =""

window.appConf = {
  "lang":"en",
  "api":{
    login    :host+'/mock-api/v1/users/login',
    userInfo :host+'/mock-api/v1/users/info',
    logout   :host+'/mock-api/v1/users/logout',
    tasks    :host+'/mock-api/v1/tasks',
  }
  
}