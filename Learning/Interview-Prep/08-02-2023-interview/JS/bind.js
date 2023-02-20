console.log("--------------bind,call,apply-----------");
const user1 = {
    name : "Sameer",
    age: 28
}
const user2 = {
    name : "Niddu",
    age: 20
}
function getUser(profession,city){
    return this.name + " - " + profession + " " + city;

}
console.log(getUser("Software","HYD"));
console.log(getUser.call(user1,"Software","HYD1"));
console.log(getUser.call(user2,"Software","HYD2"));
console.log(getUser.apply(user1,["Police","NZB1"]));
console.log(getUser.apply(user2,["Police","NZB2"]));
