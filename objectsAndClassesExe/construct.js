class Dog {
    constructor() {
        this.speak = () => {
            console.log('Woof');
        }
    }
}

let dog = new Dog();
dog.speak();

function cat(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let element of arr) {
        let [catname, catAge] = element.split(' ');
        let catt = new Cat(catname, catAge);
        catt.meow();
    }
}
cat(['Mellow 2', 'Tom 5'])