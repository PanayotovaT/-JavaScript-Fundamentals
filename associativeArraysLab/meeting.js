function solve(input) {
    let meetings = {};

    for(let line of input) {
        let [day, name] = line.split(' ');
        if(meetings.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            meetings[day] = name;
        }
    }
    for(let day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }

}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)