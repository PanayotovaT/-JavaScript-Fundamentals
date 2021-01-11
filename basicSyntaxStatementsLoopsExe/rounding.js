function solve(n, precision){
    if(precision > 15){
        precision = 15;
    }
    n = n.toFixed(precision);
    n = parseFloat(n);
    console.log(n);

}

solve(10.5,3)