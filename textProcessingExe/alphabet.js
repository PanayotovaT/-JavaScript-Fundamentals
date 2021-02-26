function solve(str) {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    str = str.split(' ').filter(x => x !== '');
    let sum = 0;
    for (let line of str) {
        let firstLetter = line[0];
        let lastLetter = line[line.length - 1];
        let num = Number(line.slice(1, line.length - 1));
        let firstPosition = alphabet.indexOf(firstLetter.toLowerCase()) + 1;
        let secondPosition = alphabet.indexOf(lastLetter.toLowerCase()) + 1;
        if (firstLetter == firstLetter.toUpperCase()) {
            num /= firstPosition;
        } else {
            num *= firstPosition;
        }

        if (lastLetter == lastLetter.toUpperCase()) {
            num -= secondPosition;
        } else {
            num += secondPosition;
        }
        sum += num;
    }
    console.log(sum.toFixed(2));


}

solve('A12b s17G');
solve('P34562Z q2576f   H456z');
solve('a1A')