/*
we can access the variables from the higher scope but we cannot access from the lower scope
here in global scope we have name and role so we can access them from checkaccess function
but whereas we cannot access the variables which are present in the checkAccess function in global scope
*/

let name = "Bhandavi";
let role = "admin";
function checkAccess(){
    let access = "false";
    if(role == "admin"){
        access = "true";
        console.log(`${name} you have access to admin portal`);
    }
}
checkAccess();

let a = "car"
function outer(){
    let b = "bike";
    console.log(a);
    function inner(){
        let c = "cycle";
        console.log(a);
        console.log(b);
        console.log(c);

    }
    inner();
}
         
outer();