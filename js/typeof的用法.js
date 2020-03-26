/**
 * typeof返回一个表示数据类型的字符串。
 * 返回结果包括：number,string,boolean,symbol,object,undefined,function等7种类型，
 * 但不能判断null，array等
 */

 console.log(typeof Symbol());  // symbol有效
 console.log(typeof '');  // string有效
 console.log(typeof 1);  // number 有效
 console.log(typeof true);  // boolean 有效
 console.log(typeof undefined);  // undefined 有效
 console.log(typeof new Function());   // function 有效
 console.log(typeof null);   // object 无效
 console.log(typeof []);   // object 无效
 console.log(typeof new Date());   // object 无效
 console.log(typeof new RegExp());   // object 无效

 
 
 