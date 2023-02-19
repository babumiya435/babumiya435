// 'use strict';
console.log("use strict must be at the top of the programm other wise it does not behave strict");
'use strict';
console.log("-----------Variable Scope-----------");
function greet(){
    a = "Hello"; // without declaration global scoped
    //var a = "Hello"; // only local scoped
    //let a = "Hello"; // only local scoped
    //const a = "Hello"; // only local scoped
}
// console.log(a);
greet();
console.log(a); // we can access without declared variable
b = 5; // in normal mode it is ok to not to declare variable with var ot any type and if we create inside function it behaves as global variable;
console.log(b);

let x = 0;
const y = "const-variable";
console.log(x,y);