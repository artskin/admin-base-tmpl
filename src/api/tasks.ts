import request from '@/utils/request'
const apipath = window.appConf.api
export const getTasks = (params: any) =>
  request({
    url: apipath.tasks,
    method: 'get',
    params
  })

  export const getRecords = (params: any) =>
  request({
    url: apipath.records,
    method: 'get',
    params
  })
