async function getcatfact(){
    const data = await fetch("https://catfact.ninja/fact")
    const res = await data.json();
    console.log("cat fact from async and await ",  res)
}

getcatfact();
