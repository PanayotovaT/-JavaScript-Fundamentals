function factoriel(num1, num2) {

    let fact = 1;
    function firstNum(num1) {
        for (i = 1; i <= num1; i++) {
            fact *= i
        }
        return fact;
    }
    let secondFact = 1;
    function secondNum(num2) {
        for (i = 1; i <= num2; i++) {
            secondFact *= i;
        }
        return secondFact;
    }

    return (firstNum(num1) / secondNum(num2)).toFixed(2);
}

console.log(factoriel(6, 2));