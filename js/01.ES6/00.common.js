var titleArr = [];
 function log1(fn=null,titleAll = titleArr){
  console.log();
  var titleStr = titleArr.join('==')
  console.log(titleStr);
  
  fn && fn();
 }

export default {
  titleArr,
  log:log1
}