function solve(input) {

    let students = new Map();

    for(let line of input) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if(students.has(name)){
            let existing = students.get(name);
            for(let grade of grades) {
                existing.push(grade);
            }

        } else {
            students.set(name, grades);
        }

        // if(!students.has(name)) {
            // students.set(name, []);}
            //let existing = students.get(name);
            //for(let grade of grades) {
            // existing.push(grade); }
    }

    let sorted = Array.from(students);
    sorted.sort(compareAverage);
    for(let [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(', ')}`);
    }

    function compareAverage([nameA, gradesA] , [nameB, gradesB]) {
        // a = [name], [grades]
        let avA = 0;
        gradesA.forEach(x => avA += x);
        avA /= gradesA.length;
        let avB = 0;
        gradesB.forEach(x => avB += x);
        avB /= gradesB.length;

        return avA - avB;
    }

}
solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)