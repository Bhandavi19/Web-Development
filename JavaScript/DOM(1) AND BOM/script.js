console.log("hi");


// document.body.firstChild
// document.body.children[0]
// document.body.lastChild
// document.body.firstElementChild
// document.body.lastElementChild
// document.body.children[0].firstElementChild
// document.body.children[0].nextElementSibling
// document.body.children[0].previousElementSibling
// document.body.children[0].parentElement



// let a = document.getElementsByClassName("box");
// console.log(a);

// a[3].style.color="red";


// let a = document.getElementById("good");
// a.style.color="red";


// document.querySelector(".box").style.color = "red";//selects the first element of the parent

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor="red";
});


//document.querySelectorAll  -- becomes a object for objects we cannot add style so we have to iterate and add styles

// e=document.getElementsByTagName("div");

// console.log(e.matches("good"));


// let e = document.getElementsByTagName("div");
// e[2].matches("good")//true
// e[3].closest("#good")//true
// document.querySelector("container").contains("box")

