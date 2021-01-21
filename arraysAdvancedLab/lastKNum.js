function firstKLastK(arr) {

    let k = arr.shift();
    console.log(arr.slice(0, k).join(' '));
    console.log(arr.slice(arr.length - k).join(' ')); //ili -k

}
firstKLastK([2, 
    7, 8, 9]);
    firstKLastK([3,
        6, 7, 8, 9]);