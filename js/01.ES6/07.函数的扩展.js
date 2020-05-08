/**
 * 函数的扩展
 * 
 * 1. 函数参数的默认值
 * 2. rest参数
 * 3. 严格模式
 * 4. name属性
 * 5. 箭头函数
 * 6. 尾调用优化
 * 7. 函数参数的尾逗号
 * 8. Function.prototype.toString()
 * 9. catch 命令的参数省略
 */
// import {titleArr2,log2} from './00.common';
 var titleArr = [];
 function log1(fn=null,titleAll = titleArr){
  console.log();
  var titleStr = titleArr.join('==')
  console.log(titleStr);
  
  fn && fn();
 }

/**
* 1. 函数参数的默认值
*/

{
  titleArr[0] = "1.函数参数的默认值";
  // 基本用法
  {
    // ES6之前，不能直接为函数的参数指定默认值，只能采用变通的方法。
    // 但 y 不能是 布局值false,否则赋值没有作用
    {
      console.log('1.函数参数的默认值==基本用法-ES5用法');
      

      function log(x,y){
        y = y || 'World';
        console.log(x,y);
      }
      log('hello'); // hello world
      log('hello','china');
      log('hello','')
    }


    // 基本用法
    // 为了避免上面的问题，通常需要先判断参数y是否被赋值，如果没有，
    // 再等于默认值
    {
      console.log('1.函数参数的默认值==基本用法-ES5用法-改进');
      

      function log(x,y){
        // y = y || 'World';
        if(typeof y === 'undefined'){
          y = 'world'
        }
        console.log(x,y);
      }
      log('hello'); // hello world
      log('hello','china');
      log('hello',false);
      log('hello','')
    }

    // 基本用法
    // ES6允许为函数的参数设置默认值，即直接写在参数定义的后面。
    {
      console.log('1.函数参数的默认值==基本用法-ES6用法');
      

      function log(x,y='world'){
        // y = y || 'World';
        // if(typeof y === 'undefined'){
        //   y = 'world'
        // }
        console.log(x,y);
      }
      log('hello'); // hello world
      log('hello','china');
      log('hello',false);
      log('hello','')
    }

    // 基本用法
    // ES6允许为函数的参数设置默认值，即直接写在参数定义的后面。
    {
      console.log('1.函数参数的默认值==基本用法-ES6用法-另一个例子');
      
      function Point(x=0,y=0){
        this.x = x;
        this.y = y;
      }
      const p = new Point();
      console.log(p);
      

      // 参数变量是默认声明的，所以不能用let或const 再次声明
      function foo(x=5){
        // let x = 1; // error
        // const x = 2; // error
      }
    }

    // 基本用法
    // 参数默认值不是传值的，而是每次都重新计算默认值表达式的值。
    // 也就是说，参数默认值是惰性求值。
    {
      console.log('1.函数参数的默认值==基本用法-ES6用法-惰性求值');
      
      let x = 99;
      function foo(p = x + 1){
        console.log(p);
      }
      foo();  // 100
      x=100;
      foo();  // 101
    }
  }

  titleArr[1] = "与解构赋值默认值结合使用";
  {
    log1(()=>{
      function foo({x,y=5}){
        console.log(x,y);
      }
      foo({});
      foo({x:1});
      foo({x:1,y:2})
    })
  }

  titleArr[1] = "参数默认值的位置";
  {
    log1(()=>{
      // 例一
      function f(x=1,y){
        return [x,y]
      }
      console.log(f());
      console.log(f(2));
      
    })
  }

  titleArr[1] = "函数的length属性"
  // 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。
  // 也就是说，指定了默认值后，length属性将失真。
  {
    log1(()=>{
      console.log( (function(a){}).length );   // 1
      console.log( (function(a=5){}).length );  // 0
      
    })
    
  }

  titleArr[1] = "作用域"
  /** 作用域
   * 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域。
   */
  {
    log1(()=>{
      {
        var x = 1;
        function f(x,y=x){
          console.log(y);
        }
        f(2) // 2
      }

      // 另一个例子
      {
        let x = 1;
        function f(y = x){
          let x = 2;
          console.log(y);
        }
        f();   // 1
      }

      // 函数的作用域也遵守这个规则
      {
        let foo = 'outer';
        function bar(func = ()=> foo){
          let foo = 'inner'
          console.log(func());
        }
        bar();  // outer
      }

      // 更复杂的例子
      var x = 1;
      function foo(x,y=function(){x=2;}){
        var x = 3;
        y();
        console.log(x);
      }
      foo()  // 3
      x;  // 1
    })
  }

}

/**
 * 2. rest参数
 * ES6引入了 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要
 * 使用 arguments 对象了。rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
 * 
 * rest参数的特点：
 * 1. rest参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
 * 2. 函数的length属性，不包括rest参数。
 */
{
  titleArr=['2.rest参数'];
  
  function add(...values){
    let sum = 0;
    for(var val of values){
      sum += val;
    }
    return sum;
  }
  console.log( add(2,5,3) )  // 10
}

/**
 * 4. name 属性
 * 函数的 name 属性，返回该函数的函数名
 */
{
  titleArr=['4.name属性'];
  log1(()=>{
    {
      function foo(){}
      console.log(foo.name);
    }
  
    // 如果将一个匿名函数赋值给一个变量，ES5的name属性，会返回空字符串，
    // 而ES6的name属性会返回实际的函数名。
    {
      var f = function(){};
      console.log(f.name);
      
    }
  })
}

/**
 * 5. 箭头函数
 * 
 */
{
  titleArr=['5.箭头函数'];
  titleArr[1]="基本用法"

  // ES6允许使用“箭头”（=>）定义函数。
  log1(()=>{
    var f = v => v;

    // 等同于
    var f = function(v){
      return v;
    }
  })

  // 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代码参数部分
  var f = ()=>5;
  //等同于
  var f = function(){ return 5 };

  var sum = (num1,num2)=>num1+num2;
  // 等同于
  var sum = function(num1,num2){
    return num1 + num2;
  }

  // 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用
  // return 语句返回。


  /**
   * 箭头函数有几个使用注意点
   * 1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
   * 2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
   * 3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用rest参数代替。
   * 4）不可以使用yield命令，因此箭头函数不能用作Generator函数。
   */
  {
    titleArr[1]='注意点';
    titleArr[2]='this指向-例子1'
    log1(()=>{
      function foo(){
        setTimeout(()=>{
          console.log('id:',this.id);
        },100);
      }
      var id = 21;
      foo.call({id:42})
    })

    log1(()=>{
      function Timer(){
        this.s1 = 0;
        this.s2 = 0;
        // 箭头函数
        setInterval(()=>this.s1++,1000);
        // 普通函数
        setInterval(function(){
          this.s2++;
        },1000);
      }
      var timer = new Timer();
  
      setTimeout(()=>console.log('s1:',timer.s1),3100);
      setTimeout(()=>console.log('s2:',timer.s2),3100);
    })

    // 请问下面的的代码之中有几个this?
    titleArr[2]='有几个this'
    log1(()=>{
      
      function foo(){
        return ()=>{
          return ()=>{
            return ()=>{
              console.log('id:',this.id);
            }
          }
        }
      }

      var f = foo.call({id:1});

      var t1 = f.call({id:2})()();
      var t2 = f().call({id:2})();
      var t3 = f()().call({id:2});
    })
    
  }

  /**
   * 不适用场合（由于箭头函数使得this从“动态”变成“静态”，有两个场合不适合）：
   * 1）定义对象的方法，且该方法内部包括this
   * 2）需要动态this的时候，也不应使用箭头函数。
   */

}
