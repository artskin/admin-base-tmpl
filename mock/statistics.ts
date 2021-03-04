
import { MockMethod } from 'vite-plugin-mock';

const Mock = require('mockjs');
const Random = Mock.Random;
//console.log(Random)
enum dimensionItems{
  'Visitor',
  'Saler',
  'Viper',
  'Stranger'
}
// //const tasksList: taskType[] = [];

export default [
  {
    url: '/statistics/total',
    method: 'get',
    timeout: 200,
    response: ({body})=>{
      // console.log('body==>', body);
      const tasksList = [];
      const tasksCount = 4;
      for (let i = 0; i < tasksCount; i++) {
        tasksList.push({
          "name": dimensionItems[i] || 'default',
          "number": Random.integer(0,100000),
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