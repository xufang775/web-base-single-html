
/* 
字符串的新增方法

String.fromCodePoint()
String.raw()
实例方法：codePointAt()
实例方法：normalize()
实例方法：includes(), startsWith(), endsWith()
实例方法：repeat()
实例方法：padStart()，padEnd()
实例方法：trimStart()，trimEnd()
实例方法：matchAll()

*/

/* 
5.实例方法：includes(),startsWith(),endsWith()

传统上，JavaScript只有indexOf方法，可以用来确定一个字符串是否包含
在另一个字符串中。ES6又提供了三种新方法。
---- incluudes()：返回布尔值，表示是否找到了参数字符串。
---- startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
---- endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。 
 */
{
  let s = 'hello world';
  console.log(s.startsWith('hell'));
  console.log(s.endsWith('d'));
  console.log(s.includes(' '))
}


/* 
6.实例方法：repeat()

reapt方法返回一个新字符串，表示将原字符串重复n次
 */
{
  console.log('x'.repeat(3));
  console.log('hello'.repeat(2));
  console.log('ha '.repeat(2));
  
  console.log('na'.repeat(2.9));   // 参数如果是小数，会被取整
  // 如果repeat的参数是负数或者infinity，会报错。  
  // console.log('na'.repeat(-1));   
}

/* 
6.实例方法：padStart()，padEnd()
ES2017引入了字符串补全长度的功能。如果某个字符串不够指定长度，
会在头部或尾部实例。padStart()用于状况补全，padEnd()用于尾部补全。
 */
{
 console.log();
 console.log('======= 实例方法：padStart(),endStart():');
 
 
 console.log('x'.padStart(5,'ab'));  // ababx
 console.log('x'.padStart(4,'ab'));  // abax

 console.log('x'.padEnd(5,'ab'));   // xabab
 console.log('x'.padEnd(4,'ab'));   // xaba
 
}

