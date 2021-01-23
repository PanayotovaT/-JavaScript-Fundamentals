function distinctArray(arr) {
    // for(let i = 0; i < arr.length; i++) {
    //     let index = arr.indexOf(arr[i],i + 1);
    //     if(index !== -1) {
    //         arr.splice(index, 1);
    //     }
    // }
    // console.log(arr.join(' '));
    let outputArr = [];
    for(let el of arr) {
        if(!outputArr.includes(el)) {
            outputArr.push(el);
        }
    }
    console.log(outputArr.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);