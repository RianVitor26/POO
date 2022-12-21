import { Message } from "./Message"

class Person {
    name: string = ""
    age: number = 0
    height: number = 0
    weight: number = 0

    constructor(name: string, age: number, height: number, weight: number) {
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
    }

    sayName(): void {
        console.log(`My name is ${this.name}`)
    }

    pratice(): void {
        console.log(`I gonna pratice!`) 
    }
}

const person1 = new Person("Rian", 20, 1.80, 80)

console.log(`PERSON --- Name: ${person1.name}, age: ${person1.age} years old, height: ${person1.height}tall, weight: ${person1.weight}kg`)


class Athlete extends Person{
    sport: string = ""
    modality: string = "" 

    constructor(name: string, age: number, height: number, weight: number, sport:string, modality:string) {
        super(name, age, height, weight)
        this.sport = sport
        this.modality = modality
    }

    saySport() {
       console.log(`I pratice ${this.sport}`)
    }
    
    pratice(): void {
        console.log(`I gonna pratice more than you!`)
    }
}

const athlete1 = new Athlete("Rian", 20, 1.80, 80, "football", "field football")
console.log(
  `ATHLETE --- Name: ${athlete1.name}, age: ${athlete1.age} years old, height: ${athlete1.height}tall, weight: ${athlete1.weight}kg, Sport: ${athlete1.sport}, Modality: ${athlete1.modality}'}`
);

athlete1.sayName()
athlete1.saySport()


const message1 = new Message("Hello, world!");
message1.showMessage()

person1.pratice()
athlete1.pratice()