function solve(input) {


    let regex = /%(?<name>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>\w+)>([^\|\$%\.]+)?\|(?<count>[\d]+)\|([^\|\$%\.\d]+)?(?<price>[\d]+(\.[\d]+)?)\$/g;

    let total = 0
    for(const line of input) {
        let  match = regex.exec(line);
        while(match !== null){
            let price  = Number(match.groups.count) * Number(match.groups.price);
            total += price;
            console.log(`${match.groups.name}: ${match.groups.product} - ${price.toFixed(2)}`);
            match = regex.exec(line)
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);

}
solve(['%InvalidName%<Croissant>|2|10.3$', 
    '%Peter%<Gum>1.3$', 
    '%Maria%<Cola>|1|2.4', 
    '%Valid%<Valid>valid|10|valid20$', 
    'end of shift'])