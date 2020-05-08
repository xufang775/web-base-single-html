/**
 * 面向对象
 */
function log(msg){
  console.log('');
  console.log(msg);
}


// 构造函数
function Person(name){
  this.name = name,
  this.age = 28;
}
// Person.prototype原型
Person.prototype.birth = '2019-2-2'
Person.prototype.sayHi = function(){
  console.log(this.name+'，你好,'+this.birth);
}


var per1 = new Person('xufang')
per1.birth = '2000-01-01'
per1.sayHi();

var per1 = new Person('xiaoxiao')
per1.sayHi();

Object.prototype.name2 = 'Object_name'

console.log(per1.constructor);
console.log(per1.__proto__);
console.log(per1.name2);

// 实现继承的6种方法
// 一、原型链继承
{
  
  function Per(){
    this.name = 'xufang 2222';
  }
  Per.prototype = new Person();
  let per1 = new Per();
  console.log(per1);
  // instanceof 判断元素是否在另一个元素的原型链上
  // per1 继承了 Person的属性，返回 true
  console.log(per1 instanceof Person);
  
  /**
   * 重点：让新实例的原型等于父类的实例
   * 特点：1.实例可继承的属性有：
   *    实例的构造函数的属性，父类构造函数属性，父类原型的属性。
   *    （新实例不会继承父类实例的属性！）
   * 缺点：
   * 1.新实例无法向父类构造函数传参。
   * 2.继承单一。
   * 3.所有新实例都会共享实例的属性。
   */
}

// 二、借用构造函数继承
{
  function Con(){
    Person.call(this,'jer'); //重点
    this.age = 12;
    this.sex = '女'
  }
  var con1 = new Con();
  console.log(con1);
  console.log(con1.name);
  console.log(con1.age);
  console.log(con1 instanceof Person);  // false
  // con1.sayHi();

  /**
   * 重点：用call()和apply()将父类构造函数引入了子类函数
   * 特点：
   * 1. 只继承了父类构造函数的属性，没有继承父类原型的属性。
   * 2. 解决了原型链继承缺点1，2，3.
   * 3. 可以继承多个构造函数的属性（call多个）
   * 4. 在子实例中可向父实例传参。
   * 缺点：
   * 1. 只能继承父类构造函数的属性。
   * 2. 无法实现构造函数的复用。（每次用每次都要重新调用）
   * 3、每个新实例都胡父类构造函数的副本、臃肿。
   */
}

// 三、组合继承（组合原型链继承和借用构造函数继承）（常用）
{
  function SubType(name){
    Person.call(this,name);  // 借用构造函数模式
  }
  SubType.prototype = new Person(); // 原型链继承
  var sub = new SubType('gar');
  console.log(sub);
  console.log(sub.name);  // "gar"继承了构造函数属性
  console.log(sub.age);   // 28 继承了父类原型的属性
  
  /**
   * 重点：结合了两种模式的优点，传参和复用
   * 特点：
   * 1. 可以继承父类原型上的属性，可以传参，可复用。
   * 2. 每个新实例引用的构造函数属性是私有的
   * 缺点：
   * 调用了两次父类构造函数（耗内存），子类的构造函数会代替原型上的那个父类构造函数。
   */
}

// 四、原型式继承
{
  // 先封装一个函数容器，用来输出对象和承载继承的原型
  function content(obj){
    function F(){}
    F.prototype = obj; // 继承了传入的参数
    return new F();  // 返回函数对象
  }
  var sup = new Person();  // 拿到父类的实例
  var sup1 = content(sup);
  console.log(sup1.age);  // 28 继承了父类函数的属性
  
  /**
  重点：用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象。object.create()就是这个原理。
　　　　特点：类似于复制一个对象，用函数来包装。
　　　　缺点：1、所有实例都会继承原型上的属性。
　　　　　　　2、无法实现复用。（新实例属性都是后面添加的）
   */
}

// 五、寄生式继承
{
  log('五、寄生式继承')

  function content(obj){
    function F(){}
    F.prototype = obj; 
    return new F();
  }
  var sup = new Person();

  function subobject(obj){
    var sub = content(obj);
    sub.name = 'gar';
    return sub;
  }

  var sup2 = subobject(sup);
  console.log(typeof subobject); // function
  console.log(typeof sup2);  // object
  console.log(sup2.name);
  
  /**
   * 重点：就是给原型式继承外面套了个壳子
   * 优点：没有创建自定义类型，因为只是套了个壳子返回对象，这个函数顺理成章就成了创建的新对象。
   * 缺点：没有用于原型，无法复用。
   */
}

// 寄生组合式继承（常用）
{
  // 寄生：在函数内返回对象然后调用
  // 组合：1.函数的原型等于另一个实例。2.在函数中用aplly或者call引入另一个构造函数，可传参
  // 寄生
  function content(obj){
    function F(){};
    F.prototype = obj;
    return new F();
  }
  // content就是F实例的另一种表示法
  var con = content(Person.prototype);
  // con实例（F实例）的原型继承了父类函数的原型
  // 上述更像是原型链继承，只不过只继承了原型属性

  //组合
  function Sub(){
    Person.call(this); //这个继承了父类构造函数的属性
  }

  // 
  Sub.prototype=con; // 继承了con实例
  con.constructor = Sub;  // 一定要修复实例
  var sub1 = new Sub();

  // Sub的实例就继承了构造函数属性，父类实例，con的函数属性。
  console.log(sub1.age)
}