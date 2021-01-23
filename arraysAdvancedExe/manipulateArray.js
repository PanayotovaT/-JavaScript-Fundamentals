function manipulate(numbers, commands) {


    for (let element of commands) {

        element = element.split(' ');
        let command = element.shift();
        let index;
        let num;
    
        switch (command) {
            case 'add':
               index = Number(element[0]);
               num = Number(element[1]);
                numbers.splice(index, 0, num);
                                
                break;
            case 'addMany':
                index = Number(element.shift());
                let count = 0;
                for(let i = 0; i < element.length; i++){
                    numbers.splice(index + count, 0, Number(element[i]));
                    count++;
                }
                break;
            case 'contains':
                num = Number(element[0]);
                index = numbers.indexOf(num);
                console.log(index);
                break;
            case 'remove':
                index = Number(element[0]);
                numbers.splice(index, 1);
                break;
            case 'shift':
               index = Number(element[0]);
               for(let i = 1; i <= index; i++){
                   let move = numbers.shift();
                   numbers.push(move);
               }
               

                break;
            case 'sumPairs':
                let newArr = [];
                while(numbers.length > 1){
                    let a = Number(numbers.shift());
                    let b = Number(numbers.shift());
                    newArr.push((a + b));
                }
                if(numbers.length === 1) {
                    num = numbers[0];
                    newArr.push(num);
                }
                numbers = newArr;
                break;
            case 'print':
            console.log(`[ ${numbers.join(", ")} ]`);
                
              
        }
    }
}

manipulate([1, 2, 3, 4, 5], ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"])