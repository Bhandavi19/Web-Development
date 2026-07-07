// console.log("hello I am back..!")

// let age = 18;


// console.log(n1 + n2);
// console.log(n1 - n2);
// console.log(n1 * n2);
// console.log(n1 / n2);
// console.log(n1 ** n2);
// console.log(n1 % n2);
// if(age>10 && age<20){
//     console.log("The person is in his teens");
// }
// else{
//     console.log("The person is not in is teens");
// }


// for checking value as well as type of a variable then we use"==="


//ternary operator

let a = 18;
let c = (a >= 18) ? "You can Drive" : "You can't Drive";
console.log(c);


/* It also can be written as 
if(a>b){
    c=a-b;
}
else{
    c=b-a
}*/


let percentage = 65;

switch (true) {
    case (percentage > 90):
        console.log("Grade : A");
        break;
    case (percentage >= 80):
        console.log("Grade : B");
        break;
    case (percentage >= 70):
        console.log("Grade : C");
        break;
    case (percentage >= 60):
        console.log("Grade : D");
        break;
    case (percentage < 35):
        console.log("fail");
}
