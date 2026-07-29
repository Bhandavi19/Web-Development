//pass by value
let a = 100;
b=a;
console.log(a);
console.log(b);

b=200;
console.log(a,b);

//pass value for primitive data types like if we change the value of 'b' it doesnt effect on 'a' 
// because they are stored in different memory locations  

//pass by reference
let c = {
    name : "Bhandavi",
    age:20,
    role:"student"
};

console.log(c);

let d;
d=c;
console.log(d);

d.name="Siri";
console.log(c,d)


//here we are changing the value of 'd' which is a reference to 'c' so it will also change the value of 'c' because they are stored in same memory location
//objects are stored in heap memory and 'c' and 'd' are refered to same object in the memory
//thats why if we change in one reference it gets reflected in another reference
//so this is called pass by reference   