// Arrow functions and Normal functions in java script ?

// Arrow function — also called fat arrow function— 
// is a new feature introduced in ES6 that is a more concise syntax for writing function expressions. 
// While both regular JavaScript functions and arrow functions work in a similar manner, 
// there are certain differences between them.

// 1. Syntax
const name1 = "sameer";
const addNormal = function addNormal(a,a) {  // duplicate argument name names can work here
    console.log(this);
    console.log(name1);
    return a + a;
}
const addArrow = (a,b) => {
    console.log(this);
    console.log(name1);
    return a + b;
}
const addArrow1 = (a) => b;
const addArrow2 = a => b;
// const addArrow3 = (a,a) => a + b;  // duplicate parameters not allowed
const sayHi = _ => console.log("Hi");
const sayHi1 = (_) => console.log("Hi");
// console.log(addNormal(2,3));
// console.log(addArrow(2,3));
// sayHi();

// 2. Arguments binding

const Arguments = function(){
    return arguments; // it prints all parametes passed as arguments array;
}
const ArgumentsArrow = ()=>{
    return arguments; // it does not have parametes passed as arguments array;
}
const ArgumentsArrow1 = (...args)=>{
    return [...args]; // we can get argumets using rest parameter way inside parameter
}
let myFunc = {  
    showArgs : () => { 
    console.log(arguments); 
   } 
  }; 
// myFunc.showArgs(1, 2, 3, 4);
// console.log(Arguments(1,2,3,4));
// console.log(ArgumentsArrow(1,2,3,4));

// 3. Use of this keyword:

const me = {
    name : "Sameer",
    printName : ()=>{
        return `My name is ${this.name}`  // no this reference inside normal function
    },
    printNameRegular: function() {
        return `My name is ${this.name}`  // this reference is availble inside normal function
    }
}
// console.log(me.printName());
// console.log(me.printNameRegular());

// 4. Using new keyword

const constructorNormal = function(a,b){
    console.log(a + b);
}
const constructorArrow = (a,b)=>{
    console.log(a + b);
}
// const obj1 = new constructorNormal(2,3);
// const obj2 = new constructorArrow(2,3);
// console.log(obj1);  // normal method is both callable and constructable
// console.log(obj2);  // arrow method only callable not constructable

// 5.No prototype object for Arrow Functions
// There is no prototype object for Arrow functions like regular functions, 
// If you try to access the prototype of arrow functions, it will return undefined .
function xyz(){

}
let x = ()=>{

}
// console.log("prototype Normal",xyz.prototype); // prints function prototype as {}
// console.log("prototype arrow",x.prototype);     // print arrow function prototype as undefined

// 6.No own this (call, apply & bind won’t work as expected)
// In a traditional function, its internal this value is dynamic, it depends on how the function is invoked. For example:
const user = {
    userName : "Sameer from local/obj context",
    getUserName: function(){
        return this;
    }
}
var userName = "Sameer from global context"
const user1 = {
    userName : "Sameer from local/obj context",
    getUserName: ()=>{
        return this;
    }
}
// const getName = user.getUserName;
// console.log(getName); // prints function from user object
// console.log(getName()); // returned function will be called under global context so not able to find this.userName hence prints undefined.
// console.log(user.getUserName()); // function called under the context of user object hence prints this.userName.
// console.log(user1.getUserName()); // with arrow function it doesnt have context.

let data = {
    b:20
}
const norm = function(a){
    return a + this.b;
}
const arro = (a)=>{
    console.log(a);
    return a + this.b;
}
let res = norm.call(data,5);
console.log(res); // has this / object context and returns sum
let res1 = arro.call(data,5);
console.log(res1); // doesnot have this/object context with arrow function
let res2 = arro.apply(data,[6]);
console.log(res2);  // doesnot have this/object context with arrow function
let add2 = arro.bind(data,2);
console.log(add2());  // doesnot have this/object context with arrow function


// 7.It cannot be used as a Generator function
// The function* statement (function keyword followed by an asterisk) defines a generator function.
// The yield keyword may not be used in an arrow function’s body 
// (except when permitted within functions further nested within it). 
// As a consequence, arrow functions cannot be used as generators.

// Note that generators without yield don't make sense.