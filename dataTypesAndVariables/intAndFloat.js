function solve(num1, num2, num3) {
    //Math.trunce(3,24) - vzema samo zqlata chast, kato parseInt(raboti s chisla a ne sys String)

    let sum = num1 + num2 + num3;
    let convertedSum = Math.trunc(sum);

    if( sum === convertedSum){
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`)
    }

}

solve(100, 200, 303);