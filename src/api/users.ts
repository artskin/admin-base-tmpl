import request from '@/utils/request'
const apipath = window.appConf?.api
//console.log(window.appConf)
export const getUserInfo = (data: any) =>
  request({
    url: apipath.userInfo,
    method: 'get',
    params:data
  })

export const login = (data: any) =>
  request({
    url: apipath.login,
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: apipath.logout,
    method: 'post'
  })

export const getUserList = (data: any) =>
  request({
    url: apipath.userList,
    method: 'get',
    params:data
  })