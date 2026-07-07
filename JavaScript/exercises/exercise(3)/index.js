// function factorial(a) {
//     let element = 1;
//     for (let i = 1; i <= a; i++) {
//         element *= i;

//     }
//     return element;
// }
// console.log(factorial(5));


let arr=[1,2,3,4,5];
const func= (a,b)=>{
    return a*b;
}
console.log(arr.reduce(func));