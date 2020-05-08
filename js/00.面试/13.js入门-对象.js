/**
③ JS 对象——理解对象
涉及面试题：
1. 介绍 JS 有哪些内置对象？
答：
Array,Object,RegExp,Function,String,Number,Boolean


 */

/**
 * 2. 以下代码输出什么？
    var name = "sex"
    var company = {
      name: "qdywxs",
      age: 3,
      sex: "男"
    }
    console.log(company[name])

 */
{
  console.log();
  console.log('==== 3. ');
  
  var name = "sex"
  var company = {
    name: "qdywxs",
    age: 3,
    sex: "男"
  }
  console.log(company[name])   // 男
}


/**
 * 3. 以下代码输出什么？
    var name = "sex"
    var company = {
      name: "qdywxs",
      age: 3,
      sex: "男"
    }
    console.log(company.name)
 */
{
  console.log();
  console.log('==== 3. ');
  
  var name = "sex"
  var company = {
    name: "qdywxs",
    age: 3,
    sex: "男"
  }
  console.log(company.name)  // qdywxs
}