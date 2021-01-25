function personInfo(firstName, lastName, age){
    // let person = {};
    // person.firstName = firstName;
    // person.lastName = lastName;
    // person.age = age;

    // let person = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     age: age
    // };
    let person = {
        firstName, //понеже няма зададено име на променливата, операторът присвоява умето на стойността като име на променливата
        lastName,
        age
    }

    let infoPerson = {
        sayHello: function() {
            console.log(`Hello`);
        }
      
    }
    infoPerson.sayHello();
    
    
    return person;


}

console.log(personInfo("Peter", 
"Pan",
"20"
))