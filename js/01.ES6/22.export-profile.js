export var firstName = 'xufang';
export var lastName = '112233';
export var year = 1958;

// export与import的复合写法
export {name,age} from './22.export-common';
// 接口改名
export {name as myname} from './22.export-common'
// 整体输出
export * from './22.export-common'
// 默认接口的写法如下：
export { default } from './22.export-common'
// 具名接口改为默认接口的写法如下。
export { name as defaultName } from './22.export-common'
// 等同于
import {name as name1} from './22.export-common'
export default name1;


// var firstName = 'xufang';
// var lastName = '123123';
// var year = 1958;

// // export命令除了输出变量，还可以输出函数或类（class）
// function multiply(x,y){
//   return x * y;
// }

// export {
//   firstName,
//   lastName,
//   year,
//   multiply,
//   multiply as mul, // export输出的变量就是本来的名字，但是可以使用as关键字重命名  
// };