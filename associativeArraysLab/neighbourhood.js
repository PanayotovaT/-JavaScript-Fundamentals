function solve(input) {

    let neighbourhoods = new Map();
    let neighb = input.shift().split(', ');
    let n = 0;
    for(let line of neighb){
        neighbourhoods.set(line, []);
    }

    for(let line of input) {
        let [neighbourhood, name] = line.split(' - ');

        if(neighbourhoods.has(neighbourhood)){
            let person = neighbourhoods.get(neighbourhood);
            person.push(name);
            neighbourhoods.set(neighbourhood,person);
        }
    }

   let sorted =  Array.from(neighbourhoods.entries());
   sorted.sort(([neiA,arrA], [neiB, arrB]) => arrB.length - arrA.length)

   for(let line of sorted) {
    

       console.log(`${line[0]}: ${line[1].length}`);
       for(let person of line[1]){
           console.log(`--${person}`);
       }
   }


}
solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)