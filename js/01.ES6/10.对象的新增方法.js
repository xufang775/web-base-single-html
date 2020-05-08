/**
 * 对象的新增方法
    Object.is()
    Object.assign()
    Object.getOwnPropertyDescriptors()
    __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
    Object.keys()，Object.values()，Object.entries()
    Object.fromEntries()
 */
var titleArr = [];
 function log1(fn=null,titleAll = titleArr){
  console.log();
  var titleStr = titleArr.join(' == ')
  console.log(titleStr);
  
  fn && fn();
 }
/**
 * 2.Object.assign()
 */
titleArr[0]='2.Object.assign()'
{
  titleArr[1]='基本用法'
  // Object.assign方法用于对象的合并，将源对象的所有可枚举属性，复制到目标对象
  {
    log1(()=>{
      {
        const target = {a:1};
        const source1 = {b:2};
        const source2 = {c:2};
        // Object.assign方法的第一个参数是目标对象，后面的参数都是源对象
        const obj = Object.assign(target,source1,source2)
        console.log("target=",target);
        console.log("obj=",obj);
        console.log(target === obj);
        
      }
      
      // 注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性
      // 会覆盖前面的属性。
      {
        const target = {a:1,b:1};
        const source1 = {b:2,c:2};
        const source2 = {c:3};

        Object.assign(target,source1,source2);
        console.log(target);
        
      }

      // 如果只有一个参数，Object.assign会直接返回该参数
      {
        const obj = {a:1};
        console.log(Object.assign(obj) === obj);
      }

      // 如果该参数不是对象，则会先转成对象，然后返回
      {
        console.log(typeof Object.assign(2));
      }
      // 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错
      {
        // Object.assign(undefined);  // 报错
        // Object.assign(null);    // 报错
      }

      /**
       * 如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。
       * 首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果
       * undefined和null不在首参数，就不会报错。
       */
      {
        let obj = {a:1};
        console.log(Object.assign(obj,undefined)===obj);  // true
        console.log(Object.assign(obj,null)===obj);    // true
        
      }
    })
  }

  titleArr[1]='注意点'
  {
    titleArr[2] = '(1)浅拷贝'
    // Object.assign方法实行的浅拷贝，而不是深拷贝。也就是说，如果源对象
    // 某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用
    {
      log1(()=>{
        const obj = {a:{b:1}};
        const obj2 = Object.assign({},obj);
        obj.a.b=2;
        console.log(obj2.a.b);
      })
    }
    titleArr[2] = '(2)同名属性的替换'
    /*对于这个嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，
    而不是添加。 */
    {
      log1(()=>{
        const target = {a:{ b:'c',d:'e'}};
        const source1 = {a:{ b:'hello'}}

        Object.assign(target,source1);
        console.log(target);  // {a:{b:'hello'}}
      })
    }

    titleArr[2] = '(3)数组的处理'
    /**
     * Object.assign可以用来处理数组，但会把数组视为对象。
     */
    {
      log1(()=>{
        console.log(Object.assign([1,2,3],[4,5])); //[4,5,3]
      })
      
    }

    titleArr[2] = '(4)取值函数的处理'
    /**
     * Object.assign只能进行值的复制，如果要复制的值是一个取值的函数，
     * 那么将求值后再复制。
     */
    {
      log1(()=>{
        const source = {
          get foo(){
            return 1;
          }
        }
        const target = {};
        console.log(Object.assign(target,source))  // {foo:1}
      })
      
    }
    
  }

  titleArr[1]='常见用途'
  {
    titleArr[2] = '(1)为对象添加属性'
    // Object.assign方法实行的浅拷贝，而不是深拷贝。也就是说，如果源对象
    // 某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用
    {
      log1(()=>{
        class Point {
          constructor(x,y){
            Object.assign(this,{x,y})
          }
        }
        //上面方法通过Object.assign方法，将x属性和y属性添加到Point类的对象实例。
      })
    }
    titleArr[2] = '(2)为对象添加方法'
    /*对于这个嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，
    而不是添加。 */
    {
      function SomeClass(){

      }
      log1(()=>{
        Object.assign(SomeClass.prototype,{
          someMethod(){

          },
          anotherMethod(){

          }
        })
        //等同于下面的写法
        SomeClass.prototype.someMethod = function(){

        }
      })
    }

    titleArr[2] = '(3)克隆对象'
    {
      log1(()=>{
        function clone(origin){
          return Object.assign({},origin)
        }
      })
      
    }

    titleArr[2] = '(4)合并多个对象'
    {
      log1(()=>{
        // 将多个对象合并到某个对象。
        const merge = (target,...sources)=>Object.assign(target,...sources)
        // 如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。
        const merge1 = (...sources)=>Object.assign({},...sources)
      })
    }

    titleArr[2] = '(5)为属性指定默认值'
    {
      log1(()=>{

        const Defaults = {
          logLevel:0,
          outputFormat:'html'
        }

        function processContent(options){
          options = Object.assign({},Defaults,options);
          console.log(options);
          
        }
      })
      
    }
  }
}


titleArr[0]='5. '
{
  titleArr[1] = 'Object.keys()';
  {
    log1(()=>{
      
      /**
       * ES5引入了Object.key方法，返回一个数组，成员是参数对象自身的（不含继承的）
       * 所有可遍历（enumerable）属性的键名。
       */
      var obj = {foo:'bar',baz:42};
      console.log(Object.keys(obj));

      /**
       * ES2017引入了跟Object.keys配套的Object.values和Object.entries，作为遍历一
       * 个对象的补充手段，供 for...of 循环使用。
       */
      {
        let {keys,values,entries} = Object;
        let obj = {a:1,b:2,c:3};
        for (let key of keys(obj)) {
          console.log(key); // 'a', 'b', 'c'
        }
        
        for (let value of values(obj)) {
          console.log(value); // 1, 2, 3
        }
        
        for (let [key, value] of entries(obj)) {
          console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
        }
      }
    })
    
  }
}

titleArr=['6.Object.fromEntries()']
{
  /**
   * Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。
   */
  {
    log1(()=>{
      const obj=Object.fromEntries([
        ['foo','bar'],
        ['baz',43]
      ]);
      console.log(obj);
    })
    
    
  }

}
