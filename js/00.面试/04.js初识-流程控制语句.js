/**
④ 流程控制语句》[编号：js_04]
涉及面试题：
1. break 与 continue 有什么区别？
2. switch...case 语句中的 break 有什么作用？
3. for...of、 for...in 和 forEach、map 的区别？
4. 写出如下知识点的代码范例：
    ① if...else 的用法；
    ② switch...case 的用法；
    ③ while 的用法；
    ④ do...while 的用法；
    ⑤ for 遍历数组的用法；
    ⑥ for...in 遍历对象的用法；
    ⑦ break 和 continue 的用法。

5. 以下代码输出什么？
  var a = 2
  if(a = 1) {
    console.log("a 等于 1")
  }else {
    console.log("a 不等于 1")
  }

 */

/**
 * 5. 以下代码输出什么？
  var a = 2
  if(a = 1) {
    console.log("a 等于 1")  // 输出
  }else {
    console.log("a 不等于 1")
  }
 */

var a = 2
if(a = 1) {
  console.log("a 等于 1")
}else {
  console.log("a 不等于 1")
}