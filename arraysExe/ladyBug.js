function solve(array) {

    let fieldSize = array[0];
    let ladybugIndexes = array[1].split(' ');
    let isThereLadybug = false;
    let newLadyBugField = [];
    newLadyBugField.length = fieldSize;

    console.log(ladybugIndexes);

    for (let i = 2; i < array.length; i++) {

        let command = array[i].split(' ');
        for(let j = 0; j < ladybugIndexes.length; j++){

            if(ladybugIndexes[j] >= 0 && ladybugIndexes[j] <= fieldSize){
                isThereLadybug = true;

                if(isThereLadybug){
                    

                }
            }

            


        }

       


    }


}

solve([3, '0 1',
    '0 right 1',
    '2 right 1'])