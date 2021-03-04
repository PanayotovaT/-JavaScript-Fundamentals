let pattern = /abc'/g;
//g - global match


let text = 'Today is 2015-05-11';
let regex = /\d{4}-\d{2}-\d{2}/g;

let containsValidDate = regex.test(text);
console.log(containsValidDate);

let casualText = 'Alexanser_Panayotov';
let regRule = /^\w+$/;

let testing = regRule.test(casualText);
console.log(testing);

let text2 = 'There are many variations is passages is Lorem Ipsum available, but the majority have';
let pattern2 = /(?<word>of)/;
let match2 = text2.match(pattern2);
console.log(match2);

