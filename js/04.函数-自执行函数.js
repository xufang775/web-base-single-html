/** 函数的定义和调用分开 */
// function aaa(a,b){
//   return sum = a+b;
// }
// console.log(aaa(1,3));


// var a = (function aaa(a,b){
//   return sum = a+b;
// })(1,2)

// console.log(a);


(function(){
  console.log(1);
})();

!function(){
  console.log(2);
}();

void function(){
  console.log(3);
}();

