// let a =1;
// //for
// for(let i=0;i<5;i++){
//     console.log(a+i);
// }

let obj ={
    name:"bhandavi",
    role:"student",
    age:18,
}
//forin - used for objects
for (const i in obj) {
       const element = obj[i];
       console.log(i,element);
}


// forof - iterable for strings arrays etc 

for (const c of "Bhandavi") {
    console.log(c);
}

// //while

// let i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }


//do-while loop
let j=10;
do {
    console.log(j);
    j++;
} while (j<9);


//functions
// function Name(name) {
//     console.log("My name is "+ name);

// }
// Name("bhandavi");
// Name("amma");

function add(a, b, c = 9) {
    return a + b + c;
}
result = add(1, 2);
console.log("The sum of two number is " + result);


//arrow function

const func = (x)=>{
    console.log("I am a arrow function with the number "+x);
}

func(90);

