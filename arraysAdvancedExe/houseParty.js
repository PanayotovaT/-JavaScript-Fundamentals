function party(arr) {

    let list = [];
    for (element of arr) {
        let command = element.split(' ');
        let name = command[0];
        let isNot = command.includes('not');
        let isInList = list.includes(name);
        if (isNot) {
            if (isInList) {
                let newList = list.filter(x => x !== name);
                list = newList;
            } else {
                console.log(`${name} is not in the list!`);
            }



        } else {
            if(isInList) {
                console.log(`${name} is already in the list!`)
            } else {
                list.push(name);
            }

        }

    }
    console.log(list.join(''))
}
party(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)