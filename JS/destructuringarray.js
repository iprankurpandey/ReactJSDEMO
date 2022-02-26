console.log(`destructuring array`)

let arrayOne =['apple',25 ,'2008',['HM','25000']];
console.log(arrayOne)

// let name1 = arrayOne[0]// old mathod to assign values to variables
// let age = arrayOne[1]
// let year = arrayOne[2]


let [name1, age=22, year,[place,gender]]=arrayOne;  // new method to assign array values to variables
console.log(arrayOne)

console.log(name1)
console.log(age)
console.log(year)
console.log(place)
console.log(gender) // we can use nested array and use defualt array values 


//  calling function with array

function user([name1, age=22, year]){

console.log(name1) 
console.log(age)
console.log(year)

}


user('baba',28,2022)

