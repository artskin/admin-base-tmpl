import request from '@/utils/request'
const apipath = window.appConf.api
export const getStatistics = () =>
  request({
    url: `${apipath.statistics}`,
    method: 'get'
  })

export const getToplist = () => request({
    url: `${apipath.top}/list`,
    method: 'get'
  })
export const getTopitems = () => request({
  url: `${apipath.top}/items`,
  method: 'get'
})