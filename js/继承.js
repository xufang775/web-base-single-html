var Person = function(){
  this.age = 18;
  this.name = '匿名'
}

var Student = function(){}

// 创建继承状态，父类实例作为子类原型
Student.prototype = new Person();
var s1 = new Student();
console.log(s1);
