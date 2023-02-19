console.log("--------------this-----------");
function UserFunction(name){
    this.name = name;
}
UserFunction.prototype.getName = function(){
    return setTimeout(()=>{
        console.log(this);
    },5000)
}
class UserClass{
    constructor(name){
        this.name = name;
    }
}
let user1 = new UserFunction("Sameer");
let user2 = new UserClass("Niddu");
user1.getName();
console.log(user2);
// Object.freeze(user1);
// user1.name = "XYZ";
// console.log(user1);
// console.log(user2);