const input = document.querySelector('input') // getting input box

const defaultText = document.getElementById('default') // updates on each event
const debounceText = document.getElementById('debounce') // updates after a pause after events
const throttleText = document.getElementById('throttle') // updates once every interval of time, except when there are no new events



const updateDecounceText = debounce((text) => { 
    debounceText.textContent = text
})

const updateThrottleText = throttle((text) => {
    throttleText.textContent = text
})

input.addEventListener('input', e => {
    defaultText.textContent = e.target.value
    updateDecounceText(e.target.value)
    updateThrottleText(e.target.value)

})

// func declaration is hoisted
function debounce(callback, delay=1000) {
    // we use the following variable in the function we return. 
    // because it is outside the scope of that function, they are not re-initialized when it is called. 
    // the overall debounce function is called only once 
    // the function we return is called every time there is an event
    // this cannot be converted into a single function
    // we must make use of closures so we dont re-declare the timer to null on every event. 
    let timer
    //stores the timeout function so we can clear it at each event

    // each time an event happens, this function is called. 
    // first we interrupt our timer, which does nothing if there is no timer
    // then we set a new timer to fire our callback after a delay
    // this has the effect that our callback is only invoked if no events occur before our timer is up.
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}

// func declaration is hoisted
function throttle(callback, delay=1000) {
    
    // we use the following variables in the function we return. 
    // because these are outside the scope of that function, they are not re-initialized when it is called. 
    // the overall throttle function is called only once 
    // the function we return is called every time there is an event
    // this cannot be converted into a single function
    // we must make use of closures so we dont just re-declare these variables to their default values for every event. 

    let shouldWait = false 
    // tells us whether to wait or not, by default we do not wait

    let lastArgs 
    // stores any arguments that come in while we are waiting


    // timeout tells us to stop waiting if there are no lastArgs, or
    // fires callback with lastArgs if they exist, then clears lastArgs and restarts the timer,
    // invoking itself as the timer callback
    const timeout = () => { 
        if (lastArgs == null) {
            shouldWait = false
        } else {
            callback(...lastArgs)
            lastArgs = null
            setTimeout(timeout, delay)
        }
    }


    // If we are waiting, the function stores our incoming arguments and stops
    // if we are not waiting, we call our callback with the arguments passed to the function,
    // start waiting again, and create a timer to fire the timeout function after a delay
    return (...args) => {
        if (shouldWait) {
            lastArgs = args
            return
        }
        callback(...args)
        shouldWait = true
        setTimeout(timeout, delay)
    }
}


