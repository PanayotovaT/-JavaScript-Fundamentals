function triangle(a, b, c){

   

    let semiPermimeter = (a + b + c) / 2;
    let area = Math.sqrt(semiPermimeter * (semiPermimeter - a) * (semiPermimeter - b) * (semiPermimeter - c));
    console.log(area);

}

triangle(2,
    3.5,
    4)