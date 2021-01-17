function solve(rooms) {

    let arr = rooms[0].split('|');
    let countRoom = 0;
    let initialHealth = 100;
    let initialCoins = 0;
    let healedPoints = 0;
    let foundedCoins = 0;
    let isDead = false;

    for (let i = 0; i < arr.length; i++) {
        countRoom++;
        let room = arr[i].split(' ');
        if (room[0] == 'potion') {
            healedPoints = Number(room[1])
            initialHealth += healedPoints;
            if (initialHealth > 100) {
                healedPoints -= (initialHealth - 100);
                initialHealth = 100;
            }
            console.log(`You healed for ${healedPoints} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        } else if (room[0] == 'chest') {

            foundedCoins = Number(room[1]);
            initialCoins += foundedCoins;
            console.log(`You found ${foundedCoins} coins.`);
        } else {
            let monsterName = room[0];
            initialHealth -= Number(room[1]);

            if (initialHealth > 0) {

                console.log(`You slayed ${monsterName}.`);

            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                isDead = true;
                break;
            }
        }


    }

    if (isDead) {
        console.log(`Best room: ${countRoom}`);
    } else {
        console.log(`You've made it!`);
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    }



}
solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);