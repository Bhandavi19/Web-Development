// let arr1=[1,2,3,4,5]
// // let arr2=[]
// // for (let index = 0; index < arr1.length; index++) {
// //     const element = arr1[index];
// //     arr2.push(element+element);
// // }
// // console.log(arr2);

// //instead of above method we have a map() method to complete the above function

// let newarr = arr1.map((i,index,array)=>{
//     return i+i
// })
// console.log(newarr);



// //filter() to filter the specific elements
// const greaterthanseven=(e)=>{
//     if(e>7){
//         return true;
//     }
//     return false;
// }
// console.log(newarr.filter(greaterthanseven));

// //reduce
// let arr3=[1,2,3,4,5];
// const sum = (a,b)=>{
//     return a+b;
// }
// console.log(arr3.reduce(sum));//sum up all the elements present in the array


// //if we want to convert any object into array we use the following method
// let a = Array.from("Bhandavi")
// console.log(a);




    let arr = [1,2,3,4,5];

    console.log(arr.push(6))
    console.log(arr.pop())
    arr.unshift(0)
    console.log(arr)
    console.log(arr.shift())
    arr.splice(2,1);//deleting 1 element from 2nd index
    console.log(arr)
    arr.splice(2,0,3);//deleting 0 elements and adding one element at 2nd index
    console.log(arr)

    //map,fliters,reduce takes input as callback functions
    function pow(x){
        return Math.pow(x,2);
    }

    let res = arr.map(pow);
    console.log(res)

    //method 2 arrow function
    let res1 = arr.map( x=>  Math.pow(x,2));
    console.log(res1);


    //filter method
    let age = [12,18,15,32,10,6];
    let res2 = age.filter( x=> x>=18);
    console.log(res2);

    //reduce

    let res3 = arr.reduce((total,x) => total+x,0);
    console.log(res3);


    //some = if any element satisfy the given condition it return true else false
    let res4 = arr.some((x) => x>3)
    console.log(res4);

    //every = each and every element in array should satisfy the given consition then it will retuen true else false
    let res5 = arr.every((x) => x>3)
    console.log(res5);


    //find = returns the first element where the condition gets satisfied
    let res6  = arr.find((x)=> x>3)
    console.log(res6)

    //findIndex = returns the index of the first element where the condition gets satisfied
    let res7  = arr.findIndex((x)=> x>3)
    console.log(res7)


    age.sort();
    console.log(age)