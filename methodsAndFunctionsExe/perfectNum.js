function perfectNum(num) {

    let divisors =1;
    let isPerfectNum = false;
    for(let i = 2; i <= parseInt(num / 2); i++) {

        if (num % i === 0) {
            divisors += i;
        }
    }

    num === divisors ? isPerfectNum = true : false;
    let result = isPerfectNum === true ? `We have a perfect number!` : `It's not so perfect.`
    return result;


}
console.log(perfectNum(1236498));