function solve(x1, y1, x2, y2){
    
    let distance =  Math.sqrt(Math.pow(Math.abs((x1 - x2)),2) + Math.pow(Math.abs((y1 - y2)),2));
    console.log(`${distance}`);

}
solve(2, 4, 5, 0);