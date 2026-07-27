let arr1=[1,2,3,4,5]
// let arr2=[]
// for (let index = 0; index < arr1.length; index++) {
//     const element = arr1[index];
//     arr2.push(element+element);
// }
// console.log(arr2);

//instead of above method we have a map() method to complete the above function

let newarr = arr1.map((i,index,array)=>{
    return i+i
})
console.log(newarr);



//filter() to filter the specific elements
const greaterthanseven=(e)=>{
    if(e>7){
        return true;
    }
    return false;
}
console.log(newarr.filter(greaterthanseven));

//reduce
let arr3=[1,2,3,4,5];
const sum = (a,b)=>{
    return a+b;
}
console.log(arr3.reduce(sum));//sum up all the elements present in the array


//if we want to convert any object into array we use the following method
let a = Array.from("Bhandavi")
console.log(a);


