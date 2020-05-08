/**
 * 对象的扩展
    1.属性的简洁表示法
    2.属性名表达式
    3.方法的 name 属性
    4.属性的可枚举性和遍历
    5.super 关键字
    6.对象的扩展运算符
    7.链判断运算符
    8.Null 判断运算符
 */
var titleArr = [];
 function log1(fn=null,titleAll = titleArr){
  console.log();
  var titleStr = titleArr.join('==')
  console.log(titleStr);
  
  fn && fn();
 }
/**
 * 1.属性的简洁表示法
 * ES6允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。
 * 这样的写法更加简洁
 */
{
  // ======变量的简洁写法======
  const foo = 'bar';
  const baz = {foo};  
  // {foo:'bar'}
  // 变量foo直接写在大括号里面。这里，属性名就是变量名，
  // 属性值就是变量值。
  
  // 等同于
  const baz1 = {foo:foo}



  // ======方法也可以简写======
  const o = {
    method(){
      return "hello"
    }
  }
  // 等同于
  const o1 = {
    method:function(){
      return 'hello'
    }
  }
}

/**
 * 2.属性名表达式
 * JavaScript定义对象的属性，有两种方法
 * 
 * 表达式可以定义属性名，
 * 也可以定义方法名。
 */
{
  // 注意，属性名表达式如果是一个对象，默认情况下，会自动将对象转为为字符串[object Object],
  // 这一点要特别小心。
  titleArr[0]="2.属性名表达式";
  log1(()=>{
    const keyA = {a:1};
    const keyB = {b:2};
  
    const myObject = {
      [keyA]:'valueA',
      [keyB]:'valueB'
    };
    console.log(myObject);
  })
}


/**
 * 4.属性的可枚举性和遍历
 * 可枚举性：对象的每个属性都有一个描述对象，用来控制该属性的行为。
 * Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象
 * 
 * 属性的遍历
 * ES6一共有5种方法可以遍历对象的属性
 * 1）for...in
 * 2）Object.keys(obj)
 * 3）Object.getOwnPropertyNames(obj)
 * 4）Object.getOwnPropertySymbols(obj)
 * 5）Reflect.ownKeys(obj)
 */
{
  // 注意，属性名表达式如果是一个对象，默认情况下，会自动将对象转为为字符串[object Object],
  // 这一点要特别小心。
  titleArr[0]="4.属性的可枚举性和遍历";
  titleArr[1]='可检举性'
  log1(()=>{
    let obj = {foo:123};
    var des = Object.getOwnPropertyDescriptor(obj,'foo');
    console.log(des);
    
  })
}

/**
 * 5. super关键字
 * 我们知道，this关键字总是指向函数所在的当前，
 * ES6又新增了另一个类似关键字super，指向当前对象的原型对象。
 * 注意：super关键字表示原型对象时，只能用在对象的方法之中，用在
 * 其他地方都会报错。
 */
{
  titleArr=["5.super关键字"];
  log1(()=>{

    {
      const proto = {
        foo:'hello'
      };
      const obj = {
        foo:'world',
        find(){
          return super.foo;
        }
      }
      Object.setPrototypeOf(obj,proto)
      console.log(obj.find());
    }

    {
      const proto = {
        x:'hello',
        foo(){
          console.log(this.x);
        }
      };
      const obj = {
        x:'world',
        foo(){
          super.foo();
        }
      }
      Object.setPrototypeOf(obj,proto)
      console.log(obj.foo());
      
    }
  })
  
}

/**
 * 7. 链判断运算符
 * ES2020引入了“链判断运算符”?.
 */
{
  // const firstName = person?.name || 'xufang ';
  // console.log(firstName);
  
}