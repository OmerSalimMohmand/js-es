// console.log("In the name of Allah");

const car = {
  make: "Toyota",
  model: "Corrola",
  "Fuel Type": "Petrol",
  drive: function() {
    console.log(`${this.make} ${this.model} is driving`)
  },
  show: function() {
    console.log(this)
  },
  color: {
    "inside color": "black",
    "outside color": "white",
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

// console.log(Object.keys(car))
// console.log(Object.values(car))
// console.log(Object.entries(car))

// console.log(car['color']['inside color'])

// for (let key in car['color']) {
//   console.log(`${key}: ${car['color'][key]}`)
// }

// for (let k in car) {
//  for (let e in car[k]){
//     console.log(car[k][e])
//   }
// }

for (let key in car) {
  if (typeof car[key] === 'object' && car[key] !== null) {
    for (let inKey in car[key]) {
      console.log(`${inKey}: ${car[key][inKey]}`);
    }
  } else {
    console.log(`${key}: ${car[key]}`);
  }
}


