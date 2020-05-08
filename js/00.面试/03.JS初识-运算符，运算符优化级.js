/**
② 运算符、运算符优先级》[编号：js_02]

涉及面试题：
 1. NaN 是什么？有什么特别之处？
 2. == 与 === 有什么区别？
 3. console.log(1+"2") 和 console.log(1-"2") 的打印结果？
 答：12    -1
 4. 为什么 console.log(0.2+0.1==0.3) 输出 false ？
 5. 请用三元运算符（问号冒号表达式）改写以下代码：
    if(a > 10) {
      b = a
    }else {
      b = a - 2
    }
  答：b = a > 10 ? a : a-2;


 6. 以下代码输出的结果是？
    var a = 1;  
    a+++a;  
    typeof a+2;   // 先算 typeof a ： 得到 number; 再与2拼接
  答：number2

 7. 以下代码输出什么？
    var d = a = 3, b = 4
    console.log(d)
  答：3

 8. 以下代码输出什么？
    var d = (a = 3, b = 4)
    console.log(d)
  符：4

 9. 以下代码输出结果是？为什么？
    var a = 1, b = 2, c = 3;
    var val = typeof a + b || c >0
    console.log(val)  // 输出: true
    var d = 5;
    var data = d ==5 && console.log('bb')
    console.log(data)  // 输出：false
    var data2 = d = 0 || console.log('haha')
    console.log(data2)  // 输出：false
    var x = !!"Hello" + (!"world", !!"from here!!");
    console.log(x) 

10. 以下代码输出结果是？为什么？
    var a = 1;
    var b = 3;
    console.log( a+++b );

11. 以下代码输出的结果是？为什么？
    console.log(1+1);
    console.log("2"+"4");
    console.log(2+"4");
    console.log(+"4");

作者：itsOli
链接：https://juejin.im/post/5ce4171ff265da1bd04eb4f3
来源：掘金
 */

// 3. console.log(1+"2") 和 console.log(1-"2") 的打印结果？
console.log('==== 3. console.log(1+"2") 和 console.log(1-"2") 的打印结果？');

console.log(1+"2");   // + 被看作为拼接运算符
console.log(1-"2")    // - 作为运算符

/**
 * 4. 为什么 console.log(0.2+0.1==0.3) 输出 false ？
 * 答：因为+被作为字符串连接符，所以 0.2+0.1 得到： 0.20.1，所以得到false
 */
console.log('==== 4.为什么 console.log(0.2+0.1==0.3) 输出 false ？');
console.log(0.2+0.1);
console.log(0.2+0.1==0.3)

/**
 * 6. 以下代码输出的结果是？
    var a = 1;  
    a+++a;  
    typeof a+2;
 */
  var a = 1;  
  a+++a;  
 console.log(typeof a+2);

/**
 * 7. 以下代码输出什么？
    var d = a = 3, b = 4
    console.log(d)  // 3
 */
console.log('');
console.log('==== 7. ');
var d = a = 3, b = 4
console.log(d)


/**
 * 8. 以下代码输出什么？
    var d = (a = 3, b = 4)
    console.log(d)
 */
console.log('');
console.log('==== 8. ');
var d = (a = 3, b = 4)
console.log(d)


/**
 * 9. 以下代码输出结果是？为什么？
    var a = 1, b = 2, c = 3;
    var val = typeof a + b || c >0
    console.log(val)  // 输出: true
    var d = 5;
    var data = d ==5 && console.log('bb')
    console.log(data)  // 输出：false
    var data2 = d = 0 || console.log('haha')
    console.log(data2)  // 输出：false
    var x = !!"Hello" + (!"world", !!"from here!!");
    console.log(x) 
 */
console.log('');
console.log('==== 9. ');
var a = 1, b = 2, c = 3;
var val = typeof a + b || c >0
console.log(val)  // 输出: true
var d = 5;
var data = d ==5 && console.log('bb')
console.log(data)  // 输出：false
var data2 = d = 0 || console.log('haha')
console.log(data2)  // 输出：false
var x = !!"Hello" + (!"world", !!"from here!!");
console.log(x) 
