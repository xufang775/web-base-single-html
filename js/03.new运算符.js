function Person(){
  this.name = "xufang"

  function sayHello(){
    console.log(this.name);
    
  }
}

var a = new Person;
console.log(a);

