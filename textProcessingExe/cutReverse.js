function solve(str) {

    let firstHalf = str.substring(0, str.length / 2).split('').reverse().join('');
    let secondHalf = str.substring(str.length / 2, str.length).split('').reverse().join('');

    console.log(firstHalf);
    console.log(secondHalf);


}
solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')