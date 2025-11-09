console.log("In the name of Allah");

const car = {
  make: "Toyota",
  model: "Corrola",
  "Fuel Type": "Petrol",
  drive: function () {
    console.log(`${this.make} ${this.model} is driving`);
  },
  show: function () {
    console.log(this);
  },
  color: {
    "inside color": "black",
    "outside color": "white",
  },
};

console.log(car.make);
console.log(car.model);
console.log(car["Fuel Type"]);

car.year = "1993";
delete car.model;

car.drive();
car.show();

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

console.log(car["color"]["inside color"]);

for (let key in car["color"]) {
  console.log(`${key}: ${car["color"][key]}`);
}

for (let k in car) {
  for (let e in car[k]) {
    console.log(car[k][e]);
  }
}

for (key in car) {
    if (typeof car[key] == "function")
        continue;

    if (typeof car[key] == "object" && car[key] != null)
      for (inKey in car[key])
            console.log(`${inKey}: ${car[key][inKey]}`);
        
    else console.log(`${key}: ${car[key]}`);
}

const car = new Object();
car.brand = "Toyota";
car.engine = { fuel: "Petrol", power: "V6" };

console.log(Object.entries(car));

function Car(make, fuel, power) {
  this.make = make;
  this.engine = {
    fuel: fuel,
    power: power,
  };
}

const car = new Car("Toyota", "Petrol", "V6");

class Car {
  constructor(make, fuel, power) {
    this.make = make;
    this.engine = {
      fuel: fuel,
      power: "V6",
    };
  }

  print() {
    console.log(this);
  }
}

const car = new Car("Toyota", "Petrol", "V6");

console.log(car);
car.print();

let patients = ["Omer", "Salim", "Ali", "Ahmad", "Weqar"];

let targetPatient = patients
  .filter((patient) => patient.startsWith("A"))
  .filter((patient) => patient.endsWith("d"));

console.log(targetPatient);

patients.push("Mahmood", "Nadim");
console.log(`Last patient ${patients.pop()} is removed!`);
console.log(`First patient ${patients.shift()} is removed!`);
console.log(
  `The new patient-list count is ${patients.unshift("Omer", "Lima")} patients`
);

let patientNames = patients.reduce(
  (strNames, patient) => `${strNames} ${patient}`
);
console.log(patientNames);
