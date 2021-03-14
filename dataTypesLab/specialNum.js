function solve(num){

    for(let i = 1; i <= num; i++){
       
        let current = i.toString();
        let sum = 0;
        let isSpecial = false;
        
        
        for(let j = 0; j < current.length; j++){

            let digit = Number(current[j]);
            sum += digit;

        }

        if(sum == 5 || sum == 7 || sum == 11){
            isSpecial = 'True';

        } else {
            isSpecial = 'False';
        }

        console.log(`${i} -> ${isSpecial}`);

    }

}

solve(15)