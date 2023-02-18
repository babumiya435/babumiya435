console.log("---------------Set Time Out --------------");

function getID(){
    console.log("ID1")
}
// setTimeout(getID,3000);
// let intervalId1 = setTimeout(getID, 3000);
// console.log('Id: ' + intervalId1); 

// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

//settimeout returns interval iD;

// let intervalId = setTimeout(greet, 3000);
// console.log('Id: ' + intervalId); 
// Example 2: Display Time Every 3 Second
let count = 0;
let timeout;
//using setTimeout & clearTimeout
function getTimeSetTimeout(){
    count++;
    if(count === 5){
        clearTimeout(timeout);
    }else{
        timeout = setTimeout(getTimeSetTimeout,3000);
    }
    let time = new Date();
    time = time.toLocaleTimeString();
    console.log('Timer-setTimeout ',count,":",time);
}
//using setInterval & clearInterval
function getTime(){
    count++;
    if(count === 5){
        clearInterval(display);
    }
    let time = new Date();
    time = time.toLocaleTimeString();
    console.log('Timer-setInterval ',count,":",time);
    // setTimeout(getTime,1000);
}
getTimeSetTimeout();
// let display = setInterval(getTime,1000);