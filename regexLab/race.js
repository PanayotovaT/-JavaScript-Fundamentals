function solve(input) {

    let name  = input.shift().split(', ')
    let racers = {};
    name.forEach(name => {
        racers[name] = 0
    })
    for(const line of input) {
        let regexName = /[A-Za-z]/g;
        let match  = line.match(regexName);
        let name = match.join('');
        if(racers.hasOwnProperty(name)) {
            let regex = /[0-9]/g;
            let distance = (line.match(regex))
            .map(Number)
            .reduce((a , b) => a + b)
            
            racers[name] += distance;
        }
    }
    let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a])
    console.log(`1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`);
}
solve(['George, Peter, Bill, Tom', 
    'G4e@55or%6g6!68e!!@', 
    'R1@!3a$y4456@', 
    'B5@i@#123ll', 
    'G@e54o$r6ge#', 
    '7P%et^#e5346r', 
    'T$o553m&6', 
    'end of race']);