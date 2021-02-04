function solve(input) {

    let string = input.shift();
    let regexEmoji = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
    let regexDigit = /\d/g;
    let emojis = [];

    let digits = string.match(regexDigit);
    let coolThreshold = digits.reduce((a , b) => a * b, 1)
    console.log(`Cool threshold: ${coolThreshold}`);

    let emoji = regexEmoji.exec(string);
   

    while(emoji !== null) {
        emojis.push(emoji[0]);
        emoji = regexEmoji.exec(string);
    }
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    for(let element of emojis) {
        let el = element.slice(2, -2)
        let coolness = 0;
        for(let letter of el) {
           coolness += letter.charCodeAt();
        }
        if(coolness >= coolThreshold) {
            console.log(element);
        }
    }
}
solve(['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'])