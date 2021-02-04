function solve(input) {

    let actions = {
        Contains(check) {
            
            if (string.includes(check)) {
                console.log(`${string} contains ${check}`);
            } else {
                console.log(`Substring not found!`);
            }

        },
        Flip(upperOrLower, start, end) {
           
            let first = string.substring(0, start);
            let middle = string.substring(start, end);
            let last = string.substring(end);
            if (upperOrLower == 'Upper') {
                middle = middle.toLocaleUpperCase();
            } else {
                middle = middle.toLocaleLowerCase()
            }
            string = first + middle + last;
            console.log(string);

        },
        Slice(start, end) {
         
            let first = string.substring(0, start);
            let last = string.substring(end);
            string = first + last;
            console.log(string);
        }
    }
    let string = input.shift();
    let line;
    while ((line = input.shift()) !== 'Generate') {
        let [command, data1, data2, data3] = line.split('>>>')
        let action = actions[command];
        action(data1, data2, data3);
    }
    console.log(`Your activation key is: ${string}`);
}
solve(['abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'])
