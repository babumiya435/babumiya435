console.log("---------Async-Await-----------")
const promise1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        // res("promise1")
        rej("ERROR-promise1")
    },10000)
})
const promise2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise2")
    },3000)
})
function normalRun(){
    let x = promise1.then((x)=>{
        console.log('normal promise-x',x);
    }).catch(()=>{
        console.log("error-normal");
    })
    let y = promise2.then((x)=>{
        console.log('normal promise-y',x);
    })
    // console.log(x);
    // console.log(y);
}
// normalRun();
async function run(){
    // try{
    //     let x = await promise1;
    //     let y = await promise2;
    //     console.log('async-await -x',x);
    //     console.log('async-await- y',y);
    // }catch(error){
    //     console.log(error);
    // }
    const [ item, error ] = await promise2;
    if (error) {  // handle error and return
        console.log(null);
        } else {
            console.log(item);
        }  
}
run();