//async JS


//setTimeOut - webAPI(provides asynchronolus execution) - it is an method provided by the settimeout
//eventloop - checks whether the call stack is empty r not
//webAPI stores the setTimeout functions after the time is completed it goes to the call back queue
//callback queue - it is a queue which stores the callback functions

// function fun1(){
//     console.log("task 1 started");
//     console.log("task 1 ended")
// }

// function fun2(){
//     console.log("task 2 started")
//     let start = Date.now();
//     let delay = 5000;
//     let end = start+delay
//     while(Date.now()<=end){

//     }
//     console.log("task 2 ended");
// }
// function fun3(){
//     console.log("task 3 started")
//     let start = Date.now();
//     let delay = 2000;
//     let end = start+delay
//     while(Date.now()<=end){

//     }
//     console.log("task 3 ended");
// }

// function fun4(){
//     console.log("task 4 started");
//     console.log("task 4 ended");
// }


// fun1();
// setTimeout(fun2, 5000);
// setTimeout(fun3, 2000);
// fun4();



//setInterval - it is also a webAPI methos to repeat a task after a certain time interval
//to stop after certian interval we use setTimeout again with clearInterval()-method

function fun(){
    console.log("fetch data...")
}



//everytime it executes it generates an ID so we store it one variable
let intervalID = setInterval(fun, 2000);

setTimeout(() => clearInterval(intervalID),20000);