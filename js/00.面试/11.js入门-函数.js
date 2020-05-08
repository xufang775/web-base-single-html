/**

① JS 函数——养成函数思维》[编号：js_05]
涉及面试题：
1. 写一个函数，返回参数的平方和？
    function sumOfSquares() {
      // 补全

    }
    var result = sumOfSquares(2, 3, 4)  // 2*2 + 3*3 + 4*4 = 29
    var result2 = sumOfSquares(1, 3)   // 1*1+3*3=10
    console.log(result) // 29
    console.log(result2) // 10

2. 如下代码的输出？为什么？
  sayName("world");   // hello world
  sayAge(10);   // 报错
  function sayName(name) {
    console.log("hello ", name);
  }
  var sayAge = function(age) {
    console.log(age);
  };

3. 如下代码的输出？为什么？
  var x = 10;
  bar()   // 30
  function bar() {
    var x = 30;
    function foo() {
      console.log(x) 
    }
    foo();
  }

4. 如下代码的输出？为什么？
    var x = 10
    bar()    // 10
    function foo() {
      console.log(x)
    }
    function bar() {
      var x = 30
      foo()
    }

5. 如下代码的输出？为什么？
  var a = 1
  function fn1() {
    function fn3() {
      function fn2() {
        console.log(a)
      }
      fn2()
      var a = 4
    }
    var a = 2
    return fn3
  }
  var fn = fn1()
  fn() // ？  undefined

6. 如下代码的输出？为什么？
  var a = 1
  function fn1() {
    function fn2() {
      console.log(a)
    }
    function fn3() {
      var a = 4
      fn2()
    }
    var a = 2
    return fn3
  }
  var fn = fn1()
  fn() // ？  2

7. 如下代码的输出？为什么？
  var a = 1
  function fn1() {
    function fn3() {
      var a = 4
      fn2()
    }
    var a = 2
    return fn3
  }
  function fn2() {
    console.log(a)
  }
  var fn = fn1()
  fn() // ？  输出：1

8. 如下代码的输出？为什么？
    var a = 1
    var c = {name: "oli", age: 2}
    function f1(n) {
      ++n
    }
    function f2(obj) {
      ++obj.age
    }
    f1(a)   // 2
    f2(c)   // 3
    f1(c.age) // 3
    console.log(a) // 2
    console.log(c) // {name: "oli", age: 3}

9. 如下代码的输出？为什么？
  var obj1 = {a:1, b:2};
  var obj2 = {a:1, b:2};
  console.log(obj1 == obj2);  // false
  console.log(obj1 = obj2);   // {a:1,b:2}
  console.log(obj1 == obj2);  // true
 
 */

/**
1. 写一个函数，返回参数的平方和？
function sumOfSquares() {
  // 补全
  
}
var result = sumOfSquares(2, 3, 4)  // 2*2 + 3*3 + 4*4 = 29
var result2 = sumOfSquares(1, 3)   // 1*1+3*3=10
console.log(result) // 29
console.log(result2) // 10
*/
{
function sumOfSquares() {
  // 补全
  console.log(arguments);
  console.log(Array.from(arguments));
  return Array.from(arguments)
  .reduce((sum,item)=>sum+item*item ,0);
}
var result = sumOfSquares(2, 3, 4)  // 2*2 + 3*3 + 4*4 = 29
var result2 = sumOfSquares(1, 3)   // 1*1+3*3=10
console.log(result) // 29
console.log(result2) // 10
}

/**
2. 如下代码的输出？为什么？
sayName("world");   // hello world
sayAge(10);   // 报错
function sayName(name) {
  console.log("hello ", name);
}
var sayAge = function(age) {
  console.log(age);
};
*/
{
  console.log('');
  console.log('==== 2. ');

  sayName("world");   // hello world
  // sayAge(10);   // 报错
  function sayName(name) {
    console.log("hello ", name);
  }
  var sayAge = function(age) {
    console.log(age);
  };
}

/**

3. 如下代码的输出？为什么？
var x = 10;
bar()   // 30
function bar() {
  var x = 30;
  function foo() {
    console.log(x) 
  }
  foo();
}

*/
{
  console.log();
  console.log('==== 3. ');

  var x = 10;
  bar()   // 30
  function bar() {
    var x = 30;
    function foo() {
      console.log(x) 
    }
    foo();
  }
}


/**
 4. 如下代码的输出？为什么？
  var x = 10
  bar()    // 10
  function foo() {
    console.log(x)
  }
  function bar() {
    var x = 30
    foo()
  }
 */
{
  console.log();
  console.log('==== 4. ');
  var x = 10
  bar()    // 10
  function foo() {
    console.log(x)
  }
  function bar() {
    var x = 30
    foo()
  }
}

/**
 * 5. 如下代码的输出？为什么？
  var a = 1
  function fn1() {
    function fn3() {
      function fn2() {
        console.log(a)
      }
      fn2()
      var a = 4
    }
    var a = 2
    return fn3
  }
  var fn = fn1()
  fn() // ？  undefined
 */
{
  console.log();
  console.log('==== 5. ');
  var a = 1
  function fn1() {
    function fn3() {
      function fn2() {
        console.log(a)
      }
      fn2()
      var a = 4
    }
    var a = 2
    return fn3
  }
  var fn = fn1()
  fn() // ？  undefined
}

/**
 * 6. 如下代码的输出？为什么？
  var a = 1
  function fn1() {
    function fn2() {
      console.log(a)
    }
    function fn3() {
      var a = 4
      fn2()
    }
    var a = 2
    return fn3
  }
  var fn = fn1()
  fn() // ？  2
 */

 {
  console.log();
  console.log('==== 6. ');
  var a = 1
  function fn1() {
    function fn2() {
      console.log(a)
    }
    function fn3() {
      var a = 4
      fn2()
    }
    var a = 2
    return fn3
  }
  var fn = fn1()
  fn() // ？  2
 }

 /**
  7. 如下代码的输出？为什么？
  var a = 1
  function fn1() {
    function fn3() {
      var a = 4
      fn2()
    }
    var a = 2
    return fn3
  }
  function fn2() {
    console.log(a)
  }
  var fn = fn1()
  fn() // ？  输出：1
  */

  {
  console.log();
  console.log('==== 7. ');
  var a = 1
  function fn1() {
    function fn3() {
      var a = 4
      fn2()
    }
    var a = 2
    return fn3
  }
  function fn2() {
    console.log(a)
  }
  var fn = fn1()
  fn() // ？  输出：1
  }

  /**
  8. 如下代码的输出？为什么？
  var a = 1
  var c = {name: "oli", age: 2}
  function f1(n) {
    ++n
  }
  function f2(obj) {
    ++obj.age
  }
  f1(a)   // 2
  f2(c)   // 3
  f1(c.age) // 3
  console.log(a) // 2
  console.log(c) // {name: "oli", age: 3}
   */

{
  console.log();
  console.log('==== 8. '); 

  var a = 1
  var c = {name: "oli", age: 2}
  function f1(n) {
    ++n
  }
  function f2(obj) {
    ++obj.age
  }
  f1(a)   // 2
  f2(c)   // 3
  f1(c.age) // 3
  console.log(a) // 1
  console.log(c) // {name: "oli", age: 3}
}


/**
 9. 如下代码的输出？为什么？
  var obj1 = {a:1, b:2};
  var obj2 = {a:1, b:2};
  console.log(obj1 == obj2);  // false
  console.log(obj1 = obj2);   // {a:1,b:2}
  console.log(obj1 == obj2);  // true
 */
{
  console.log();
  console.log('==== 9. '); 
  
  var obj1 = {a:1, b:2};
  var obj2 = {a:1, b:2};
  console.log(obj1 == obj2);  // false
  console.log(obj1 = obj2);   // {a:1,b:2}
  console.log(obj1 == obj2);  // true
}