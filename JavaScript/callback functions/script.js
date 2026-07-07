//async or await actions

console.log("Hy I am Bhandavi")
console.log("I woke up early")

setTimeout(() => {
    console.log("I study daily")
}, 1000);

console.log("I am a girl")

//here other than setTimeout Function all other will be executed and then the settimeout function will be executed this is called async or await actions


const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("bhandavi");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
