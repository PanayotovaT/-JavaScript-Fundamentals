function twoSmallestNums(inputArr) {

    let orderedArr = inputArr.sort((a,b) => a - b);
    let smallNums = orderedArr.slice(0, 2).join(' ');
    console.log(smallNums);
}

twoSmallestNums([30, 15, 50, 5]);
twoSmallestNums([3, 0, 10, 4, 7, 3]);