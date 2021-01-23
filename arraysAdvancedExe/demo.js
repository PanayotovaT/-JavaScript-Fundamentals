function find(arr){

    let find = arr.indexOf(57); // намира индекса на числото
    console.log(find);
    let includes = arr.includes(22);
    if(includes) {
        let indexOfIncluded = arr.indexOf(22);
        console.log(indexOfIncluded);
    }
}

find([11, 3, 44, 57, 22])

function unshift(arr) {
    arr.unshift(3, 4, 5, 3, 3);
    let length = arr.unshift(13); //taka se pokazva dyljinata na noviq masiv
    console.log(length);
    console.log(arr.join(' '));
    console.log(arr.indexOf(3, 6)); // tursi stoinostta sled opredelen index natatuk;

}
unshift([2, 11, 3, 77])

function filterDemo(arr) {
    let filtered = arr.filter(x => x !== 3);
    console.log(filtered);
    let sameNum = arr.filter(x => x == 3);
    console.log(sameNum);
    let bigger = arr.filter(x => x >= 20);
    console.log(bigger);
    let odd = arr.filter((x, i) => i % 2 !== 0 );
    console.log(odd);

}
filterDemo([1, 17, 23, 3, 14, 3, 22])

function mapped(arr) {

    let mapped = arr.map(x => x + 3);
    console.log(mapped);
    console.log(arr);

}
mapped([2, 17, 3, 44, 16]);