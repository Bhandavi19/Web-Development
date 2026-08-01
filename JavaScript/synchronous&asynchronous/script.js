//synchronous js

function task1(){
    console.log("task1 has started")
    let time = Date.now();//which gives the time form jan1 1970 to now present time in milliseconds
    let delay = 3000;//3000 milliseconds = 3 seconds
    let end = time+delay;//adding delay for the date.now function
    console.log("task1 is executing")
    while(Date.now()<=end){

    }

    console.log("Task 1 is done");
}
function task2(){
    console.log("task2 has started")
    let time = Date.now();//which gives the time form jan1 1970 to now present time in milliseconds
    let delay = 5000;//5000 milliseconds = 5 seconds
    let end = time+delay;//adding delay for the date.now function
    console.log("task2 is executing")
    while(Date.now()<=end){

    }

    console.log("Task 2 is done");
}
function task3(){
    console.log("task 3 has started")
    let time = Date.now();//which gives the time form jan1 1970 to now present time in milliseconds
    let delay = 6000;//3000 milliseconds = 3 seconds
    let end = time+delay;//adding delay for the date.now function
    console.log("task 3 is executing")
    while(Date.now()<=end){

    }

    console.log("Task 3 is done");
}

task1();
task2();
task3();


//for the current time we are adding some delay like some extra time... until the currenttime reaches the end time the loop executes then stops and prints the below message