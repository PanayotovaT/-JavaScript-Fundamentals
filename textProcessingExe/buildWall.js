function solve(input) {
    input = input.map(Number);
    let isComplete = false;
    //195 cubic per day;
    let daysConcrete = [];
    
  while(!isComplete) {
      let concrete  = 0;
      isComplete = true;
      for( let i = 0; i < input.length; i++) {
          if(input[i] < 30) {
              input[i]++;
              concrete += 195;
              isComplete = false;
          }
      }
     if(!isComplete) daysConcrete.push(concrete);
  }
console.log(daysConcrete.join(', '));
console.log(daysConcrete.reduce((a, b) => a + b, 0) * 1900 + ' pesos')

}
solve([17, 
    22, 
    17, 
    19, 
    17])