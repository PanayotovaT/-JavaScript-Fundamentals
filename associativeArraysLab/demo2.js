let myMap = new Map();

console.log(myMap);
myMap.set('Tim', '+345 7898 688');
myMap.set('John', '+345 8799 789');
console.log(myMap);
console.log(myMap.has('Tim'));
console.log((myMap.has('Thomas')));
console.log(myMap.size);
console.log(myMap.get('John'));
myMap.delete('Tim');
console.log(myMap.has('Tim'));

myMap.set('Alex', '+259 799 7990');
myMap.set('Sofi', '+245 980 8093');

// for(let line of myMap) {
//     console.log(line);
// }

// let entries = Array.from(myMap.entries())
// console.log(entries);

// let keys = Array.from(myMap.keys());
// console.log(keys);


// let values = Array.from(myMap.values());
// console.log(values);
// let keys = myMap.keys();
// console.log(keys);
// for(let key of keys) {
//     console.log(`${key} --`);
// }

let keys = [...myMap.keys()];
console.log(keys);