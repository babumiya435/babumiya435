console.log("Call Back Hell");
function even(n){
    console.log("EVEN");
    if(n%2 === 0){
        return true;
    }else{
        return false;
    }
}
function odd(n){
    console.log("ODD");
    if(n%2 !== 0){
        return true;
    }else{
        return false;
    }
}
let users = [1,2,3,4,5,6,7,8,9,10];
// let ev = users.filter(even);
// console.log(ev);
// let od = users.filter(odd);
// console.log(od);

const mainFunction = (callback)=>{
    setTimeout(()=>{
        callback(1)
    },10000);
}
mainFunction(even);
mainFunction(odd);
