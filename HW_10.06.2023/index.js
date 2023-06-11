class Company {
    constructor (company, shortName, airBusAmount){
 this.companyName = company;
 this.shortName = shortName;
 this.airBusAmount = airBusAmount;

}
}

class PassangerInfo extends Company {
    constructor(userName,companyName, shortName, airBusAmount){
        super(companyName, shortName, airBusAmount)
        this.userName = userName;
    }
   getInfo() {
        return `Пассажир ${this.userName} воспользовался компанией ${this.companyName} у которой ${this.airBusAmount} самолётов, его билет ${this.shortName}`
    }
}
const info = new PassangerInfo("Oleksii","Boing","E175",25);
console.log(info.getInfo());

