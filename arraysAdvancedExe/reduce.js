function demo(arr) {

    let result = arr.reduce((sum , b) => sum + b);
    console.log(result);

    let even = (element) => element % 2 === 0;
    let inclSome = arr.some(even);
    let inclFilter = arr.filter(even);
    console.log(inclSome);
    console.log(inclFilter);
    let reversed = inclFilter.reverse();
    console.log(reversed);

}

demo([1, 2, 3, 4])