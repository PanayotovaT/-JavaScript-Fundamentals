function signCheck(numOne, numTwo, numThree){

    let result = '';
  
    if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {

        result = 'Positive';

    } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
        result = 'Negative';

    } else if ( numOne < 0 && numTwo > 0 && numThree > 0) {

        result = 'Negative';
    } else if (numTwo < 0 && numOne > 0 && numThree > 0) {

        result = 'Negative';
    } else if (numThree < 0 && numOne > 0 && numTwo > 0) {
        result = 'Negative';
    } else {
        result = 'Positive';
    }

    console.log(result);

}

signCheck(-1, 0, 1)