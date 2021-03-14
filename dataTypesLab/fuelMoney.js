function fuel(distance, passangers, price){

    //pass 100 km with 7L diesel.
    //100 milliliters 1 person
    //Needed money for that trip is {neededMoney} lv

    let neededFuel = (distance / 100) * 7;
    neededFuel += 0.100 * passangers;

    let neededMoney = neededFuel * price;
    console.log(`Needed money for that trip is ${neededMoney}lv.`);


}

fuel(260, 9, 2.49);