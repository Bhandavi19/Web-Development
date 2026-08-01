/*
promise - is a object which is used to handle asynchronous operations in js which are dependent on each other
in promise we have 2 functions resolve and reject

promise takes an executor function as an input which has 2 parameters resolve and reject



*/



function fun1(id, callback) {
    let error="404";
    setTimeout(() => {
        if (error) {
            return callback(error);
        }
        console.log("fetch userid...");

        setTimeout(() => {
            if (error) {
                return callback(error);
            }
            console.log("fetch userfriends...");
        }, 2000)

    }, 2000)
}

function error(error) {
    console.log("error");
}


fun1(1, error);

//solution for above problem called callbackhell or pyramid dome
let obj = new Promise((resolve,reject)=>{
    reject("unfulfilled");
});

obj
.then((res)=>{
    console.log(res)
})
.catch((res)=>{
    console.log(res)
})

//then() -- executes the matter which ever it is in the resolve functionn...it takes an callback function as an input and rints the message which is present in the resolve
//catch() --executes the message which is present in the reject function


// whenever their are resolve and reject with settimout function 
// --first they will store settimeout function in web API, after the time is completed 
// --then enters into the macrotask queue 
// --then event loop check whether the call stack is empty if yes it executes the setTimeout function
// --but the resolve or reject function wont executes immediately first it will enter into microtask queue
// --then again the event loop takes that function to the call stack and executes it


// first it empties the microtask queue then only it executes the new task from macrotask queue

const prm = new Promise(
    function executorfun(resolve,reject){
        console.log("execution has started");
        setTimeout(()=>{
            console.log("execution is in settimeout and being executed");
            resolve();
        },3000)
    }
)

prm.then(()=>{
    console.log("task has been fulfilled");
})
.catch(()=>{
    console.log("task has been unfulfilled");
})


// setTimeout(()=>{console.log("another function to check the micro and macro task queue")},4000)

/*promise chaining - it is a process where one task depends on another task
and we can use then and catch to handle the promise

example--amazon website - where 
step1 - search items
step2 - add to cart
step3 - payment
step4 - place order confirmed

so step2 depends on step1 and step3 depends on step2 and so on
so we can use promise chaining to handle this type of situation
*/


function step1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("searching items");
            resolve();
        },2000)
    })
}
function step2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("adding to cart");
            resolve();
        },2000)
    })
}
function step3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("processing payment");
            resolve();
        },2000)
    })
}
function step4(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("confirmed order");
            resolve();
        },2000)
    })
}



step1()
.then(step2)
.then(step3)
.then(step4)
.then(()=>{
    console.log("all steps fulfilled");
})
.catch(()=>{
    console.log("promise unfulfilled")
})