function solve(input) {
    let dogs = [];

    class Dog {
        constructor(name, age) {
            this.name  = name;
            this.age = age;
        }
        woof() {
            console.log(`This dog name is ${this.name}. ${this.name} aged ${this.age} says woof.`);
        }
    }
    for(let line of input) {
        let[name, age] = line.split(' ');
        let dog = new Dog(name, age);
        dog.woof();
        dogs.push(dog);
    }
    dogs.forEach(dog => dog.woof());

}
solve(['Tommy 3', 'Katy 2', 'Sandro 5'])