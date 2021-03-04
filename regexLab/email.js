function solve(input) {

    let regex = /\s[A-Za-z\d]+([\.\-\_])?[A-Za-z\d]+@([\w]+(\-)?[\w]+){1}([.][A-Za-z]+){1,}/g;
    for(const line of input) {

        let match = line.match(regex);
        if(match) {
        match.forEach(email => {
            email = email.trim();
            console.log(email);
        } )

        }
    }
}
solve(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.'])