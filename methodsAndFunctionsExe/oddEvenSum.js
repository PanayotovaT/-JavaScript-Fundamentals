function oddEvenSums(n) {

        let array = String(n).split(''); //трансформираме от число към масив
        let sumOdd = 0;
        let sumEven = 0;
        //Odd sum = 9, Even sum = 4

    
        for(let i = 0; i < array.length; i++ ) {
            const num = Number(array[i]);
            if(num % 2 === 0){
                sumEven += num;
            } else {
                sumOdd += num;
            }
        }
        return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`

}

console.log(oddEvenSums(1000435));