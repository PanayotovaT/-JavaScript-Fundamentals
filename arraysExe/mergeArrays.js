function solve(firstArray, secondArray){

    let result =[];
    for(let i = 0; i < firstArray.length; i++){

        if(i % 2 === 0){
            let sum = Number(firstArray[i]) + Number(secondArray[i]);
            result.push(sum);

        } else {
            result.push(firstArray[i] + secondArray[i]);
        }
    }
    console.log(result.join(' - '));

}

solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)