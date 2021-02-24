import { MockMethod } from 'vite-plugin-mock';
// import mockjs from 'mockjs'
// console.log(mockjs)
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
      //console.log(mockjs.mock('name'))
      const tasksList = [];
      const tasksCount = 30;
      for (let i = 0; i < tasksCount; i++) {
        tasksList.push({
          "task_id": '12213',
          "status": 1,
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
        code: 20000,
        message: 'ok',
        data:{
          list:tasksList
        }
      }
    },
  }
] as MockMethod[];