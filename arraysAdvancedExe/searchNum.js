function searchNum(numbers, params) {

    let [elements, delNum, searchNum] = params;
    let newArr = numbers.slice(0, elements);
    numbers = newArr;
    numbers.splice(0, delNum);
    let count = 0;
    for(let element of numbers){
        if (element === searchNum) {
            count++;
        }
    }
    console.log(`Number ${searchNum} occurs ${count} times.`)
}

searchNum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);