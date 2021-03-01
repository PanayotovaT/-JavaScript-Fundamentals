function solve(input) {
    let str = input[0].split(' ')
    let words = input[1];
    for (let i = 0; i < str.length; i++) {
        if(str[i][0] == '_') {
            let count = 0;
            for(let letter of str[i]) {
                if (letter == '_') {
                    count++;
                }
            }
            for(let word of words) {
                if(word.length == count) {
                    str[i] = word + str[i].slice(count,str[i].length)
                }
            }
        }
    }
    
    console.log(str.join(' '));
}


solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])