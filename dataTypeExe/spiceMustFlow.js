function solve(startYield) {

    let days = 0;
    let totalAmountSpice = 0;


    while (startYield >= 100){

        days++;
        totalAmountSpice += startYield - 26;
        if (totalAmountSpice < 0) {
            totalAmountSpice = 0;
        }        
        startYield -= 10;

    }
    totalAmountSpice -= 26;
    if(totalAmountSpice < 0){
        totalAmountSpice = 0;
    }
   

    console.log(days);
    console.log(totalAmountSpice);



}

solve(101)