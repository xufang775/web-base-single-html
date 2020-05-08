/**
 * Module的语法
    * 1.概述
    * 2.严格模式
    * 3.export命令
    * 4.import命令
    * 5.模块的整体加载
    * 6.export default命令
    * 7.export与import的复合写法
    * 8.模块的继承
    * 9.跨模块常量
    * 10.import()
    * 
    * 2.严格模式
    * ES6的模块自动采用严格模式，不管你有没有在模块上头部加上“use strict”。
 */


// 3.export命令
/*
3.export命令

模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，
import命令用于输入其他模块提供的功能。

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部
能够读取模块内部的某个变量，就必须使用export关键字输出该变量。下面是一个JS文件，
里面使用export命令输出变量。
*/

// 注意，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系
// export 1;  // 报错
var m = 1;
// export m;  // 报错


/*
最后，export命令可以出现在模块的任何位置，只要处于模块的顶层就可以。如果处于块级作用
域内，就会报错，下一节的import命令也是如此。这是因为处于条件代码之中，就没法做静态
优化了，违背了ES模块的设计初衷。  
*/
// function foo(){
//   export default 'bar'  // SyntaxError
// }
// foo()


// 10.import()