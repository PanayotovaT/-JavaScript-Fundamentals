function solve(arr){

    let sumEven = 0;
    let sumOdd = 0;
    for(let i = 0; i < arr.length; i++){

        let current = arr[i];
        if(arr[i] % 2 === 0){
            sumEven += current;
        } else{
            sumOdd += current;
        }

    }
    let result = sumEven - sumOdd;
    console.log(result);


}
solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);

/*[1,2,3,4,5,6]
[3,5,7,9]
[2,4,6,8,10]
*/