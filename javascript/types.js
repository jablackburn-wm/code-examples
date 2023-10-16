console.log(typeof 100) //returns "number"
console.log(typeof BigInt(100)) //returns "bigint"
console.log(typeof "100") //returns "string"
console.log(typeof {num: 100}) //returns "object"
console.log(typeof true) //returns "boolean"
console.log(typeof undefined) //returns "undefined"
console.log(typeof null) //returns "object"

console.log(typeof typeof 100) // returns "string".
//a typeof expression always resolves to a string



//difference between number and bigint:
//number is soft capped at 9007199254740991, this is the largest safe value of a number
//can be accessed via "Number.MAX_SAFE_INTEGER"
console.log(Number.MAX_SAFE_INTEGER)
// the following will log "true", even though the numbers should be different
// don't use numbers of this size or you will cause problems like this
//instead use BigInts!
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2)
//appending n to a number turns it into a bigint
console.log(typeof 100n) // returns "bigint"




