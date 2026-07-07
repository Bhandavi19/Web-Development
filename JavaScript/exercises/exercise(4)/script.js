console.log("generating the random colors for 5 boxes");

let boxes = document.querySelector(".container").children;

function getrandomcolor() {
    let val1 = Math.ceil(Math.random()*255);//color numbers lies between 0 and 255 and generates a random number between 0 and 255 
    let val2 = Math.ceil(Math.random()*255);
    let val3 = Math.ceil(Math.random()*255);
    return `rgb(${val1} , ${val2} , ${val3})`;
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getrandomcolor();
    e.style.color = getrandomcolor();
});


//generally math.random() generates between 0 and 1 by multiplying with 255 we get a number between 0 and 255 ut not 255