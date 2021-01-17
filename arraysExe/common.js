function solve(array1, array2){

    for(let element of array1){
        let isCommon = array2.includes(element);
        if(isCommon){
            console.log(element);
        }
    }

}

function common (firstArray, secondArray){

    for (const element of firstArray) {
        for (const el of secondArray) {

            if(element === el){
                console.log(element);
            }
            
        }
        
    }
}
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']

)
common(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])