class Car {
    constructor(mark,prodYear,price,maxSpeed,minSpeed){
        this.mark = mark,
        this.prodYear = prodYear,
        this.price = price,
        this.maxSpeed = maxSpeed,
        this.minSpeed = minSpeed
    }
    speedUp() {
     this.maxSpeed += 10;
    }
    speedDown() {
     this.minSpeed -= 20;
    }
}

class Toyota extends Car {
    constructor(mark,prodYear,price,maxSpeed,minSpeed){
        super(mark,prodYear,price,maxSpeed,minSpeed)
    }
}

const cabri = new Toyota("Cabri",2010,25000,100,30);
cabri.speedUp();
cabri.speedUp();

console.log(cabri);