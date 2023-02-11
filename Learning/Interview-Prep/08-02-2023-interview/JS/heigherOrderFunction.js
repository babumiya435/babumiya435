console.log("Heigher Order Functions in JS");
// https://levelup.gitconnected.com/sneak-peak-of-map-filter-and-reduce-in-javascript-79d38181a48
let users = [
        {
            userName : "student1"
        },
        {
            userName : "student2"
        },
        {
            userName : "student3"
        },
        {
            userName : "student4"
        }
    ]
console.log(users);
let marks = users.map((user)=>{
    let marks = Math.random() * 100;
    user.marks = marks;
    return user;
})
console.log(marks);
let passed = users.filter((user)=>{
    return user.marks > 50;
})
console.log(passed);
let team = passed.reduce((acc,user)=>{
    if(user.marks > 70){
        acc.push(user);
    }
    return acc;
},[])

console.log(team);
