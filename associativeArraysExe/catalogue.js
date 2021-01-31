function solve(input) {

    class Catalogue {
        constructor() {
            this.catalogue = []
        }


    }
    class Product {
        constructor(product, price) {
            this.product = product,
                this.price = price
        }
    }

    let arr = [];
    for (let line of input) {
        line = line.split(' : ')
        let product = line[0];
        let price = line[1];
        let prod = new Product(product, price);
        arr.push(prod);
    }
    let catal = []
    arr = arr
        .sort((a, b) => a.product.localeCompare(b.product))
        .forEach(x => {
           
            l = x.product.split('')[0];
            if (!catal.includes(l)) {
                catal.push(l);
            }
            return
        })
        console.log(arr);
    // catal.forEach(x => {
    //     console.log(x);
    //     for(let word of arr) {
    //         if(word[0] == x) {
    //             console.log(`  ${word}`);
    //         }
    //     }

    //     return
    // })
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])