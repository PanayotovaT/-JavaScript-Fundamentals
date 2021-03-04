function solve([text]) {

    let pattern = /(?<day>\d{2})([.\/-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let validate = pattern.exec(text);
    while(validate !== null) {
        console.log(`Day: ${validate[1]}, Month: ${validate[3]}, Year: ${validate[4]}`);
        validate = pattern.exec(text);
    }

}
solve([
    '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
  ])