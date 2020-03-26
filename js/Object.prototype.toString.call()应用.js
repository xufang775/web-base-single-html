/**
 * 
 */
var execArr = [
  Object.prototype.toString.call(''),
  Object.prototype.toString.call(1),
  Object.prototype.toString.call(true),
  Object.prototype.toString.call(undefined),
  Object.prototype.toString.call(null),
  Object.prototype.toString.call(new Function()),
  Object.prototype.toString.call(new Date()),
  Object.prototype.toString.call([]),
  Object.prototype.toString.call({}),
  Object.prototype.toString.call(new RegExp()),
  Object.prototype.toString.call(new Error()),
] 

execArr.forEach(item=>{
  console.log(item);
})
