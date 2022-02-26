const car1 = {
    name: "Audi",
    model: "A5",
    strength: 800,
    parts: ['sound', 'horn', 'wheels'] // arrays in objects can perform all arrays operation here
}

const car2 = {
    name2: "BMW",
    model2: "B5",
    strength: 900,
    living: {
        city: 'Goa',
        country: 'India'
    },
    parts: ['gear', 'power', 'lights'],
    data: function add() {
        return `the car is ${this.name2} and model is ${this.model2}`
    }, //in arrow fucntion this data fucntion is refering to the global object thats why undfined value we got 
    data2: details = () => console.log(`the model is ${this.model} and strength is ${this.strength}`)
}
console.log(car2.living)

//notes 
// 1)We can also use function in objects
// 2)we can use objects inside objects
// 3)we can use  arrays inside  objects



//  if(car1.strength > car2.strength){
//      console.log(`car1 is more powerful`)
//  }
//  else{
//     console.log(`car2 is more powerful`)
//  }