function solve(input) {

    let words = new Map();
    let n = 0;

    for (let word of input) {

        if (!words.has(word)) {
            words.set(word, n);
        }
        let num = words.get(word);
        num++;
        words.set(word, num);

    }
    let sorted = Array.from(words.entries());
    sorted.sort(([wordA, nA], [wordB, nB]) => nB - nA)
    for (let word of sorted) {
        console.log(`${word[0]} -> ${word[1]} times`);
    }


}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])