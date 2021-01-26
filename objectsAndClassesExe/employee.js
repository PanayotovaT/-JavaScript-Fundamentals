function employee(stringArray) {

    //Name: {employeeName} -- Personal Number: {personalNum}
    let employees = {};
    for(let line of stringArray) {
        employees[line] = line.length;
    }

    Object.entries(employees).forEach(element => {
        console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`)

    })

}

let input = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ];    

employee(input);