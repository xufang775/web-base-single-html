/*
闭包：
1. 概念
闭包函数：声明在一个函数中的函数，叫做闭包函数。
闭包：内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回了之后。

2. 特点
  1. 让外部访问函数内部变量成为可能
  2. 局部变量会常驻在内在中
  3. 可以避免使用全局变量，防止全局变量污染
  4. 会造成内在泄漏（有一块内在空间被长期占用，而不被释放）

3. 闭包的创建：

*/

/*例子1 */
// function funA(){
//   var a = 10;   // funA的活动对象之中
//   return function(){  // 匿名函数的活动对象；
//     alert(a)
//   }
// }
// var b = funA();
// b();  // 10



/** 例子2 */
// function outerFn(){
//   var i = 0;
//   function innerFn(){
//     i++;
//     console.log(i);
//   }
//   return innerFn;
// }
// // 每次外部函数执行的时候，外部函数的地址不同，都会重新创建一个新的地址
// var inner = outerFn();  
// inner();
// inner();
// inner();
// var inner2 = outerFn();
// inner2();
// inner2();
// inner2();
// // 1 2 3 1 2 3



// /** 例子3 */
// var i = 0;
// function outerFn(){
//   function innerFn(){
//     i++;
//     console.log(i);
//   }
//   return innerFn;
// }
// var inner1 = outerFn();
// var inner2 = outerFn();
// inner1();
// inner2();
// inner1();
// inner2();


/** 例子4 */
// function fn(){
//   var a = 3;
//   return function(){
//     return ++a;
//   }
// }
// alert(fn()())  // 4
// alert(fn()())  // 4



/** 例子5 */

// function outerFn(){
//   var i = 0;
//   function innerFn(){
//     i++;
//     console.log(i);
//   }
//   return innerFn;
// }
// var inner1 = outerFn();
// var inner2 = outerFn();
// inner1();
// inner2();
// inner1();
// inner2();
// // 1 1 2 2

/** 例子6 */
// (function(){
//   var m = 0;
//   function getM() { return m; }
//   function seta(val) { m = val; }
//   window.g = getM;
//   window.f = seta;
// })()
// f(100);
// console.log(g());  // 100 闭包找到的是同一地址中父级函数中对应变量最终的值


/** 例子7 */
// function a(){
//   var i = 0;
//   function b() {
//     alert(++i)
//   }
//   return b;
// }
// var c = a();
// c();  // 1
// c();  // 2


/** 例子8 */
// function f(){
//   var count = 0;
//   return function(){
//     count++;
//     console.log(count);
//   }
// }
// var t1 = f();
// t1();
// t1();
// t1();

/** 例子9 */
// var add = function(x){
//   var sum = 1;
//   var tmp = function(x){
//     sum = sum + x;
//     return tmp;
//   }
//   tmp.toString = function(){
//     return sum;
//   }
//   return tmp;
// }
// console.log(add(1)(2)(3)(4));   // 6


// var lis = document.getElementsByTagName("li");
// for(var i = 0;i<lis.length;i++){
//   (function(i){
//     lis[i].onclick = function(){
//       console.log(i);
//     }
//   })(i)   // 事件处理函数中闭包的写法
// }

/** 例子11 */
// function m1(){
//   var x = 1;
//   return function(){
//     console.log(++x);
//   }
// }
// m1()();  // 2
// m1()();  // 2
// m1()();  // 2

// var m2 = m1();
// m2();  // 2
// m2();  // 3
// m2();  // 4


/** 例子12 */
// var fn = (function(){
//   var i = 10;
//   function fn(){
//     console.log(++i);
//   }
//   return fn;
// })()
// fn();   // 11
// fn();   // 12


/** 例子13 */
// function love1(){
//   var num = 223
//   var me1 = function(){
//     console.log(num);
//   }
//   num ++ ;
//   return me1;
// }
// var loveme1 = love1();
// loveme1();  // 输出224



/** 例子14 */
function fun(n,o){
  console.log(o);
  return {
    fun: function(m){
      return fun(m,n)
    }
  };
}
var a = fun(0);  //undefined
a.fun(1);  //0  
a.fun(2);  //0  
a.fun(3);  //0  
var b = fun(0).fun(1).fun(2).fun(3);   //undefined  0  1  2
var c = fun(0).fun(1);  
c.fun(2);  
c.fun(3);  //undefined  0  1  1



/** 例子15 */
function fn(){
  var arr = [];
  for(var i = 0;i < 5;i ++){
    arr[i] = function(){
      return i;
    }
  }
  return arr;
}
var list = fn();
for(var i = 0,len = list.length;i < len ; i ++){
  console.log(list[i]());
}  //5 5 5 5 5



/** 例子16 */
function fn(){
  var arr = [];
  for(var i = 0;i < 5;i ++){
	arr[i] = (function(i){
		return function (){
			return i;
		};
	})(i);
  }
  return arr;
}
var list = fn();
for(var i = 0,len = list.length;i < len ; i ++){
  console.log(list[i]());
}  //0 1 2 3 4