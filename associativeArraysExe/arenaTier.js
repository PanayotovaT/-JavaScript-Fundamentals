function solve(input) {

    let gladiators = {};
    let command = input.shift();
    while (command !== 'Ave Cesar') {

        if (command.includes(' -> ')) {
            command = command.split(' -> ');
            let [gladiator, technique, skill] = command;
            skill = Number(skill);
            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {}
            }
            if (!gladiators[gladiator].hasOwnProperty(technique)) {
                gladiators[gladiator][technique] = skill;
            } else {
                gladiators[gladiator][technique] = Math.max(skill, gladiators[gladiator][technique]);
            }
        } else {
            command = command.split(' vs ');
            let [gladiator1, gladiator2] = command;
            if (gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)) {
                
                for (let tech of Object.keys(gladiators[gladiator1])) {
                    if (gladiators[gladiator2].hasOwnProperty(tech)) {
                        let loser = '';
                        if (gladiators[gladiator1][tech] > gladiators[gladiator2][tech]) {
                            loser = gladiator2;
                        } else {
                            loser = gladiator1;
                        }
                        delete gladiators[loser];
                        break;
                    }
                }
            }
        }

        command = input.shift()
    }
    for (let gladiator in gladiators) {
        let skill = 0;
        Object.keys(gladiators[gladiator]).forEach(x => skill += gladiators[gladiator][x]);
        gladiators[gladiator].total = skill;
        
    }
    let sorted = Object.keys(gladiators)
        .sort((a, b) => (gladiators[b].total - gladiators[a].total) || gladiators[a].localeCompare(gladiators[b].total))
        .map(x => {
            console.log(`${x}: ${gladiators[x].total} skill`);
            let sortedTechs = Object.entries(gladiators[x])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
            for (let el of sortedTechs) {
                if (el[0] !== 'total') {
                    console.log(`- ${el[0]} <!> ${el[1]}`);
                }
            }
        });


}

solve([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]
)
// solve([
//     'Pesho -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
// ])