function solve(word){


let reverse = word.split('');
let output = '';
for(let i = reverse.length - 1; i >= 0; i--){
    output += reverse[i];
    
}
console.log(`${output}`)


}

solve("SoftUni")