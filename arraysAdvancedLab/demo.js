// function firstlast(array) {

//     let first = Number(array[0]);
//     let last = Number(array.pop());
  

//     return first + last;
// }
// console.log(firstlast(['20', '50', '40']));

// let arr = ['Mary', 'Alex', 'Sofia', 'Anton'];
// let sorted = arr.sort();
// console.log(sorted);
// let nums = [11, 3, 41, 100, 1, 53, 2, 21];
// let sortedNums = nums.sort();
// console.log(sortedNums.join(' '));



// let nums = [20, 40, 10, 30, 100, 5];
// nums.sort((a, b) => b - a); // a - b : vyv vyzhodqsht red
// console.log(nums.join('|'));


let words = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
console.log(words.sort());
console.log(words.sort((a, b) => a.localeCompare(b)));