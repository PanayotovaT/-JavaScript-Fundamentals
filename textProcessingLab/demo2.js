let str = 'Some sentence written by the author';
let word = 'Some';
let end = 'author'
console.log(str.startsWith(word));
console.log(str.endsWith(word));
console.log(str.endsWith(end));
console.log(str.slice(-end.length) == end);
console.log(str.slice(0, word.length) == word);
console.log(str.slice(0, word.length) == 'some');
console.log(str.slice(0, word.length));

//PADSTART -strings

let hour = '3';
let minutes = '7';
let seconds = '54';

console.log(`${hour.padStart(2,'0')}:${minutes.padStart(2,'0')}:${seconds.padStart(2,'0')}`);
console.log('22'.padEnd(8,'la'));
console.log('268792'.padEnd(8,'la'));
console.log('2682'.padEnd(8,'0'));
console.log(('2682'+ '0'.repeat(8)).slice(0, 8));
console.log('2682'.padStart(8,'0'));
console.log(('0'.repeat(8) + '2682').slice(-8));