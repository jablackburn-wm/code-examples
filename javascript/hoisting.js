console.log(hoisted_var) // no error, but hoisted var is undefined
// console.log(unhoisted_const) //throws error
console.log(hoistedFunction()) // no error, the function works just fine
// console.log(unhoistedFunction()) // throws error

// var declaration is hoisted, but not the assignment
// logging hoisted var before initialization will not throw an error, but hoisted var will be undefined
var hoisted_var = 'hoisted' 
const unhoisted_const = 'unhoisted' // const is never hoisted


// function declarations are hoisted just fine
// because there is no assignement, this is not an expression
function hoistedFunction() {
    return 'hoisted'
}

// var declaration is hoisted, but trying to call unhoistedFunction will cause an error 
// because it does not yet know that it is a function
// unhoistedFunction is hoisted, but remains undefined and therefore uncallable
var unhoistedFunction = function() {
    return 'unhoisted'
}

// declarations are hoisted, not expressions. 
// basically, the left side  of everything initialized with var is hoisted
// and function declarations