let numsAsString = ['1', '12', '15', '73', '13'];
let nums = numsAsString.map(Number);
console.log(nums);
let incr = nums.map(x => x + 1);
console.log(incr);
console.log(incr.map(x => x.toString()));
function myMap(arr, fn) {

    let result = [];

    for(let element of arr) {
        let mapped = fn(element);
        result.pushed(mapped);
    }

    return myMap;
}