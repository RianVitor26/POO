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
}

const person1 = new Person("Rian", 20, 1.80, 80)

console.log(`PESSOA --- Nome: ${person1.name}, age: ${person1.age} years old, height: ${person1.height}tall, weight: ${person1.weight}kg`)


class Athlete extends Person{
    sport: string = ""
    modality: string = ""

    constructor(name: string, age: number, height: number, weight: number, sport:string, modality:string) {
        super(name, age, height, weight)
        this.sport = sport
        this.modality = modality
    }
}

const athlete1 = new Athlete("Rian", 20, 1.80, 80, "football", "field football")
console.log(
  `ATHLETE --- Nome: ${athlete1.name}, age: ${athlete1.age} years old, height: ${athlete1.height}tall, weight: ${athlete1.weight}kg, Sport: ${athlete1.sport}, Modality: ${athlete1.modality}'}`
);