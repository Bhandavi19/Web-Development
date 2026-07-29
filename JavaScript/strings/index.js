let a = "Bhandavi  neela   ";
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// console.log(a[6]);
// console.log(a[7]);
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.concat("neela"));
console.log(a.trim())
console.log(a.startsWith("Bh"));
console.log(a.replace("B", "b"));
console.log(a.replaceAll("e", "E"));
console.log(a.slice(1,4));//gives from index 1 to 3
console.log(a.slice(1));//from 1 to end
a[4]="a";
console.log(a);

// for(const i of a){
//     console.log(i);
// }


//Template leterals
let name = "bhandavi";
console.log("hi everyone one my name is " + name + " very good to see you all");
//instead
console.log(`hi my name is ${name} very glad to see you all`);
console.log("Enlish \t90");
console.log("Hi My favourite fruit is \nmango");
console.log("hi my name is \rbhandavi");


