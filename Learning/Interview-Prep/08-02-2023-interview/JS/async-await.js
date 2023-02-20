console.log("---------Async-Await-----------")
const promise1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise1")
    },10000)
})
const promise2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise2")
    },3000)
})
function normalRun(){
    let x = promise1.then((x)=>{
        console.log('normal promise',x);
    })
    let y = promise2.then((x)=>{
        console.log('normal promise',x);
    })
    // console.log(x);
    // console.log(y);
}
normalRun();
async function run(){
    let x = await promise1;
    let y = await promise2;
    console.log('async-await',x);
    console.log('async-await',y);
}
run();