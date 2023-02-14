
console.log("--------------Hoisting--------------");
console.log(x === undefined);
var x = "global x"; // globally hoisted x
(function(){
    console.log(x); // locally hoisted x;
    var x = "local x"
})();