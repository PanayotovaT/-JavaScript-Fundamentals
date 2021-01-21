function negativePositive(arr) {

    let result = [];
    for (let num of arr) {
            if (num < 0 ) {

                result.unshift(num);
            } else {
                result.push(num);
            }
    }
    
     for (let  num of result) {
        //  console.log(num);
     }
     // console.log(result.join('\n'))
}

negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1]);

function myPush(arr, element) {

    arr[arr.length] = element;
}

function myPop(arr) {

    let element = arr[arr.length - 1];
    arr.length--;
    return element;
}

let myArr = ['20', '20', '40'];
console.log(myArr);

myPush(myArr, '50');
console.log(myArr);

myPop(myArr);
myPop(myArr);
console.log(myArr);

function myIndexOf(arr, value) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return  -1;
}