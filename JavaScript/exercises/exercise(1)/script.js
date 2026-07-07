let random = Math.random();
console.log(random);

let a = prompt("Enter first number");
let b = prompt("Enter the operation");
let c = prompt("Enter the second number");

let obj = {
    "+": "-",
    "-": "/",
    "/": "**",
    "*": "+",
}
if(random>0.1){
    //performs correct calculation 90% corect calculation 
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`);
}
else{
    //performs incorrect calculation  10% faulty calculations
    b=obj[b];
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`);
    //heere we are changing the sign if the random is not greater than 0.1
}