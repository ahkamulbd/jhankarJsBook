// const mouse = {
//     name: 'Jerry'
// }
// console.log (mouse);

class Vehicle {
    constructor (brand, model, fuelType) {
        this.brand = brand;
        this.model = model;
        this.fuelType = fuelType;
    }
}

class Bus extends Vehicle {
    constructor (brand, model, fuelType, capacity) {
        super (brand, model, fuelType);
        this.capacity = capacity;
    }
}

const cityBus = new Bus ('Volvo', 'V 6', 'Diesel', 50);
const proto1 = Object.getPrototypeOf (cityBus);
console.log (proto1);