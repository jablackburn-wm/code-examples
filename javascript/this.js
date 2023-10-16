object = {
    data: 'data',
    logData: function() {
        console.log(this.data) //this keyword works like the 'object' name
    }
}

// is basically equivalent to:
equivalent_object = {
    data: 'other data',
    logData: function() {
        console.log(equivalent_object.data)
    }
}

// both work fine as hell
object.logData()
equivalent_object.logData()

// if we extract the functions though, we see the difference

outside_func = object.logData
equivalent_outside_func = equivalent_object.logData

outside_func() // logs undefined
// the this keyword refers to the local scope. 
// when this is outside any local scope, it refers to the global scope
// because outside func refers to console.log(this.data), it tries to use the global scope for this.
// the global scope has no property 'data' so it returns undefined.

equivalent_outside_func() // logs 'other data'
// the equivalent object doesn't use the this keyword
// because logData refers to equivalent_object.data instead of this.data, it will always work
// even outside the scope of equivalent_object, the logData function always refers to equivalent_object


// we can get around the problems with the this keyword with binding
outside_func = object.logData.bind(object) 
outside_func() // logs 'data'
// the function works again because we bound it to 'object'.
// when we bind something to an object, 'this' will always refer to the scope of the bound object
// we can even bind it to the other object instead:
outside_func = object.logData.bind(equivalent_object)
outside_func() // logs 'other data'
