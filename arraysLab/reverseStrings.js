function swap(arr) {

    let lastIndex = arr.length - 1;

    for(let i = 0; i < arr.length / 2; i++ ){
        let temp = arr[i];
        arr[i] = arr[lastIndex - i];
        arr[lastIndex - i] = temp;
    }

    console.log(arr.join(' '))
}
/*['a', 'b', 'c', 'd', 'e']
['abc', 'def', 'hig', 'klm', 'nop']
['33', '123', '0', 'dd']
*/
swap(['a', 'b', 'c', 'd', 'e']);
swap(['abc', 'def', 'hig', 'klm', 'nop']);