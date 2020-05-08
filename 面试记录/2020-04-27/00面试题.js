/**
 * 
 * 1. doctype作用？严格模式和混杂模式如何区分？它们有何意义？
 * 答：
 * 1）doctype声明位于文档的最前面。告知浏览器以何种模式来渲染文档。
 * 2）严格模式的排版和JS运作模式是以该浏览器支持的最高标准运行。
 * 3）在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以
 *   防止站点无法工作。
 * 4）DOCTYPE不存在或格式不正确导致文档以混杂模式呈现。
 * 
 * 
 * 2. cookie,localStorage,sessionStorage的区别
 * 答：这3项有4点不同。分别是：
 * 数据的生命周期：
 *  cookie一般是由服务端生成的，可以设置失效时间；若是由客户端生成，则当浏览器关闭时就被释放。
 *  localStorage是永久的本地存储，除了手动删除；sessionStorage是临时存储，当浏览器或会话关闭时，
 *  则被释放。
 * 数据量的大小：
 *  cookie一般在4k，而localStorage,sessionStorage数据一般在5m左右。
 * 与服务端通信：
 *  cookie每次都会携带在http头中，如果使用cookie保存过多数据会带性能问题。而localStorage,
 *  sessionStorage仅在客户端保存，不参与服务端的通信。
 * 易用性：
 *  cookie需要程序自己封装，源生的cookie接口不友好；而localStorage,sessionStorage源生接口
 *  可以接受，也可再次封装来对Object和Array有更好的支持。
 * 
 * 
 * 3. 浏览器标签页之间的传值方式？
 * 答：
 * 1. 使用拼接地址的方法，
 * 2. 使用cookie保存数据
 * 3. 使用localStorage来保存数据
 * 
 * 4. BFC的特性，如何创建BFC
 * 答：
 * 
 * 
 * 
 * 5. 两个相邻的 inline-block 为什么有间隔？如何消除？
 * 答：
 * 产生间隔的原因：
 * 当一个标签结束时，都习惯敲一次回车，而回车会产生回车符，相当于空白符；
 * 但多个空白符会压缩成一个空白符，正是这个习惯照了空白间隔。
 * 消除方法：
 * 1. 从html结构上，不在结束标签后，使用换行符。
 * 2. 从css设置上，空白符也算字符，可以通过 font-size:0 来消除间隔。
 * 
 * 6. undefined 和 not defined 的区别？
 * 答：
 * undefined为变量正常的数据类型，不是报错；而not defined是指变量没有定义，是报错。
 * 
 * 
 * 7. 下面代码输出什么？
 *   var k = 1;
 *   if(1){
 *    function foo(){}
 *    k += typeof foo;
 *   }
 *   console.log(k);
 * 8. 下面代码输出什么？
 *   var arr = [1,2,3];
 *   var arr2 = [...arr];
 *   arr2.push(4);
 *   console.log(arr)
 * 9. this的指向
 * 10. 如果进行浮点值的精确计算。
 * 
 * 自我介绍，
 * 如何自学的？


 */

 // 3. 浏览器标签页之间的传值方式？
 /**
  * 1. 发请求。在页面跳转前，先发个请求后后台将值存储到session中，
  * 跳转后再发个请求到后台取出。不过这种方式不仅慢而且还特别耗费资源。
  * 2. 使用拼接地址的方法，即在跳转地址后面拼接参数。这种方法简单有效，但数据量有限制。
  */

 /**
  * 7. 代码输出？
  */
  {
    var k = 1;
    if(1){
     function foo(){}
     k += typeof foo;
    }
    console.log(k);
  }

 /**
  * 8. 代码输出？
  */
 {
    var arr = [1,2,3];
    var arr2 = [...arr];
    arr2.push(4);
    console.log(arr);
 }