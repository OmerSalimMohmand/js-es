// console.log("In the name of Allah");

const car = {
  make: "Toyota",
  model: "Corrola",
  "Fuel Type": "Petrol",
  drive: function(){
    console.log(`${this.make} ${this.model} is driving`)
  },
  
  show: function(){
    console.log(this)
  }
}

// console.log(car.make);
// console.log(car.model);
// console.log(car['Fuel Type']);

// car.year = "1993";
// delete car.model;

// car.drive()
// car.show()

// for(let key in car){
//   console.log(`${key}: ${car[key]}`)
// }

console.log(Object.keys(car))
console.log(Object.values(car))
console.log(Object.entries(car))