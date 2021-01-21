function manipulateArr(arr) {

    let workArray = arr.shift().split(' ').map(Number);
    
    for (let stepsOfArr of arr) {
        let element = stepsOfArr.split(' ');
        let command = element[0];
        let num = Number(element[1]);

        switch (command) {
            case 'Add':
                workArray.push(num);
                break;
            case 'Remove':
                workArray = workArray.filter(x => x !== num);
                break;
            case 'RemoveAt':
               let removed = workArray.splice(num, 1);
                break;
            case 'Insert':
                let index = Number(element[2]);
                workArray.splice(index, 0, num);
                break;
        }
    }
    console.log(workArray.join(' '));
 
}

manipulateArr(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)