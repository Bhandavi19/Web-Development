// console.log("Hey I am doing exercise - 9 on faulty calculator");


// let a = Number(prompt("Enter first number"));
// let b = prompt("Enter operation");
// let c = Number(prompt("Enter second number"));

// if (b == "+") {
//     console.log(a - c);
// }
// else if (b == "*") {
//     console.log(a + c);
// }
// else if (b == "-") {
//     console.log(a / c);
// }
// else if (b == "/") {
//     console.log(a ** c);
// }


//it generates between 1 and 2
let random = Math.random();
console.log(random);

let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
let c = prompt("Enter operation");

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**",
};

//eval() function evaluates whatever return in in function
//here we are calculating the calculator should give 10% of correct answers that's why random>0.1
if(random<0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 
}







