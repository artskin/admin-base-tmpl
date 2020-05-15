import request from '@/utils/request'
const apipath = window.appConf.api

export const getUserInfo = (data: any) =>
  request({
    url: apipath.userInfo,
    method: 'post',
    data
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
