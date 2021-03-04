function solve(line) {

    let changed = [];
    let regex = /(?<letters>[starSTAR])/gm;
    let num = line.match(regex).length;
    for (let i = 0; i < line.length; i++) {
        let char = line.charCodeAt(i) - num;
        let currentChar = String.fromCharCode(char);
        changed.push(currentChar);
    }
    let groupRegex = /(?<planet>@[A-Za-z]+)([^:]+)?:(?<populaton>\d+)([^!]+)?!(?<typeAttack>[AD])(.+)?->(?<soldiers>[\d]+)/g;
    let string = changed.join('');
    let match = groupRegex.exec(string);

    console.log(changed.join(''));
}
// solve('tt(\'\'DGsvywgerx>6444444444%H%1B9444')
solve('tt(\'\'DGsvywgerx>6444444444%H%1B9444');