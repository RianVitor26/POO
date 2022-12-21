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

console.log(`Nome: ${person1.name}, age: ${person1.age}, height: ${person1.height}, weight: ${person1.weight}`)