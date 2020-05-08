// for(var i = 1; i<=5;i++){
//   setTimeout(function timer(){
//     console.log(i);
    
//   },i*1000)
// }
// // 输出：6 6 6 6 6  

// console.log("---------------------------");

// for(var i = 1;i<=5;i++){
//   (function(i){
//     setTimeout(function(){
//       console.log(i);
      
//     },i*1000);
//   })(i);
// }


console.log("---------------------------");

// for(var i = 1;i<=5;i++){
//   setTimeout(function(i){
//     return function(){
//     console.log(i);
//     } 
//   }(i),i*1000);
// }



// for(var i = 0;i<5;i++){
//   (function(){
//     setTimeout(function(){
//       console.log(i);
//     },i*1000)
//   })(i)
// }


// var aa = (function(i){
//   console.log(i);
// })(3)
// console.log(aa);  // undefined



// for(var i=0;i<5;i++){
//   setTimeout((function(i){
//     console.log(i);
//   })(i),i*1000)
// }
// 先输出0，然后报错