let myArr = ['one', 'two', 'three', 'four'];
let lengths = myArr.map(x => x.length); //landa funkciq
console.log(lengths);

function doubleNum(num) {
    return num * 2;
}
console.log(doubleNum(4));

let arr = [7, -2, 13, 66, 12, 44, 11];
let doubled = arr.map(doubleNum);

let newDoubled = arr.map(n => n * 2);

console.log(arr);
console.log(doubled);
console.log(newDoubled);