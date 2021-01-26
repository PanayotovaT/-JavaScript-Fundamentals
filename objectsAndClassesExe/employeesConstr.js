function employees(arr) {

    class Person {
        constructor(name) {
           this.name = name,
           this.number = name.length
        }

        print() {
           return `Name: ${this.name} -- Personal Number: ${this.number}`
        }
    }
    arr.map(x => {
        return new Person(x);
    })
    .forEach(obj => {
        console.log(obj.print());
    })

}

let input = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
employees(input)