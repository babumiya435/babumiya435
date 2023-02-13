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
// mainFunction(even);
// mainFunction(odd);

// const button = document.getElementById('myName');
// function callback(){
// console.log("My Name is Sameer");
// }

// button.addEventListener('click',callback);

// synchronous call back example
console.log("------------Synchronous CODE-----------");
console.log("Start");
function getGreeting(name,cb){
    cb(name);
}
console.log("Before Greeting");
function cb(cbName){
    console.log(`Hello ${cbName}`);
}
getGreeting("Sameer",cb);
console.log("After Greeting");
console.log("End");
console.log("------------Synchronous CODE-----------");

// Asynchronous call back example
console.log("------------ASynchronous CODE-----------");
console.log("Start");
function getGreeting1(name,cb){
    setTimeout(()=>{
        cb(name);
    },5000);
}
function cb1(cbName){
    console.log(`Hello ${cbName}`)
}
console.log("Before greeting");
getGreeting1("Sameer",cb1);
console.log("After greeting");
console.log("end");
console.log("------------ASynchronous CODE-----------");
