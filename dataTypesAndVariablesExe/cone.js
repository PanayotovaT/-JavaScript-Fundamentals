function solve(radius, height) {

   
    let volume = (1 / 3 ) * Math.PI * radius * radius * height;

    let base = Math.PI * Math.pow(radius, 2);
    let lateral = Math.PI * radius * Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let area = base + lateral;
    
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`)

}

solve(3.3,
    7.8
    );