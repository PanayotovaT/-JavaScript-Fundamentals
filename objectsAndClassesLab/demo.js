let obj = { name:'Peter', age: 20 };
console.log(obj.name, obj.age); 

let myObj = {
    make : 'Opel',
    model: 'Zafira',
    color: 'grey',
    maxSpeed: 180,
    makeSound: function() {}

};
console.log(myObj);
// myObj.mileage = 11;
myObj['mileage'] = 11;
console.log(myObj);

console.log(myObj.color);
myObj.color = 'blue';
console.log(myObj.color);

console.log(myObj)