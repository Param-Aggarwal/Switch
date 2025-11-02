// function once(fn) {
//     console.log("once fn called")
//     let called = false;
//     let output;
    
//     return function(...args){
//         if (!called) {
//             called = true;
//             output =  fn(...args)
//         }
//         return output
//     }   
// }

// const init = once(() => console.log("once is called for the first time"))
// init()
// init()
// // once(() => console.log("once is called for the seond time"))()



// // function once(fn) {
// //   let called = false;
// //   let result;

// //   return function(...args) {
// //     if (!called) {
// //       called = true;
// //       result = fn(...args);
// //     }
// //     return result;
// //   };
// // }

// // const init = once(() => console.log("Initialized"));
// // init(); // "Initialized"
// // init(); // Nothing happens (closure remembers 'called')


// function doAsyncWork(onDone) {
//   setTimeout(() => {
//     // worker decides when to call onDone
//     onDone('result');
//   }, 1000);
// }

// // You provide behavior; doAsyncWork controls invocation → IoC
// doAsyncWork(result => {
//     console.log('Got:')
//     console.log(result)
// });

// function regularFn() {
//   console.log(this);
// }

// // regularFn(); // undefined (strict mode) or window (non-strict)

// const obj = { x: 10, regularFn };
// console.log("here")
// obj.regularFn(); // { x: 10, regularFn: [Function] }



// const arrowFn = () => console.log(this);

// // arrowFn(); // depends on outer scope, e.g., {} in modules

// const obj = { x: 10, arrowFn };
// obj.arrowFn(); // still outer scope, NOT obj


// console.log(typeof null)


// let PrintName = {
//     name: "steve",
//     sayHi: function () {

//         // Here "this" points to nameObj
//         console.log(this.name); 
//     }
// }
// // console.log("-------> ",PrintName.sayHi())
// let nameObj = {
//     name: "Tony"
// }
// console.log("Bind execution --> ",PrintName.sayHi.bind(nameObj)())

// // nameObj.call(PrintName.sayHi())

// console.log("Call execution --> ", PrintName.sayHi.call(nameObj))



// console.log(typeof [2,2,3])
console.log(typeof Promise)