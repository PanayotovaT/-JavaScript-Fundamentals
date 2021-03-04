function solve([text]) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let match = text.match(pattern);

    console.log(match.join(' '));
    


}
solve(['Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov'])