proto_obj = {
    logData: function() {
        console.log(this.data)
    }
}

child_obj = {
    data: 'this is some data, local to child object'
}


// sets child to inherit from proto, proto is now the prototype for child.
Object.setPrototypeOf(child_obj, proto_obj) 


// this logs the data local to the child, even though child does not have logData method
child_obj.logData() 
// this is very useful for cases where one needs multiple unique objects, with some shared data or methods
// avoid redeclaring common data and methods on multiple similar objects, use prototypal inheritance to save memory 