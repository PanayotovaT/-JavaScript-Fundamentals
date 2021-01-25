function songs(songArray) {

    class Song {

        constructor (typelist, name, time) {
            this.typelist = typelist;
            this.name = name;
            this.time = time;
        }
        

 
    }
    let songs = [];
    let n = songArray.shift();
    let type = songArray.pop();

    for(let i = 0; i < n; i++){
        
        let [typelist, name, time] = songArray[i].split('_');
        let song = new Song(typelist,name, time);
        songs.push(song);
    }

    if(type === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.typelist === type);
        filtered.forEach((i) => console.log(i.name));
           
        
    }


}

songs([4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater'])
