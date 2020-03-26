/**
 * 
 */
var execArr=[
  ''.__proto__.constructor,
  (1).constructor === Number,
  true.constructor,
  [].constructor ,
  Array.prototype.constructor,
  Function.prototype.constructor,
  Object.prototype.constructor
];


execArr.forEach(item=>{
  console.log(item);
})
