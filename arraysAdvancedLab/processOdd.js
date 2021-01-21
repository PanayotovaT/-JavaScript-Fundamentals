function processOdd(inputArr) {
    //filter odd positions
    let filtered = inputArr.filter(isOddIndex);
    //map double values
    let doubled = filtered.map(x => x * 2);
    //reverse result
    console.log(doubled.reverse().join(' '));

    function isOddIndex(value, index) {
        return (index % 2) === 1;
    }
}
processOdd([10, 15, 20, 25]);
processOdd([3, 0, 10, 4, 7, 3]);

// let filtered = inputArr.filter((v, i) => (i % 2) == 1); zamenqemo e s purviqt red i mahame dopulnitelnata funkziq;