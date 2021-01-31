function solve(input) {

    let companies = {};

    for(let line of input) {
        let [company, ID] = line.split(' -> ');
        if(!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        if(!companies[company].includes(ID)) {
            companies[company].push(ID)
        }
    }

    let sortedCompanies = Array.from(Object.keys(companies)).sort((a, b) => a.localeCompare(b))
    for(let company of sortedCompanies) {
        console.log(company);
        for(let i = 0; i < companies[company].length; i++ ){
            console.log(`-- ${companies[company][i]}`);
        } 
    }
    


}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    

)