// 字符串的扩展
/**
 * 
 * 4. JSON.stringify()的改造
 * 5. 模板字符串
 * 
 */


/*
======== 1.字符的Unicode表示法 ====== 
ES6加强了对 Unicode 的支持，允许采用\uxxxx形式表示一个字符，
其中 xxxx 表示字符的 Unicode 码点。
*/
{
  console.log("\u0061");
  
}

/*
======== 2.字符串的遍历器接口 ====== 
ES6为字符串添加了遍历器接口，使得字符串可以被 for...of 循环遍历。
*/
{
  console.log();
  

  for(let code of 'foo'){
    console.log(code);
  }
  
}