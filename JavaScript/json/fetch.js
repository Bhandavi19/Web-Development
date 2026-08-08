fetch("https://catfact.ninja/fact")
.then((res) => console.log(res))
.catch((error) => console.error("api failed"))

//"https://catfact.ninja/facttt" -- if we write like this it reaches to ther url server but the 'get' url is wrong so it shows 404 error
//"https://catfactttt.ninja/fact" -- if we write like this it doesnot reaches the url server so it shows "api failed"

fetch("https://catfact.ninja/fact")
.then((res) => res.text())
.then((data) => console.log(JSON.parse(data)))
.catch((error) => console.error("api failed"))

//.text() returns a promise object so again we need to write .then() and it returns a stringified json data
//so to convert it into js object from like key value pairs we again need to write data.parse() 


//instead of writing .text() then .parse() we have direct method called .json() 
//it directly converts stringified json to js object key value pairs



fetch("https://catfact.ninja/fact")
.then((res) => res.json())
.then((data)=> console.log(data))
.catch((error) => console.error("api failed"))



//instead of promise chaining we use async and await

async function getcatfact(){
    const data = await fetch("https://catfact.ninja/fact")
    const res = await data.json();
    console.log("cat fact from async and await ",  res)
}

getcatfact();
