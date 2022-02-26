console.log('********rest operators********')

function add(a, b) {
    c = a + b
    console.log(c)
}
add(5, 6)
// arrays with multiple arguments
function add2(...args) {
    let sum = 0;
    for (i = 0; i < args.length; i++) {
        sum += args[i]
    }
    console.log(sum)

}
console.log(add2(5, 8, 16, 26, 25, 14, 121)) //normal function take multiple arguments and sums all it

// arrays with string and other multiple operators 

function add3(name1, ...args) {
    let sum = 0;
    for (i = 0; i < args.length; i++) {
        sum += args[i]
    }
    console.log(sum)
    console.log(name1)

}

add3('raju', 5, 6, 11)

// arrays with other object



function add4(appa, subj, ...args) {
    let sum = 0;
    for (i = 0; i < args.length; i++) {
        sum += args[i]
    }
    // console.log(sum)
    console.log(`Hello Mr ${subj} , ${appa} , your score is ${sum}`)
}

add4('raju', 'BA', 5, 6, 11, 24)
add4('Golu', 'Bsc', 24, 6, 11, 24)

// note :  we can use rest operator with function parameters to take multiple arguments and store in array and later we can perform operations on that array

function add5(appa, subj, ...args) {
    console.log(`Hello Mr ${subj} , ${appa} , your freinds are ${args}`)
}
add5('raju', 'BA', 'golu', 'suresh', 'rahul') // can print arrays as well 