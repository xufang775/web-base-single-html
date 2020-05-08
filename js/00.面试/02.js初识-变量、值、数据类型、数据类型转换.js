/**
③ 变量、值、数据类型、数据类型转换》[编号：js_03]
涉及面试题：
1. JavaScript 定义了几种数据类型？哪些是原始类型？哪些是复杂类型？null 是对象吗？
2. 对象类型和原始类型的不同之处？函数参数是对象会发生什么问题？
3. 怎样判断“值”属于哪种类型？typeof 是否能正确判断类型？instanceof 呢？
   instanceof 有什么作用？内部逻辑是如何实现的？
4. null，undefined 的区别？
5. 说一下 JS 中类型转换的规则？
6. 以下代码的输出？为什么？
  console.log(a);     // undefined
  var a = 1;
  console.log(b);     // 报错

7. 以下代码输出什么？
  var a = typeof 3+4
  console.log(a)   // number4

8. 以下代码输出什么？
  var a = typeof typeof 4+4
  console.log(a)  // string4

作者：itsOli
链接：https://juejin.im/post/5ce4171ff265da1bd04eb4f3
来源：掘金

 */

/**
 * 6. 以下代码的输出？为什么？
  console.log(a);     // undefined
  var a = 1;
  console.log(b);     // 报错，b没有定义
 */
console.log('');
console.log('==== 6. ');
console.log(a);     // undefined
var a = 1;
// console.log(b);     // 报错


/**
 * 7. 以下代码输出什么？
  var a = typeof 3+4
  console.log(a)   // number4
 */
console.log('');
console.log('==== 7. ');
var a = typeof 3+4
console.log(a)   // number4


/**
 * 8. 以下代码输出什么？
  var a = typeof typeof 4+4
  console.log(a)  // string4
 */
console.log('');
console.log('==== 8. ');
var a = typeof typeof 4+4
console.log(a)  // string4