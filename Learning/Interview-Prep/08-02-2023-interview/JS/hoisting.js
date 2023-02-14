
console.log("--------------Hoisting--------------");
console.log(x === undefined);
var x = "global x"; // globally hoisted x
(function(){
    console.log(x); // locally hoisted x;
    var x = "local x"
})();

// console.log(y); // throws (reference error) while accessing variable declared with let or const
// console.log(z);
let y = 3; 
const z = 3; 
console.log(hoist)
function hoist(){
    return "hoisted declaration and its defination/value"
}