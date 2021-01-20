function loadingBar(num) {

    let complete = parseInt(num / 10);
    let percent = [];

    for (let j = 0; j < num; j += 10) {
        let percentSign = '%';
        percent.push(percentSign);
    }

    for(let i = num; i < 100; i += 10) {
        let dotSign = '.';
        percent.push(dotSign);
    }
    percent = percent.join('');
    return num !== 100 ? `${num}% [${percent}]\nStill loading...` : `100% Complete!\n[${percent}]`;

}

console.log(loadingBar(50));