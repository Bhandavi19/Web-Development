let a = [1, 2, 3, 4];

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);

}

a.forEach((value, index, arr) => {
    console.log(value, index);
});

//used for arrays and strings
for (const element of a) {
    console.log(element)
}


let obj = {
    a: "A",
    b: "B",
    c: "C"
}
for (const key in obj) {
    const element = obj[key];
    console.log(key,element);

}