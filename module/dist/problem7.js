"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make,
            this.model = model,
            this.year = year;
    }
    getCarAge() {
        const YearNow = new Date().getFullYear();
        const difference = YearNow - this.year;
        console.log(difference + `, assuming current year is ${YearNow}`);
    }
}
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();
