
let array = [1, 6, 3, 1, 4, 7, 9, 0, -10, 10]

// creates new array with only items that pass the test
// the function within filter() is run for each item in the array, where 'item' is an alias for the item
// if it returns true, the item is added to the new array
filtered_array = array.filter((item) => {
    return (item > 5)
})
console.log(filtered_array)


// creates a new array with the return value of the function within map()
// 'item' is again an alias for the item currently being mapped
// whatever gets returned by the function is added to the array
mapped_array = array.map((item) => {
    return (item > 5)
})
console.log(mapped_array);

// 'reduces' the array to a single value 
// the function within reduce() takes two arguments, the return value and the item
// In this example, 'sum' is the return value. at each new item, 'sum' is the return value of the last item.
// sum starts as undefined, then is added the first item in the array
// in each successive iteration, sum becomes the return value of the iteration before it
// this example adds each item in the array into sum, 'reducing' the array to a single value
total_sum = array.reduce((sum, item) => {
    return sum + item
})
console.log(total_sum)


// sorts the original array
// does not create a new array, overwrites the existing array
array.sort()
console.log(array)
// notice the array is by default sorted in ascending order, except for 10, which strangely follows 1.
// this is because it sorts according to the first characters, not value of the number 
// this works well for sorting strings in alphabetical order, but what if we want to sort our number array, 
// or an array of objects for that matter? 

// to customize sorting behavior, we write a comparator function which we pass to sort()
// the comparator should take two arguments, representing 2 list items
// it should return a positive or negative value depending on which item goes first in the array
// with the arguments (a, b), a positive value means b comes before a
// a negative value means a comes before b
// zero means they are identical, and they will not be sorted
function comparator(a, b) {
    return a - b
}
array.sort(comparator)
console.log(array)
//this example sorts the array in non-decreasing order with a custom comparator function