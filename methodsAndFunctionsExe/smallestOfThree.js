function smallestOfThree(a, b, c) {

    let smallest = Number.MAX_SAFE_INTEGER;

    // if(smallest > a) {
    //     smallest = a;
    // }

    // if(smallest > b){
    //     smallest = b
    // }

    // if(smallest > c) {
    //     smallest = c;
    // }
    smallest = smaller(a, smallest);
    smallest = smaller(b, smallest);
    smallest = smaller(c, smallest);
    function smaller(n, small) {
        if(small > n) {
            small = n;
        }
        return small;
    }

    return smallest;

}

console.log(smallestOfThree(600,
    342,
    123
    ));