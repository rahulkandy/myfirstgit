"use strict";
/*let fname: string;
fname='Rahul';
let newfname=fname.toLocaleUpperCase();
console.log(newfname);


const sum =
    (num1: number, num2: number, ...num3: number[]): number =>
     num1 + num2 + num3.reduce((a,b)=>a+b)

console.log(sum(8, 5, 2, 8, 3, 9,10));*/
//CLASS//
class Employee {
    id;
    name;
    address;
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return `${this.name} lives at ${this.address}`;
    }
}
let john = new Employee(21, "John", "Vaisennhus 55");
let address = john.getNameWithAddress();
console.log(address);
