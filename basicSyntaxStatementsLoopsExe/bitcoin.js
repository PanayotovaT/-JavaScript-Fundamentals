function solve(input) {
  
    let dailyGold = 0;
    let lv = 0;
    let bitcoin = 0;
    let countdays = 0;
    let isNoBitcoin = true;
    let dayOfFirstBitcoin = 0;
    let leftMoney = 0;
    for (let i = 0; i < input.length; i++) {
        countdays++;
        lv = leftMoney;
        dailyGold = input[i];
        if (countdays % 3 === 0) {
            dailyGold = 0.70 * dailyGold;
        }
        lv += dailyGold * 67.51;
        leftMoney = lv % 11949.16;
        if (lv >= 11949.16) {

            bitcoin += parseInt(lv / 11949.16);

        }
        while (isNoBitcoin) {
            if (bitcoin > 0) {
                dayOfFirstBitcoin = countdays;
                isNoBitcoin = false;
            }
            break;
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (!isNoBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);


}

solve([3124.15, 504.212, 2511.124]);