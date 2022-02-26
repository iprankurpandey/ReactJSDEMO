console.log(`calbacks`)

const x = () => console.log('this is x')
const y = (cb) => {
    console.log('this is y')
    cb()
}
const z = (cb) => {
    console.log('this is z')
    cb()
}

// x() // as javascript is synchronous it excutes the code line by line and gives the results accordingly 
// y()
// z()
// def :  call back function is a function that is passed to another function as an argument and is executed after some operation is completed.

z(function(){
    y (function(){
        x()
    }) 
})  //callbackhell

// calling on function inside another function
 