function solve() {

    let person = {};
    person.name = 'Alex';
    person['age'] = 2;
    person['status'] = 'kid';
    console.log(person);
    console.log(Object.entries(person));
    console.log(Object.keys(person));
    console.log(Object.values(person));
    for (let element of Object.entries(person)) {
        console.log(element);
        
    }
    for (const key of Object.keys(person)) {
        console.log(`Hi, ${key} => ${person[key]}`);
        
    }

    console.log(`Hello ${Object.values(person.name).join('')}`)
    console.log(`Hello ${Object.values(person.name).join('')}`)

}
solve()