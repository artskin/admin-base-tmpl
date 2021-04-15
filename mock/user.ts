import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/auth/login',
    method: 'post',
    timeout: 200,
    response: ({body})=>{
      console.log('body==>', body);
      return {
        code: 2000,
        message: 'ok',
        data:{
          accessToken:'adsadswee313sddq'
        }
      }
    },
  },
  {
    url: '/auth/logout',
    method: 'post',
    timeout: 200,
    response: ({body})=>{
      console.log('body==>', body);
      return {
        code: 2000,
        message: 'ok',
        data:{
          accessToken:''
        }
      }
    },
  },
  {
    url: '/users/info',
    method: 'get',
    timeout: 200,
    response: ({body})=>{
      console.log('body==>', body);
      return {
        code: 2000,
        message: 'ok',
        data: {
          user:{
            id: 0,
            username: 'admin',
            password: 'any',
            name: 'Admin',
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            introduction: 'I am a super administrator',
            email: 'admin@test.com',
            phone: '1234567890',
            roles: ['admin'],
          }
        },
      }
    },
  },
  {
    url: '/sys/info',
    method: 'get',
    timeout: 200,
    response: ({body})=>{
      return {
        code: 2000,
        message: 'ok',
        data: {
          sys_name: '智能管理系统',
        },
      }
    },
  },
] as MockMethod[];