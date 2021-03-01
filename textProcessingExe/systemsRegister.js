function solve(input) {

    let systems = {}
    for (let line of input) {
        let [system, component, subcomponent] = line.split(' | ');
        if (!systems.hasOwnProperty(system)) {
            systems[system] = {};
        }
        if (!systems[system].hasOwnProperty(component)) {
            systems[system][component] = [];
        }

        systems[system][component].push(subcomponent);
    }
    let sorted = Object.keys(systems).sort((a, b) => Object.keys(systems[b]).length - Object.keys(systems[a]).length || a.localeCompare(b));
    sorted.forEach((system) => {
        console.log(system);
        let sortedComponents = Object.keys(systems[system]).sort((a, b) =>
            Object.keys(systems[system][b]).length -Object.keys(systems[system][a]).length )
        sortedComponents.forEach(component => {
            console.log(`|||${component}`)
            systems[system][component].forEach(el => console.log(`||||||${el}`))
            
        })
        
    })

}
solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'])