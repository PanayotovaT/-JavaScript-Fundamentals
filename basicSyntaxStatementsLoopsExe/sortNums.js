function solve(num1, num2, num3){

  let min = Math.min(num1, num2, num3);
  let max = Math.max(num1, num2, num3);
  let middle = (num1 + num2 + num3) - min - max;
  

  console.log(`${max}`);
  console.log(`${middle}`);
  console.log(`${min}`);

}

solve (-2, 1, 3);