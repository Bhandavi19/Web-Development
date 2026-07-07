console.log("learning about the events");

let btn = document.getElementById("btn");

btn.addEventListener("dblclick", () => {
    document.getElementById("btn").innerHTML = "I was clicked successfully...!!!"
});
document.addEventListener("keydown", (e) => {
    console.log(e.key, e.keyCode);
});
//dblclick == doubleclick for activation
//click == one click
//contextmenu == rightclick for activation
//mouseover or mouseout or mousemove = it is like hover whenever we hover the button it activates