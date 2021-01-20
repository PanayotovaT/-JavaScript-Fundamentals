function solve(num) {

    let str = num.toString().split('');
    let result = '';
    
    let sum = 0;
    while (sum < 5) {
        sum = 0;
        for (let i = 0; i < str.length; i++) {
            let digit = Number(str[i]);
            sum += digit;
            if(sum <= 5) {
                str.push(9);
            }
            if (sum > 9) {
                let newSum = 0;
                sum = sum.toString().split('');
                console.log(sum);
                for(let j = 0; j < sum.length; j++) {
                  newSum += Number(sum[j]);
                  sum = newSum;
                }
            }
            
        }
    }
    result = Number(str.join(''));
    return result;
}
console.log(solve(101));