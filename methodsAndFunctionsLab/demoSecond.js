function solve(array){

    //Array and Object have reference value
    let arr = array;
    arr[0] = 'horse';
    console.log(array);
    //The rest of the data is primitive

    //Arrow functions - празни функции
    let increment = x => x + 1;
    console.log(increment(5));

   
    let n = y => y + 1;
  
    console.log(n(7));


}

solve(['dog', 'cat']);