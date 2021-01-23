function demo(arr) {
let sorted = arr.sort((a, b) => a.localeCompare(b));
console.log(sorted);
let result1 = [];
let result2 = [];

sorted.forEach((element, i, array)=> {
    element += 'm';
    result1.push(element);
    console.log(element);
    element += i;
    result2.push(element);
    console.log(element);
    console.log(array);
    
});
console.log(result1);
console.log(result2);
}

demo(['a', 'c', 'l', 'd'])