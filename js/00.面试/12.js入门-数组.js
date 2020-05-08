/**
 * ② JS 数组——让数据排排坐》[编号：js_06]
 * 涉及面试题：
1. 写一个函数 squireArr，其参数是一个数组，作用是把数组中的每一项变为原值的平方。
    var arr = [3, 4, 6]
    function squireArr(arr) {
      // 补全
    }
    squireArr(arr)
    console.log(arr) // [9, 16, 36]
 */
{
  console.log();
  console.log('==== 1. ');
  
  
  var arr = [3, 4, 6]
  function squireArr(arr) {
    // 补全
    arr.forEach((i,index)=>arr[index]=i*i)
  }
  squireArr(arr)
  console.log(arr) // [9, 16, 36]
  
  
}
 
/**
2. 写一个函数 squireArr，其参数是一个数组，返回一个新的数组，新数组中的每一项是原数组
  对应值的平方，原数组不变。
  var arr = [3, 4, 6]
  function squireArr(arr) {
    // 补全
  }
  var arr2 = squireArr(arr)
  console.log(arr) // [3, 4, 6]
  console.log(arr2) // [9, 16, 36]

 */
{
  console.log();
  console.log('==== 2. ');
  
  
  var arr = [3, 4, 6]
  function squireArr(arr) {
    // 补全
    // 深复制（方法一）
    var res = [];
    arr.forEach(i=>res.push(i*i));
    return res;

  }
  var arr2 = squireArr(arr)
  console.log(arr) // [3, 4, 6]
  console.log(arr2) // [9, 16, 36]
  
  
}



/**
3. 遍历 company 对象，输出里面每一项的值。
  var company = {
    name: "qdywxs",
    age: 3,
    sex: "男"
  }
 */
{
  console.log();
  console.log('==== 3. ');
  
  
  var company = {
    name: "qdywxs",
    age: 3,
    sex: "男"
  }
  Object.keys(company).forEach(key=>console.log(company[key]))
  
  
}


/**
  4. 遍历数组，打印数组里的每一项的平方。
  var arr = [3, 4, 5]
 */
{
  console.log();
  console.log('==== 4. ');
  
  
  var arr = [3, 4, 5]
  arr.forEach(i=>console.log(i*i))
  console.log(arr.map(i=>i*i));
  
  
}