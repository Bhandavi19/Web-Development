let ar1 = [
    [1,2,3],
    [5,6,7],
    [2,5,6]
]

console.log(ar1)

// let i;
// let j;
// for(i=0;i<ar1.length;i++){
//     for(j=0;j<ar1[0].length;j++){
//         console.log(ar1[i][j])
//     }
// }

let ar2 = [
    [[40,50],[50,30]],
    [[10,20],[20,30]]
]

console.log(ar2)

let i;
let j;
let k;
for(i=0;i<ar2.length;i++){
    for(j=0;j<ar2[0].length;j++){
        for(k=0;k<ar2[i][j].length;k++){
            console.log(ar2[i][j][k])
        }
    }
}