/**
 *数组的扩展
    扩展运算符
    Array.from()
    Array.of()
    数组实例的 copyWithin()
    数组实例的 find() 和 findIndex()
    数组实例的 fill()
    数组实例的 entries()，keys() 和 values()
    数组实例的 includes()
    数组实例的 flat()，flatMap()
    数组的空位
    Array.prototype.sort() 的排序稳定性
 */
var titleArr = [];
 function log1(fn=null,titleAll = titleArr){
  console.log();
  var titleStr = titleArr.join('==')
  console.log(titleStr);
  
  fn && fn();
 }
/**
 * 1. 扩展运算符
 * 含义：
 * 扩展运算符是三个点（...）。它好比rest参数的逆运算，将一个数组
 * 转为用逗号分隔的参数参数序列。
 * 
 * 替代函数的apply方法：
 * 由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。
 */
{
  titleArr[0] = '1.扩展运算符'
  titleArr[1] = '含义'
  log1(()=>{
    console.log(...[1,2,3]);  // 1 2 3
    console.log(1,...[2,3,4],5); // 1 2 3 4 5
    
    //该运算符主要用于函数调用
    function push(array,...items){
      array.push(...items)
    }
    function add(x,y){
      return x+y;
    }
    const numbers = [4,38];
    add(...numbers) // 42

  })

  titleArr[0] = '1.扩展运算符'
  titleArr[1] = '替代函数的apply方法'
  log1(()=>{
    
    function f(x,y,z){
      // ...
    }
    var args = [0,1,2]
    f.apply(null,args)   // ES5的写法
    f(...args)       // ES6的写法


    // 求一个数组中最大元素的写法
    // ES5 的写法
    Math.max.apply(null, [14, 3, 77])

    // ES6 的写法
    Math.max(...[14, 3, 77])

    // 等同于
    Math.max(14, 3, 77);
  })
}

/**
 * 3.Array.of()
 * Array.of方法用于将一组值，转换为数组
 */
{
  titleArr=['3.Array.of()']
  log1(()=>{
    console.log(Array.of(3,11,8));
    console.log(Array.of(3));
    console.log(Array.of(3).length);
    
    // Array.of()的主要目的，是弥补数组构造函数Array()的不足。
    // 因为参数个数的不同，会导致Array()的行为有差异。
    console.log(Array());
    console.log(Array(3));   // 只有一个参数时，参数指的是数组的长度
    console.log(Array(3,11,8));
    
    // Array.of基本上可以用来替代Array()或new Array(),并且不存在由于参数不同
    // 而导致的重载。它的行为非常统一。
    console.log(Array.of());  //[]
    console.log(Array.of(undefined)); //[undefined]
    console.log(Array.of(1));  // [1]
    console.log(Array.of(1,2));   // [1,2]
    
    
    
  })
}