function solve(input) {
    let[str1, str2, word] = input
  
    let str =  (str1 + str2);
    let vowels = 'aouei';
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            str = str.replace(str[i], word[count].toUpperCase());
            count++;
            if(count >= word.length) {
                count = 0;
            } 
        }
    }
    let password = str.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}
solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
])