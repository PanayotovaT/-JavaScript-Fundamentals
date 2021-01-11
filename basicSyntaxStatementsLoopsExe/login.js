function solve(input){

    let username = input.shift();
    let pass = username.split('').reverse().join(''); //prewryshta go v masiv, reverse obrushta charovete, a join gi dolepq
    

    for (let i = 0; i < input.length; i++) {

        if(input[i] === pass) {
            console.log(`User ${username} logged in.`);
        } else{
            if(i === 3) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }

}
solve(['sunny','rainy','cloudy','sunny','not sunny'])