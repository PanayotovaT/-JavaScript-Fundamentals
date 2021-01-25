function solve(catsAsStrings) {
    //declare class
    //parse iput
    //instanciate cats from input
    //iterate cats and say meaw
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;

        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    for(let catAsString of catsAsStrings){
        let [catName, catAge] = catAsString.split(' ');
        let cat  = new Cat(catName, catAge);
        cat.meow();
    }

}
solve(['Mellow 2', 'Tom 5'])