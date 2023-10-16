//generic version:

// for (let i = value, condition, iteration) {
//     //do something
// }

// 'value' is the initial value of 'i'. 
// 'condition' is the condition upon which the loop continues to iterate
// 'iteration' is code executed at the end of each iteration, commonly used to increment i.

for (let i = 0; i < 10; i++) {
    console.log(i)
} // logs numbers 0-9

// in (let i = 0; i < 10; i++), let i = 0 is the first bit of code that is run by the loop. 
// i < 10 is the condition which determines if the loop will keep going, if it resolves to false, the loop terminates. It is checked at the beginning of each iteration. 
// i++ is the operation run at the end of each iteration

//the code above can be rewritten explicitly like so:


let i = 0; // initialize the variable
if (i < 10) { 
    console.log(i) // logs 0
}
i++
if (i < 10) {
    console.log(i) // logs 1
}
i++
if (i < 10) {
    console.log(i) // logs 2
}
i++
if (i < 10) {
    console.log(i) // logs 3
}
i++
if (i < 10) {
    console.log(i) // logs 4
}
i++
if (i < 10) {
    console.log(i) // logs 5
}
i++
if (i < 10) {
    console.log(i) // logs 6
}
i++
if (i < 10) {
    console.log(i) // logs 7
}
i++
if (i < 10) {
    console.log(i) // logs 8
}
i++
if (i < 10) {
    console.log(i) // logs 9
}
i++
if (i < 10) {
    console.log(i) // doesnt log anything
} // loop ends


// do-while loops
var j = 0
do {
    j++;
    console.log(j)
} while (j < 10) // logs all numbers 1-10