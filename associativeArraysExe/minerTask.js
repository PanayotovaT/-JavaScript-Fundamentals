function solve(input) {

    let mine = {}
    for (let i = 0; i < input.length; i++) {
        let resource = input[i];
        let qty = Number(input[++i]);
        if(!mine.hasOwnProperty(resource)) {
            mine[resource] = 0;
        }   
        mine[resource] += qty;     
    }

    for(let line of Object.keys(mine)) {
        console.log(`${line} -> ${mine[line]}`);
    }

}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )