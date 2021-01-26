function employees(arr) {

    let employees = [];
    
    arr.forEach(element => {
        let person = {
            name : element,
            number : element.length
        }
        employees.push(person);

    })
    employees.forEach(obj => {
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);
    })

}
let input = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
employees(input)