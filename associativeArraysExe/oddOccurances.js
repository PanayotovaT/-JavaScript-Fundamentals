function solve(input) {
    let arr = input.split(' ');
    let occurances = new Map()
    for (let word of arr) {
        word = word.toLowerCase();
        if (!occurances.has(word)) {
            occurances.set(word, 0)
        }
        occurances.set(word, occurances.get(word) + 1);


    }
    // let keys = Array.from(occurances.keys())
    // .filter(x => {
    //    return occurances.get(x) % 2 !== 0
    // })
    // .join(' ')
    // console.log(keys);
    return console.log(Array.from(occurances.keys())
        .filter(x => occurances.get(x) % 2 !== 0)
        .join(' '))


}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')