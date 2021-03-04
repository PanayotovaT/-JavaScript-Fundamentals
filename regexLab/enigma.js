function solve(input) {

    let n = Number(input.shift());
    input = input.splice(0, n);
    let attackcount = 0
    let destroyedCount = 0;
    let attacked = [];
    let destroyed = [];
    let regex = /[star]/gi;
    let groupRegex = /@(?<planet>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<typeAttack>[A|D])![^@:!\->]*\->(?<soldiers>\d+)/g;

    for(let line of input) {
        let changed = [];
        let num = line.match(regex) && line.match(regex).length;
        
            for(let i = 0; i < line.length; i++) {
                let char = line.charCodeAt(i) - num;
                let currentChar = String.fromCharCode(char);
                changed.push(currentChar);
            }
            let string = changed.join('');
            let match = groupRegex.exec(string);
            if(match !== null) {
                if(match.groups.typeAttack == 'A') {
                    attackcount++;
                    attacked.push(match.groups.planet);
                } else if(match.groups.typeAttack == 'D') {
                    destroyedCount++;
                    destroyed.push(match.groups.planet);
                }
                match = groupRegex.exec(string);
            }
       
    }
    attacked = attacked.sort((a, b)=> a.localeCompare(b));
    destroyed = destroyed.sort((a, b)=> a.localeCompare(b));
    
    console.log(`Attacked planets: ${attackcount}`);
    attacked.forEach(x => console.log(`-> ${x}`));
    console.log(`Destroyed planets: ${destroyedCount}`);
    destroyed.forEach(x => console.log(`-> ${x}`));

}
solve(['2', 
'EHfsytsnhf?8555&I&2C9555SR', 
'EHfsytsnhf?8555&I&2C9555SR',
'EHfsytsnhf?8555&I&2C9555SR'])

solve(['3',
    'tt(\'\'DGsvywgerx>6444444444%H%1B9444', 
    'GQhrr|A977777(H(TTTT', 
    'EHfsytsnhf?8555&I&2C9555SR'])