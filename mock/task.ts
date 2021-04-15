
import { MockMethod } from 'vite-plugin-mock';

const Mock = require('mockjs')
const Random = Mock.Random;

enum sourceType{
  'UNKNOWN',
  'VN_RTSP',
  'VN_ONVIF',
  'FC_SENSEPASS'
}
// //const tasksList: taskType[] = [];

export default [
  {
    url: '/task/list',
    method: 'get',
    timeout: 200,
    response: ({body})=>{
      console.log('body==>', body);
      const tasksList = [];
      const tasksCount = 20;
      for (let i = 0; i < tasksCount; i++) {
        tasksList.push({
          "task_id": Random.id(),
          "status": Random.boolean(),
          "timestamp":Random.date(),
          "title":Random.name(10),
          "source": {
            "type": sourceType[0],
            "parameter": {
              "rtsp": {
                //"url":faker.internet.url()
              },
              "onvif": {
                //"host": faker.internet.ip()
              },
              "sensepass": {
                "device_sn": 'sssssasa'
              }
            }
          }
        })
      }
      return {
        code: 2000,
        message: 'ok',
        data:{
          list:tasksList
        }
      }
    },
  }
] as MockMethod[];