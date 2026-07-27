//functions and objects are first class citizens in javascript

//properties of first class citizens
//1. can be stored in variables
//2. can be passed as arguments to other functions
//3. can be returned from other functions


let a ={
    name:"bhandavi",
    age:20,
    role:"student"

};

function fun(student){//passed a object as variable
    //console.log(student);
    return student;//returned the object inside a function
}

console.log(fun(a));



//functions

let b=function sub(x,y){//stored inside a variable
    console.log(x-y);
}
b(10,5);
function examp(exmp1){
    exmp1(10,20);
}

function add(x,y){
    console.log(x+y);
}

examp(add)

//examp = is called as an higher order function becuase it is accepting an another function as input
//add is called as an callback function BECAUSE it is apssed as an argument to examp function



//function is also stored heap memory 
//it as properties and behaviour
/*properties:
name = name of the function
length= no.of parameters
*/

/*
behavior
3 functions : 
call
apply
bind
*/


function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b;
}


function calc(a,b,callback){
    return callback(a,b);
}

console.log(calc(10,20,add));
console.log(calc(10,20,sub));
console.log(calc(10,20,mul));


//add,sub,mul are called as callback functions becuase it passed as an argument to another function
//calc is known as higher order function because it is accepting another function as input
