function sorting(arr) {

    let result = [];
    while (arr.length > 1) {
        let max = Math.max(...arr);
        let maxIndex = arr.indexOf(max);
        result.push(max);
        arr.splice(maxIndex, 1);
        let min = Math.min(...arr);
        let minIndex = arr.indexOf(min);
        arr.splice(minIndex, 1);
        result.push(min);
       
    }
    if(arr.length == 1){
        result.push(arr[0]);
        arr.pop();
    }
    console.log(result.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 23, 2, 18, 94]);