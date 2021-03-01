function solve(word, str) {
    word = word.toLowerCase();
    str = str.toLowerCase().split(' ');
    if(str.includes(word)) {
        console.log(word);
       
    } else {
        console.log(`${word} not found!`);
    }
    console.log(word.charCodeAt(2));
    console.log(String.fromCharCode(word.charCodeAt(3)));
}
solve('javascript',
'JavaScript is the best programming language')
solve('python',
'JavaScript is the best programming language')