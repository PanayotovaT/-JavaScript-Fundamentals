function solve(n){

    let num = n;
    let count = 0;
    let i = 1;
    let sum = 0;

    while (count < num) {
        console.log(i);
        sum += i;
        i += 2;
        count++;
    }
    console.log(`Sum: ${sum}`);
    


}

solve(3);