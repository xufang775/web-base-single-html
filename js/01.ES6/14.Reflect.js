/**
 * Reflect
 * 
 * 1.概述
 * 2.静态方法
 * 3.实例：使用Proxy实现观察者模式
 */
var titleArr = [];
 function log1(fn=null,titleAll = titleArr){
  console.log();
  var titleStr = titleArr.join(' == ')
  console.log(titleStr);
  
  fn && fn();
 }

 {
   /**
    * 静态方法（13）
    */
   titleArr[0]='静态方法'
   {
     titleArr[1]='Reflect.get(target,name,receiver)'
     log1(()=>{
        var myObject = {
          foo:1,
          bar:2,
          get baz(){
            return this.foo+this.bar;
          }
        }
        var foo = Reflect.get(myObject,'foo')
        var bar = Reflect.get(myObject,'bar')
        var baz = Reflect.get(myObject,'baz')
        console.log(foo,bar,baz);

       //如果name属性部署了读取函数（getter），则读取函数的this绑定receiver
       var myReceiverObject = {
          foo: 4,
          bar: 4
        }
       var baz1 = Reflect.get(myObject,'baz',myReceiverObject);
       console.log(baz1);
       
      //如果第一个参数不是对象，Reflect.get方法会报错
      //  Reflect.get(1,'foo');  // 报错
      //  Reflect.get(false,'foo');  // 报错
     })

     titleArr[1]='Reflect.set(target,name,value,receiver)'
     log1(()=>{
        var myObject = {
          foo:1,
          set bar(value){
            return this.foo = value;
          }
        }
        console.log(myObject.foo);
        
        Reflect.set(myObject,'foo',2);
        console.log(myObject.foo);
        
        Reflect.set(myObject,'foo',3);
        console.log(myObject.foo);

        // 如果name属性设置了赋值函数，则赋值函数的this绑定receiver
        var myReceiverObject = {
          foo:0
        }
        Reflect.set(myObject,'bar',1,myReceiverObject);
        console.log(myObject.foo);
        console.log(myReceiverObject.foo);
        
     })
   }
 }