class Car {
    make:string 
    model:string 
    year :number 

    constructor (make:string,model:string,year:number){
        this.make = make,
        this.model = model,
        this.year = year
    }

    getCarAge (){
        const YearNow = new Date().getFullYear()
        const difference = YearNow - this.year
        console.log(difference + `, assuming current year is ${YearNow}`)
    }
}

const car = new Car("Honda", "Civic", 2018);
car.getCarAge();