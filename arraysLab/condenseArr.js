function solve(arr) {

    while (arr.length !== 1) {
        let newArr = [];

        for (let i = 0; i < arr.length - 1; i++) {
            let index = i + 1;
            let newNum = arr[i] + arr[index];
            newArr.push(newNum);
        }
        arr = newArr;

    }
    let num = arr[0];
    console.log(num);

}

solve([2, 10, 3])
solve([5, 0, 4, 1, 2])
solve([1])
/*[2,10,3]
[5,0,4,1,2]
[1]
*/