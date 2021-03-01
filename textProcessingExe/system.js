function solve(input) {

    let register = {};
    for (let line of input) {
        let [system, component, part] = line.split(' | ');
        if (!register.hasOwnProperty(system)) {
            register[system] = {}
        }
        if (!register[system].hasOwnProperty(component)) {
            register[system][component] = []
        }
        register[system][component].push(part)
    }

    let sortSys = Object.keys(register).sort((a, b) =>
        Object.keys(register[b]).length - Object.keys(register[a]).length || a.localeCompare(b))
    sortSys.forEach(x => {
        console.log(x);
        let sortComponent = Object.keys(register[x]).sort((a, b) => Object.keys(register[x][b].length) - Object.keys(register[x][a].length))
        sortComponent.forEach(el => {
            console.log(`|||${el}`);
            register[x][el].forEach(y => console.log(`||||||${y}`))
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