/**
JS 函数：② 嵌套函数、作用域和闭包
涉及面试题：
1. 闭包是什么？闭包的作用是什么？闭包有哪些使用场景？
2. 使用递归完成 1 到 100 的累加？
3. 谈谈垃圾回收机制的方式及内存管理？
4. 谈谈你对 JS 执行上下文栈和作用域链的理解？


 */


/**

5. 如下代码输出多少？如果想输出 3，那如何改造代码？
var fnArr = [];
for(var i=0; i<10; i++) {
  fnArr[i] =  function() {
    return i
  };
}
console.log(fnArr[3]())

 */
{
  console.log();
  console.log('==== 5. ');

  var fnArr = [];
  for(var i=0; i<10; i++) {
    fnArr[i] =  function() {
      return i
    };
  }
  console.log(fnArr[3]())
  
  // 改造后：
  console.log('===改造后：');
  
  var fnArr = [];
  for(var i=0; i<10; i++) {
    fnArr[i] =  (function(i) {
      return function(){
        return i;
      }
    })(i);
  }
  console.log(fnArr[3]())
}



/**
6. 封装一个 Car 对象。
var Car = (function() {
  var speed = 0;
  // 补充
  return {
    setSpeed: setSpeed,
    getSpeed: getSpeed,
    speedUp: speedUp,
    speedDown: speedDown
  }
})()
Car.setSpeed(30)
Car.getSpeed() // 30
Car.speedUp()
Car.getSpeed() // 31
Car.speedDown()
Car.getSpeed() // 30

 */

{
  console.log();
  console.log('==== 6. ');
  

  var Car = (function() {
    var speed = 0;
    // 补充
    function setSpeed(value){
      speed = value;
    }
    function getSpeed(){
      console.log(speed);
    }
    function speedUp(){
      speed++;
    }
    function speedDown(){
      speed--;
    }

    return {
      setSpeed: setSpeed,
      getSpeed: getSpeed,
      speedUp: speedUp,
      speedDown: speedDown
    }
  })()
  Car.setSpeed(30)
  Car.getSpeed() // 30
  Car.speedUp()
  Car.getSpeed() // 31
  Car.speedDown()
  Car.getSpeed() // 30

}

/**
 * 7. 如下代码输出多少？如何连续输出 0，1，2，3，4？
  for(var i=0; i<5; i++) {
    setTimeout(function() {
      console.log("delayer:" + i)
    }, 0)
  }
 */

{
  console.log();
  console.log('==== 7. ');
  

  for(var i=0; i<5; i++) {
    setTimeout(function() {
      console.log("delayer:" + i)
    }, 0)
  }
  // 输出：5 5 5 5 5
  
  // 方法一
  for(var i=0;i<5;i++){
    (function(i){
      setTimeout(function(){
        console.log("delayer:" + i)
      },0)
    })(i)
  }

  // 方法二
  for(let i=0; i<5; i++) {
    setTimeout(function() {
      console.log("delayer:" + i)
    }, 0)
  }

  // 方法三
  for(var i=0; i<5; i++) {
    setTimeout(function(i) {
      return function(){
        console.log("delayer:" + i)
      }
    }(i), 0)
  }
}


/**
 * 
8. 如下代码输出多少？
  function makeCounter() {
    var count = 0
    return function() {
      return count++
    };
  }
  var counter = makeCounter()
  var counter2 = makeCounter();
  console.log(counter()) // 0
  console.log(counter()) // 1
  console.log(counter2()) // ？
  console.log(counter2()) // ？

 */
{
  console.log();
  console.log('==== 8. ');
  
  function makeCounter() {
    var count = 0
    return function() {
      return count++
    };
  }
  var counter = makeCounter()
  var counter2 = makeCounter();
  console.log(counter()) // 0
  console.log(counter()) // 1
  console.log(counter2()) // ？  0
  console.log(counter2()) // ？  1
}
