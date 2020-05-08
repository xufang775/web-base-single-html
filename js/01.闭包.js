// var fn = null;
// function foo(){
//   var a = 2;
//   function innerFoo(){
//     debugger
//     console.log(c);
    
//     console.log(a);
//   }
//   fn = innerFoo;
// }
// function bar(){
//   var c= 100;
//   fn();  
// }
// foo();
// bar();
{
  function a(){
    let obj = {name:'xufang'}
    function sayHello(){
      console.log(obj);
    }
    return {obj,sayHello}
  }
  var b = a();

  b.obj['age']=29;
  // b.sayHello();
}
{
  // 函数作为参数
  function aa(fn){
    var name = 'xufang'
    console.log('测试：函数作为参数的闭包');
    fn(name)
  }
  aa(function(name){
    console.log(name+'，你好啊');
    
  })
}