const object1 = {
	title: 'javascript',
	version: 1,
}

console.log(object1.title) // logs 'javascript'
console.log(object1.version) // logs 1


      
const object2 = { 
    function_name: function() {
        //function body 
        return 'object function'
    }
}

console.log(object2.function_name()) // logs 'object function'
  

const object3 = {
    nested_object: {
        data: 'string'
    }
}

console.log(object3.nested_object.data) // logs 'string