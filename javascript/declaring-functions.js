// javascript functions
//4 ways to define functions


//hoisted functions can be called before they are defined in code
//only functions declared directly with 'function' keyword are hoisted
console.log(function1(arg1, arg2)) // throws error - not hoisted
console.log(function2(arg1, arg2)) // throws error - not hoisted
console.log(function3(arg1, arg2)) // throws error - not hoisted
console.log(function4(arg1, arg2)) // logs 'function 4' - hoisted


//function expression 
const function1 = function(arg1, arg2) {
    //function body
    return 'function 1'
}

//arrow function 
const function2 = (arg1, arg2) => {
    //function body
    return 'function 2'
}

//arrow function 
//uses implicit return, no 'return' keyword needed
const function3 = (arg1, arg2) => 'function 3'

//function declaration w/ 'function' keyword 
function function4(arg1, arg2) {
    //function body
    return 'function 4'
}


console.log(function1(arg1, arg2)) // logs 'function 1' (explicit return)
console.log(function2(arg1, arg2)) // logs 'function 2' (explicit return)
console.log(function3(arg1, arg2)) // logs 'function 3' (implicit return)
console.log(function4(arg1, arg2)) // logs 'function 4' (explicit return)