
let myArr = ['23', '34', '42', '20', '71', '30'];
console.log(myArr);
 
// let slicedArr = myArr.slice(2,5); //2 including, 5 excluded
// console.log(slicedArr);

// slicedArrNew = myArr.slice(-2); //negative value starts counting from the end
// console.log(`sliced: `, slicedArrNew);

//SPLICE changes the original Array!!!

let spliceArray = [23, 17, 71, 38, 33, 12, -2, 16, 31];
console.log(`original: `, spliceArray);
let spliced = spliceArray.splice(2, 4, 100, 200, 31 ); //za da ne triem nishto splice(2, 0 , 78,18,33 -dobavqme bez da triem) (2,0) zapochni ot 2ri index i iztrii 0 elementa
console.log(`spliced: `, spliced);
console.log(`original:`, spliceArray);
l