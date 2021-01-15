function solve(num) {

    let isNumPrime = true;
    let devisionCounter = 0;
    for(let i = 1; i <= num; i ++) {

        if (num % i == 0) {
            devisionCounter++;
        }

    }
    if(devisionCounter > 2){
        isNumPrime = false;
    }
    console.log(isNumPrime);

}

solve(8);