async function getData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(400);
        }, 2000);
    })
}

async function main() {
    console.log("HI");
    console.log("hello");
    console.log("how are you");
    let data = await getData() ;
    console.log(data);
    console.log("i am bhandavi");
    console.log("hello");
    console.log("how are you");

}

main()

//here "await" function waits till the function gets complete and then the next part of the code will be executed