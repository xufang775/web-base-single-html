/**
 * Proxy
    1.概述
    2.Proxy 实例的方法
    3.Proxy.revocable()
    4.this 问题
    5.实例：Web 服务的客户端
 */
{
  var obj = new Proxy({}, {
    get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
    }
  });

  obj.count = 1
  //  setting count!
  ++obj.count
  //  getting count!
  //  setting count!
  //  2
}