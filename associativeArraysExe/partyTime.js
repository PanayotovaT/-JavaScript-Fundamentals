function solve(input) {
    let list = {
        'VIP': [],
        'Regular': []

    }

    let name = input.shift()
    while (name !== 'PARTY') {
        let char = name[0]
        if (isNaN(char)) {
            list['Regular'].push(name)
        } else {
            list['VIP'].push(name)
        }

        name = input.shift();
    }
    input.forEach(name => {
        if (list['VIP'].includes(name)) {
            let i = list['VIP'].indexOf(name);
            list['VIP'].splice(i, 1);
        } else if (list['Regular'].includes(name)) {
            let i = list['Regular'].indexOf(name);
            list['Regular'].splice(i, 1);
        }
    })
    console.log(list['VIP'].length + list['Regular'].length);
    if (list['VIP'].length > 0) {
        console.log(list['VIP'].join('\n'));
    }
    if (list['Regular'].length > 0) {
        console.log(list['Regular'].join('\n'));
    }
}
solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]

)