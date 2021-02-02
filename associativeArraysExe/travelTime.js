function solve(input) {

    let destination = {
       
    }
    
    

    for(let line of input) {
        let [country, city, price] = line.split(' > ');
        price = Number(price);

        if (!destination.hasOwnProperty(country)) {
            destination[country] = {}
        }
        if (!destination[country].hasOwnProperty(city)){
            destination[country][city] = price;
        } else {
            destination[country][city] = Math.min(price, destination[country][city])
        }
    }

    let orderedCountries = [...Object.keys(destination)].sort((a,b) => a.localeCompare(b));

    let result = ''
    for(let country of orderedCountries) {

        result += country + ' -> ';
        let sortedPrices = [...Object.keys(destination[country])].sort((a, b) =>{
           return destination[country][a] - destination[country][b];
        })
        for(let city of sortedPrices) {
            result += `${city} -> ${destination[country][city]} `
        }
        result += `\n`
        
    }
 console.log(result);
    

}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])