/**
 * 主要考点：宏任务，微任务
 */
console.log(1)  //（1） 同步任务 1

setTimeout(() => { // 宏任务2
  console.log(8) // (7)
}, 2000)

setTimeout(() => {  // 宏任务1
  console.log(3)  //(5)
  Promise.resolve().then(() => {  // 宏任务1-微任务1
    console.log(4) //(6)
  })
  setTimeout(() => { // 宏任务3
    console.log(6) // (8)
  }, 3000)
}, 1000)

new Promise((resolve, reject) => {
  console.log(5)  //（2） 同步任务 2
  resolve()
}).then(() => {
  console.log(7)  //（4） 同步任务-微任务 1
})

console.log(2)  //（3） 同步任务 3

// 1 5 2 7 3 4 8 6