function sumAndSubtract(x, y ,z) {
    function sum(a, b){
        return a + b;
    }

    let result = sum(x, y);
    return result - z;

}
let finalResult = sumAndSubtract(23, 6, 10);
console.log(finalResult);