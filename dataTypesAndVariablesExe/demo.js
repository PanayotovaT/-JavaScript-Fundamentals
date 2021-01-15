function solve(num){

    num = num.toString();
  
    let sum = 0;
    for(let i = 0; i < num.length; i++){

        let current = Number(num[i]);
        sum += current;

        //upr: current = Number(num.charAt(i))

    }
    console.log(sum);


}
solve(97561);