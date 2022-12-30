// if(true){
//     function fn(){
//         return 10;
//     }
// }else{
//     function fn(){
//         return 20;
//     }
// }
function fn(){
    return 20;
}
function fn(){
    return 30;
}
let f = function() {
    return true;
}
// let f = function(){
//     return false;
// }
console.log(fn());  // prints the latest function declaration return value 30;
console.log(f()); 