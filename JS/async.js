console.log(' I am in console printing something ...')
let timeid =() => console.log(' I am in console eating something ...')

// Everything is executing line by line which is synchronous 
// synchronous means line number 2 can't be executed till line number 1 is finished.

// Sometimes we need to do the things asynchronously which means we need to wait for sometime to 
// execute something but during this execution time we dont want our systems to sit idle and do nothing we want to work simountasly to do that we can use the some features of JS to make is asynchronous
// by using settimeout we can ignore JS code and do something else in the background.

setTimeout(timeid,5000)

console.log(' I am in console doing something ...')

// we cant pass variable in settimeout it can only take function.


let one = () => {
    console.log(' I am in console one printing something ...')
}

let two = () => {
    one()
    console.log(' I am in console two eating something ...')
}
let three = () => {
    two()
    console.log(' I am in console three doing something ...')
}

three()

// added undraw diagram for Async JS

