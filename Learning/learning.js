console.log("Target 5");
console.log("inside js file");
var data = [];
function createData(n) {
    if(!n){
        return null;
    }
    for (let i = 0; i < n; i++) {
        let d = {
            fName : "Sameer",
            lName : "Mohammad",
            age : 28
        }
        data.push(d);
    }
}
createData(10);
let ele = document.getElementById("data");
ele.innerHTML = data[0].fName;
console.log(data);
console.log(ele);