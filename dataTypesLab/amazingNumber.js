function solve(number){

   let numAsString = number.toString();
   let sum = 0;
   for(let i =0; i < numAsString.length; i++){
      sum += Number(numAsString[i]);
   }

   let sumAsString = sum.toString();
   if(sumAsString.includes('9')){
       console.log(`${number} Amazing? True`);
   } else {
    console.log(`${number} Amazing? False`);

   }

}

solve(999)