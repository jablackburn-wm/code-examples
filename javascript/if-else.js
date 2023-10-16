// the standard if statement executes code within the curly brackets if the condition between the
// parentheses resolves to true
if (true) {
    console.log("true!")
} // logs "true!"

if (100 === 100) {
    console.log("true!")
} // logs "true!"

//the if-else statement will run one code segment if the condition is true, and the other code segment if it is false. 
if (false) {
    console.log("true!")
} else {
    console.log("false!")
} // logs "false!"


// the condition in an if/else statement does not need to be a boolean.
// any type other than null/undefined will resolve to true
// this just means you can check if a variable exists

var i = 100
if (i) {
    console.log("variable detected")
} else {
    console.log("no variable")
} // logs "variable detected"

var j = null
if (j) {
    console.log("variable detected")
} else {
    console.log("no variable")
} // logs "no variable"

var n // n is undefined
if (n) {
    console.log("variable detected")
} else {
    console.log("no variable")
} // logs "no variable"


//ternary operator

console.log(true ? 'true' : 'false')  // logs true
console.log(false ? 'true' : 'false') // logs false
