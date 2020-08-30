//normal function statement
function sayHi(){
    console.log("Hi!");
}

sayHi();

//function expression
var sayBye=function(){
    console.log("Bye!")
}

sayBye();

function callFunction(fun){ //pass a function as parameter
    fun();
}

callFunction(sayBye);