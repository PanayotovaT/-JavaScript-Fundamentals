function firstLastK(arr) {

    let k = arr.shift();
    console.log(arr.slice(0, k).join(' '));
    console.log(arr.slice(arr.length - k).join(' '));

}

firstLastK([2, 
    7, 8, 9]
    )