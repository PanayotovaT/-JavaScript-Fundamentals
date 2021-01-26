
let quantity = 4;
const total = getPrice() * quantity * 1.20;
console.log(total);

function getPrice(price) {
    price = 3.2;
    return price;
}

//  let result = multiply(getMax(5,10), 20);
//  console.log(result);

function getMax(a, b) {
    return Math.max(a, b);
}

function multiply(a, b) {
    return a * b;
}
console.log(multiply(getMax(5, 10), 20));

let myArray = ['one', 'two', 'three', 'four', 'five', 'six'];
console.log(myArray);
let sliced = myArray.slice();
console.log(sliced);
let slicedTwo = myArray.slice(2);
console.log(slicedTwo);
let slicedThree = myArray.slice(1, 5);
console.log(slicedThree);
let slicedNegative = myArray.slice(-3);
console.log(slicedNegative);
let slicedNegTwo = myArray.slice(-2, -3);
console.log(slicedNegTwo);
sliced.shift();
sliced.pop();
console.log(myArray);
console.log(sliced);

let newArray = [23, 15, 7, 8, 11, 24, 33, 16];
let spliced = newArray.splice(2, 1, 10);
console.log(newArray.join(', '));
console.log(spliced.join(', '));
let splicedTwo = newArray.splice();
console.log(splicedTwo);
splicedTwo.push(3);
console.log(newArray)
console.log(splicedTwo)
console.log(spliced);
newArray.splice(6);
console.log(newArray);
newArray.splice(-2);
console.log(newArray);
newArray.splice(-2, 2);
console.log(newArray)

let testArr = ['bananas', 'Alexander', 'Sofia', 'Filip', 'Teodora', 'Panayotova'];
let lengths = testArr.map(x => x.length);
console.log(lengths);
let longWords = testArr.filter(x => x.length > 5);
console.log(longWords);

let nums = [1, 15, -3, 14, -7, -10, 0, 22];
let positiveNums = nums.filter(x => x >= 0);
console.log(positiveNums);

function reversedFunc(arr) {

    console.log(arr)
    let result = arr.filter((num, i) => i % 2 === 0);
    console.log(result);
    result = result.map(x => x * 2);
    console.log(result);
    result.reverse();
    console.log(result);
    return result.join(':')


}
console.log(reversedFunc([1, 17, 12, 55, 33, -2, 16, 20]))

let nameArr = ['A', 'C', 'Z', 'T', 't', 'a', 'n'];
nameArr.sort();
console.log(nameArr);
nameArr.sort((x, y) => x.localeCompare(y));
console.log(nameArr);
let digits = [1, 2, 100, 34, 200, 52, 12];
let sortedDigits = digits.sort((x, y) => (x - y));
console.log(sortedDigits);

let numbers = [3, 17, 22, 0, -3, 16, -8, 99];
let sortedNumbers = numbers.sort((x, y) => x - y);
let splicedNums = sortedNumbers.splice(0, 3);
console.log(splicedNums);

let personInfo = {};
personInfo.name = 'Alexander';
personInfo['lastName'] = 'Panayotov';
personInfo.hair = 'blond';
personInfo.age = 2;
console.log(personInfo);

function createPerson(name, lastName, age) {
    let person = {};
    person.name = name;
    person.lastName = lastName;
    person.age = age;

    person.sayHello = () => console.log('Hello');


    return person

}
console.log(createPerson('Sofia', 'Panayotova', 1))


let obj = { name: 'Alexander', lastName: 'Panayotov', age: 2, profession: 'kid', cuteness: 1000000 }
for (let key of Object.keys(obj)) {
    console.log(`${key} : ${obj[key]}`)
}

let mySelf = { name: 'Teodora', lastName: 'Panayotova', age: 32, status: 'married' }

for (let key of Object.keys(mySelf)) {
    console.log(`${key} => ${mySelf[key]}`);
}

let myHusband = { name: 'Filip', lasteName: 'Panayotov', age: 36, status: 'married' };
for (let key of Object.keys(myHusband)) {
    console.log(`${key} -- ${myHusband[key]}`)
}

function jForm(jsonValue) {

    let obj = JSON.parse(jsonValue);
    let entries = Object.entries(obj);
    for (let [key, value] of entries) {
        console.log(`${key} => ${value}`)
    }


}
let input = {
    "name": "George", "age": 40, "town": "Sofia"
    }
    


 jForm(input)

function convertJ(firstName, lastName, hairColor) {
    let obj = {}
    obj.firstName = firstName; 
    obj.lastName = lastName;
    obj.hairColor = hairColor;
    let newStrJ = JSON.stringify(obj);
    console.log(newStrJ);

}
convertJ('George', 'Jones',
    'Brown'
)