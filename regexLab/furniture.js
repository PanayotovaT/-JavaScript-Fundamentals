function solve(arr) {

    let regex = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<quantity>[\d]+)/g;
    let result = `Bought furniture:`;
    let total = 0;
    
    for (const line of arr) {

        let match = regex.exec(line);
        while(match !== null) {
           result += `\n${match.groups.name}`;
           total += Number(match.groups.price) * Number(match.groups.quantity);
           match = regex.exec(line);

        }
        
       
    }
  
    console.log(result);
    console.log(`Total money spend: ${total.toFixed(2)}`);
}
solve(['>>Sofa<<312.23!3', 
'>>TV<<300!5', 
'>Invalid<<!5', 
'Purchase'])