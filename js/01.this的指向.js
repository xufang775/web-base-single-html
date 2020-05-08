// var name = "xufang"
// console.log(this.name);



// function globalTest() {
//   this.name = "global this";
//   console.log(this.name);
// }
// globalTest(); //global this




// var name = "global this";
// function globalTest() {
//     console.log(this.name);
// }
// globalTest(); //global this




// var name = "global this";
// function globalTest() {
//     this.name = "rename global this"
//     console.log(this.name);
// }
// globalTest(); //rename global this



// 下面是在 apply 和 call中的 this 指向
var value = "global value";

function FunA(){
    this.value = "AAA"
}
function FunB(){
    console.log(this.value)
}
FunB();  // global value   因为是在全局中调用FunB(),this.value指向 全局 value。
FunB.call(window); // global value，this指向 window对象，因此this.value指向全局的 value。
FunB.call(new FunA());  // AAA， this指向参数 new FunA(),即新创建的对象

FunB.apply(window)  // global value
FunB.call(new FunA())  // AAA