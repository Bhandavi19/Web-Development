// Adjectives:
// Crazy 
// Amazing
// Fire 

// Shop Name:
// Engine
// Foods
// Garments

// Another Word:
// Bros
// Limited
// Hub
let first,second,third;
let rand=Math.random();//gives the number between 0 to 1  so we can divide the 1 into 3 equal parts as 0,0.33,0.66,1
if(rand<0.33){
    first="Amazing";

}
else if(rand>=0.33 && rand<0.66){
    first="Alekhya";
}
else{
    first="Fire";
}


let rand1=Math.random();
if(rand1<0.33){
    second="Chitti";
}
else if(rand1>0.33 && rand1<0.66){
    second="Foods";
}
else{
    second="Garments";
}

let rand2=Math.random();
if(rand2<0.33){
    third="Pickle";
}
else if(rand2>0.33 && rand2<0.66){
    third="Limited";
}
else{
    third="Hub";
}

console.log(`${first} ${second} ${third}`);
