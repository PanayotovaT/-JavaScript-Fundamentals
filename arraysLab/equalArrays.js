function solve(arrOne, arrTwo) {

    let isArrEqual = false;
    sum = 0
    for (let i = 0; i < arrOne.length || i < arrTwo.length; i++) {

        if (arrOne[i] == arrTwo[i]) {
            isArrEqual = true;

        } else {
            isArrEqual = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }


    }

    if (isArrEqual) {
        for (let j = 0; j < arrOne.length; j++) {
            let current = Number(arrOne[j]);
            sum += current;
        }
        console.log(`Arrays are identical. Sum: ${sum}`)
    }


}

solve(['10', '20', '30'], ['10', '20', '30'])
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
solve(['1'], ['10'])

/* ['10','20','30'], ['10','20','30']
['1','2','3','4','5'], ['1','2','4','4','5']
['1'], ['10']
*/