let string = "hello world"
var bool = true
const number = 100

string = "new string" // no error, reassigned 'string'
bool = false // no error, reassigned 'bool'
number = 200 // throws error - can't reassign constant variable
