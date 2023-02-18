// import fetch from 'node-fetch';
console.log("---------------Promises------------------");
// promise is an object which represents or holds the eventual completion or failure of a asynchronous call's results
// promise will only have 3 states 1. pending, 2. fulfilled, 3. rejected
// with promise response we can (attach,but not passing call back) the respective call back function to it
// Promise solves following issues from callbacks approach
// 1.Easy Readable than call backs
// 2.promise chaining is easy and readabe
// 3.error handling is easy
// 4.solves the most important problem inversion of controll of callbacks
// 5.(JS garantee) promise will only be executed once and always returs response of resolve or rejected
// 6.solves problem of callback hell
// 7.we cannot mutate the resultant object/response from the promise
setTimeout(()=>{
    console.log("before then");
})
console.log("step1");
let data = [1,2,3,4];
let prom = new Promise((res,rej)=>{
    // function resFun(data){
        setTimeout((data)=>{
            res(data);
            // rej("ERROR");
        },5000,data)
        setTimeout(()=>{
            res(data);
            // rej("ERROR");
        },5000,data)
        //.............
    //     console.log('unchanged inside promise',data)
        data = ['a','b','c','d'];
    //     console.log('changed inside promise',data)
    // }
    // resFun(data);
})
console.log("test-test")
prom.then((res)=>{
    console.log("promise response",res);
}).catch((err)=>{
    console.log("promise error",err);
})
setTimeout(()=>{
    console.log("after then");
})
console.log("after attacing call back",prom);

// promise call call back will be given (.then/.catch) heighest priority amongst CB queues table.
// Promise Queue >> Call Back Queue >> Web Api
function fetch2(){
    let user = fetch("https://dummyjson.com/products/1");
    console.log(user)
    console.log("step1");
    console.log("step1");
    console.log("step1");
    user.then((res)=> res.json())
    .then((res)=> console.log(res))
    .catch((err)=> console.log("error : ",err));
    console.log("step1");
    console.log("step1");
    console.log("step1");
    return;
}
// res.json() will gives us the new promise and will attach .then to it to get the formatted data
// res.json() is different form JSON.parse or JSON.stringify
