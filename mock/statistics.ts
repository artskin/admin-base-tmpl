
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
enum zhengfu{
  "-",
  "+"
}
enum Icontype{
  'el-icon-data-line',
  'el-icon-coin',
  'el-icon-sell',
  'el-icon-user'
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
          "value": Random.integer(0,100000),
          "percent": zhengfu[Random.integer(0,1)] + Random.integer(0,4000)/100,
          "icon":Icontype[i]
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