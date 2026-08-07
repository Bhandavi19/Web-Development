function f1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("task completed");
            resolve();
        },3000)
    })
}

//instead of then() and catch() we use async and await to handle the promise


async function run(){
    try{

        await f1();
        console.log("promise fulfilled");
    }
    catch(error){
        console.log("promise unfulfilled");
    }
}

run();