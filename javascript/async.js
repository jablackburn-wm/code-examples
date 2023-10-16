
// many functions accept callbacks, the simplest is probably set timeout
// this function will asynchronously wait for the delay to be over, continue to run the rest of the JS,
// and fire the callback when the delay is finished
function getData(callback, delay) {
    setTimeout(callback(), delay)
}

// passes a callback to the getData function, which console logs the data after the delay of 1000ms
getData(() => console.log('data'), 1000)

// a real world example of a callback would be sending a request to a server, then firing some callback to handle
// the response when it comes back



// another way to do asynchronous javascript is the promise
// this function returns a promise with the same asynchronous functionality (getData) as before
function promissoryFunction() {
    return new Promise((resolve, reject) => { 
        setTimeout(resolve, 1000) // resolve is the equivalent to the callback functionality
    })
} 

// unlike getData on its own, promissoryFunction returns something right away: the promise
promise = promissoryFunction()

// we then specify the resolve functionality with .then
promise.then(() => {
    console.log('data')
}).catch((err) => {
    console.log(err)
})

// this might seem like an extra step to do the same thing as before, but this is a very simple example.
// working with promises is often a cleaner way to do async js in complex apps.



// the most modern (and best in my opinion) way to do asynchronous javascript, the async await syntax.
// this example mimics a real world example of a function which sends a request with axios and logs the response
// declare the function with the async keyword, then create the try-catch block.
// the function 'trys' to get a response with axios.get
// we must 'await' this response because the get method is asynchronous
// if there are no errors, the response is logged, otherwise the error is passed to the catch block where it is logged. 
async function async_await() {
    try {
        const response = await axios.get('api url')
        console.log(response)
    } catch (err) {
        console.log(err);
    }
}