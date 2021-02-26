function solve(input) {
    
    let store  = [];
    class Store {
        constructor(product, price){
            this.product = product,
            this.price = price
        }
    }
    for(let line of input) {
        let[product, price] = line.split(' : ');
        let item = new Store(product, price);
        store.push(item)
    }
    
    store = store.sort((a, b) => a.product.localeCompare(b.product))
    let letters = []
    store.forEach(x => {
       letters.push(x.product[0])
    } );
    letters = new Set(letters);
    for (letter of letters) {
        console.log(letter);
        store.forEach(x => {
            if(x.product[0] == letter){
                console.log(`  ${x.product}: ${x.price}`);
        }})
    }
    
}

solve(['Appricot : 20.4', 
'Fridge : 1500', 
'TV : 1499', 
'Deodorant : 10', 
'Boiler : 300', 
'Apple : 1.25', 
'Anti-Bug Spray : 15', 
'T-Shirt : 10'])