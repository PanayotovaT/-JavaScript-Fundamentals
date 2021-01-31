function solve(input) {
  
    let collection = new Map();
    for(let line of input) {
        line  = line.split(' : ')
        let product = line[0];
        let price = line[1];
        collection.set(product, price);
    }

    console.log(collection);
    let sorted = Array.from(collection.keys()).sort((a, b) => a.localeCompare(b));
    console.log(sorted);
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])