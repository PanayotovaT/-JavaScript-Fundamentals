function kSequence(n, k) {

    let result = [1];
    for(let i = 1; i < n; i++) {
        let sum = 0;
        let current = result.slice(-k);
        for (let num of current) {
            sum += num;
        }
        result.push(sum);

    }
    console.log(result.join(' '));
}

kSequence(8, 2);