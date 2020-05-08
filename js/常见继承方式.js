/**
 * 原型链+借用构造函数的组合继承
 */

// function Parent(value){
//   this.value = value;
// }
// Parent.prototype.getValue = function(){
//   console.log(this.value);
// }
// function Child(value){
//   Parent.call(this,value)
// }
// Child.prototype = new Parent();
// const child = new Child(1);
// child.getValue();  // 1
// console.log(child instanceof Parent)  // true

/**
 * 寄生组合继承
 */

// function Parent(value){
//   this.value = value;
// }
// Parent.prototype.getValue = function(){
//   console.log(this.value);
// }
// function Child(value){
//   Parent.call(this,value)
// }
// Child.prototype = Object.create(Parent.prototype,{
//   constructor:{
//     value:Child,
//     enumerable:true,
//     writable:true,
//     configurable:true
//   }
// });

// const child = new Child(1);
// child.getValue();  // 1
// console.log(child instanceof Parent)  // true

/**
 * ES6中class的继承
 */

 class Parent{
   constructor(value){
    this.value = value;
   }
   getValue(){
     console.log(this.value);
     
   }
 }
 class Child extends Parent {
   constructor(value){
     super(value);
     this.value = value;
   }
 }
 let child = new Child(1)
 child.getValue();  // 1
 console.log(child instanceof Parent);
 