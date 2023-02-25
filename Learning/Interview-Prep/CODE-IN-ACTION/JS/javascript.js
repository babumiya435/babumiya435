// console.log(a,b,c,d,e,p);

console.log("Java Script");
let a = Number.MAX_VALUE;
let b = Number.MIN_VALUE;
let c = -Number.MAX_VALUE * 2;
let d = Number.POSITIVE_INFINITY;
let e = Number.NEGATIVE_INFINITY;
console.log(a,b,c,d,e);

let p = new Promise((res,rej)=>{
    // setTimeout(()=>{
        function x(){
            res("Sameer");
        }
        x();
    // },5000)
})
p.then((res)=>{
    console.log("Promise",res);
}).catch((err)=>{
    console.log(err);
})
setTimeout(()=>{
    console.log("SetTimeout");
},0)
console.log("End of stack or synchronous code");
// p.then((res)=>{
//     console.log("Promise",res);
// }).catch((err)=>{
//     console.log(err);
// })

// stack
// console.log("Java Script");
// console.log(a,b,c,d,e);
// console.log("End of stack or synchronous code");

// webApi
// ()=>{
//     console.log("SetTimeout");
// }, with timer 0

// task queue
// 1. when timer gets expired call back fn of settimeout is pushed to task queue and wait for eventloop call
//micro task queue
// once resolve or reject of promise will be pushed to micro task queue.
// then((res)=>{
//     console.log("Promise",res);
// }).catch((err)=>{
//     console.log(err);
// })
console.log("Globla object");