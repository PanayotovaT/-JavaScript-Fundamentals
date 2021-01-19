function repeatString(str, n ) {

    let repeatedString = '';
    for(let i = 1; i <= n; i++) {

        repeatedString += str;

    }
    return repeatedString;
   
}

repeatString('tds', 4);