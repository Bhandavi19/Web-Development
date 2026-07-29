let ar1 = [10,20,30,40,50];

//shallow copy = is can be achived in 2 ways using spread operatoe[...ar1] and ar1.slice()

let ar2 = [...ar1]
//let ar2 = ar1.slice()
console.log(ar1);
console.log(ar2);

ar1.push(60);
console.log(ar1);
console.log(ar2);


//shallow copy for 2d array
let ar = [[10,20],[30,40]];

let arr = ar.slice();
console.log(ar);
console.log(arr);

arr[0].push(25);
console.log(ar);
console.log(arr);

//beacuse both ar and arr are referening to same object in the memory so if one reference is changed automatically another reference gets reflected
//so to avoid this we have to use deep copy

//deep copy = is achived using .structureClone();

let arr1 = structuredClone(ar);
console.log(arr1);

ar[0].push(30);
console.log(ar);
console.log(arr1);