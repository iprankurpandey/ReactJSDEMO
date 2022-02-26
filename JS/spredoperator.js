console.log(`spread operator`)

//rest operator converts multiple arguments into an array

// rest operator can be used at the time of function declaration


function add(name1, ...args){
    console.log(`${name1} and ${args}`)
}
add('raju', 1,2,'radha')
//  if instead od giving an items as array at the time of calling function we can give it as spread operator
// spread operator can be used at the time of function calling 

function add2(name2,...args){
    let sum =0 ;
    for(i in args){
        sum+= args[i]
    }
    console.log(`Hi ${name2} you marks are ${sum}`)
}
let marks= [10,20,30,40]
add2('baba',...marks) // spread operator 
add2('baba',10,20,30,50)

// merging objects 
const obj1={
    name :'baba',
    course:'BA'
};

const obj2={
    age:25
}

const obj3 = {...obj1,...obj2} // wont add as values are direct object 
console.log(obj3) // we can two object into a third object


