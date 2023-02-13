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
        cb(name,function (name){ console.log(`Hello ${name}`)});
    },5000);
}
function cb1(cbName,cb){
    console.log(`Hello ${cbName}`)
    cb(cbName)
}
function cb2(cbName){
    console.log(`Hello ${cbName}`)
}
function cb3(cbName){
    console.log(`Hello ${cbName}`)
}
console.log("Before greeting");
getGreeting1("Sameer",function (cbName,cb1){
        console.log(`Hello ${cbName}`);
        cb1(cbName);
    }
);
console.log("After greeting");
console.log("end");
console.log("------------ASynchronous CODE-----------");

function One(two){
    console.log("START");
    console.log("ONE")
    two(Three);
}
function Two(three){
    console.log("TWO");
    three(Four);
}
function Three(four){
    console.log("THREE");
    four(Five);
}
function Four(five){
    console.log("FOUR");
    five()
}
function Five(){
    console.log("FIVE");
    console.log("END")
}
One(Two);
