function solve(base, increment) {
    
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let step = 0;
    let height = 0
    


    for (let i = base; i > 0; i -= 2) {
        step++;
        gold = i * i * increment;
        if(step % 5 === 0){
            lapisLazuli += (i * 4 - 4) * increment;
        } else if (i > 2) {
            marble += (i * 4 - 4) * increment;
            
        } 

        if(i > 2){
            base -= 2;
            stone += base * base * increment;
        }


    }
    
    height = step * increment;
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);

}
solve(3,
    1)