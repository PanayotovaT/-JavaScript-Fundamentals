function carWash(arr) {

    let percentage = 0;
   
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        switch (command) {

            case 'soap':
                percentage += 10;
                break;
            case 'water':
                percentage += 20;
                break;
            case 'vacuum cleaner':
                percentage += 25;
                break;
            case 'mud':
                percentage -= 10;
                break;

        }
    }
    return `The car is ${percentage.toFixed(2)}% clean.`


}
console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));