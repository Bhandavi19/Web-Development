let arr = [1, 2, 3, 4, 5, 6, 7, "banana"];
// console.log(arr);
// console.log(arr.length);
// arr[0]=111;
// console.log(arr);
// console.log(typeof arr);

// console.log(arr.toString());
// console.log(arr.join("*"));
// console.log(arr.push(8));//adds at last and return the length of the array
// console.log(arr.pop());//removes the last element and returns the removed element
// console.log(arr.shift());//removes the first element and returns the removed element
// console.log(arr.unshift(0));//adds at first and returns the length of the array
// console.log(arr);

//splice - 1 is index 4 is elements to be deleted from 1st index.... 23 34 45 56 are the elemenst that needed to be added in the removed elements place
console.log(arr.splice(1, 4, 23, 34, 45, 56));//returns the removes elements here 23 34 45 56 are the elements to be added at the removed elements
console.log(arr);
console.log(arr.slice(1, 3));//from first index to last index the elements are removed and the last index is excluded
