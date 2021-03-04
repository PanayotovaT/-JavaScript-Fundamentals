/*let text = `11-May-2018 is born Alex.
Sofia is born on  15-Oct-2019.
Filip is born on 26-July-1984
Teodora is born on 15-Sep-1988`

let pattern = /\d{1,2}-(?<month>[A-Za-z]{3})-(?<year>\d{4})/g;

let match = pattern.exec(text);

while(match !== null) {
    console.log(match);
    match = pattern.exec(text);
} */

// let text = 'Peter: 123 Mark: 123';
// // let replacement = '999';
// // let regex = /\d{3}/g;
// // let result = text.replace(regex, replacement);
// // let result = text.replace(/123/g, '999');
// let regex = /\d{3}/g;
// let result = text.replace(regex, '999');

// console.log(result);
//--------------------------------
// const regexp = /t(e)(st(\d?))/g;
// const str = 'test1test2';
// const array = [...str.matchAll(regexp)];
// console.log(array)
//-----------------------------
let text = ' hello    ask where     no    ';
text = text.trim();
let regex = /\s+/g;
let arr = text.split(regex);
console.log(arr);