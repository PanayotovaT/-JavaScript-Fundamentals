function solve(words, text) {

    words = words.split(', ');
    for (let word of words) {
        let starsString = '*'.repeat(word.length);
        while (text.includes(starsString)) {
            text = text.replace(starsString, word);

        }

    }
    console.log(text);
}
solve('great',
    'softuni is ***** place for learning new ***** ***** ***** programming languages')
solve('great, learning',
    'softuni is ***** place for ******** new programming languages')