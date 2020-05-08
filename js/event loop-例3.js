for(var i = 0; i < 5; i++){
  setTimeout(function after() {
      console.log(i);
  }, 0);
}

// 输出：5 5 5 5 5 
// 因为闭包