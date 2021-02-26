function solve(input) {

    let cats = []
    class Cat {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }
        talk() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let line of input) {
        line = line.split(' ');
        let cat = new Cat(line[0], line[1]);;
        cat.talk();
        cats.push(cat);

    }
    for(let cat of cats) {
        cat.talk();
    }

}
solve(['Mellow 2', 'Tom 5'])


