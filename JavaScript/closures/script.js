/*
Closures in js
here i have created function outerfun and a variable 'c'
now i also created a inner function inside outerfun so now i m accessing the 'c' var inside inner


int 'b'=outerfun() so it returns the inner function and its reference is stored in b
so now the execution of outer function has been completed but still the inner function has the access to the variables which are present in outerfuntion


so here the concept of closures comes into play.....
inner function creates a imaginary boundary around the variable present in outerfunction and it is called as closure(lexical scope)
through the lexical scope the inner function has access to the variables present in outer function
*/

function outerfun(){
    let c = 0;
    function inner(){
        c+=1;
        console.log(c);
    }
    return inner;
    
}

let b = outerfun();
b();
b();


function a(){
    let c1=0;
    return function(){
        c1+=1;
        console.log(c1);
    }
}

let exmp = a();
exmp();