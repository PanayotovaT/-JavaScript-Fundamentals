function isNegative(num) {
    return num < 0;
}

let arr = [1, 15, -6, 0, -13, 22];

let filtered = arr.filter(isNegative);
console.log(filtered);
