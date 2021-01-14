function solve(band, albumName, song) {
   

    let time = albumName.length * band.length * song.length / 2;
    count = 0;
    for(let i = 0; i <= time; i += 2.5){
        count++;
    }
    console.log(`The plate was rotated ${count} times.`)

    
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');