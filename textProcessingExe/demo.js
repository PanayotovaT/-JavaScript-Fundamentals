// function solve(text, word) {
//     text = text.toLowerCase();
//     text = text.split(' ');
//     while(text.includes(word)) {
//         let i = text.indexOf(word);
//         text[i] = '*'.repeat(word.length)
//     }
//     console.log(text.join(' '));
// }
// solve('Small A small sentence with some small words small', 
//     'small'
//     )

// function test(text, word) {
//     while (text.includes(word)) {
//       text = text.replace(word, '*'.repeat(word.length));
//     }
//     console.log(text);
//    }
//    test('Small A small sentencesmall withsmall some small words small', 
//    'small')

function test(text, word) {

    let asterisk = ' ' + '*'.repeat(word.length) + ' '
    text = ` ${text} `;
    word = ` ${word} `
    while (text.includes(word)) {
        text = text.replace(word, asterisk);
    }

    console.log(text.trim());
}
test('Small A small sentencesmall withsmall some small words small',
    'small')

function starts(text, word) {

    console.log(text.startsWith(word));
    console.log(text.endsWith('small'));
}
starts('Small A small sentencesmall withsmall some small words small',
    'Small')

function pad(str, num) {

    console.log(num);
    console.log(str);
    let number = str.padStart(num, '0');
    console.log('10'.padEnd(7, '5'))

    console.log(number);
}
pad('23', 8);

function search(sentence, word) {
  sentence = sentence.split(' ');
  counter = 0;
  for(let words of sentence) {
      if(words == word) {
          counter++
      }
  }
  console.log(counter);

}
search("Is This is a word and it also is a sentence is",
    "is")
