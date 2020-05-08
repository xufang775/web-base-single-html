/**
 * 6. undefined 和 not defined 的区别？
 */

/**
 * typeof 的判断
 */




// 判断A,B是否相等 （ == ）
{
  console.log(undefined == undefined);  // true
  console.log(undefined == null);    // true
  console.log(null == null);       // true

  console.log('' == false);   // true
  console.log([] == false);   // true
  console.log(false == false);   // true
  console.log("" == []);    // true
  
  console.log({}==false);    // false
  
}
