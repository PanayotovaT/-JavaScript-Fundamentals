function cat(catsAsString) {

    class Cat {

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }

    }
    for(let catAsString of catsAsString ) {

        let [catName, catAge] = catAsString.split(' ');
        let newCat = new Cat(catName, catAge);
        newCat.meow()
    }
   

}

cat(['Mellow 2', 'Tom 3', 'Kitti 7'])