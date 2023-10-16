var x = 100
function logX() {
    console.log(x) // variable declared outside the function is accessable within
}

function logY() {
    var y = 200 // variable declared within the function is accessable inside, but inaccessable from the outside
    console.log(y)
}

function add() {
    console.log(x + y) // uses variable y, which is outside the add function's scope
}

logX() // works fine
logY() // works fine
// add() // throws error because the variable y is within a closure, it is not in the scope of the add function



// we can use closures to make private variables
// first, create a function which initializes a private variable, and returns a function that does something with that variable
function counterFactory() {
    let private = 0
    return () => {
        private++
        console.log(private)
    }
}
// now lets invoke our function to create some instances of this private function
let counter1 = counterFactory()
let counter2 = counterFactory()
// each counter we create will have its own version of the count, private to its scope
// calling one counter will not affect another
counter1() // logs 1
counter1() // logs 2

counter2() // logs 1