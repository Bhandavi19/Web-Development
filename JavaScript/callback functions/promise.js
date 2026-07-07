let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        setTimeout(() => {
            console.log("Yes I am generated..!! " + a);
            resolve()
        }, 1000);
    }
    else {
        reject("No the first random number was not generated here...!!!");
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        setTimeout(() => {
            console.log("Yes I am generated..!! in 2nd promise " + a);
            resolve()
        }, 2000);
    }
    else {
        reject("No the 2nd random number was not generated here...!!!");
    }
})

let p3 = Promise.any([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})
