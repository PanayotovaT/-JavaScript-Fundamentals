function solve(n, arr){

    let partialArr = [];
for(i = n - 1; i >= 0; i--){

    let num = arr[i];
    partialArr.push(num);
    
}
console.log(partialArr.join(' '));
}

solve(3, [10, 20, 30, 40, 50])