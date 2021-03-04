function solve(input){

    let regex = /(?<at>\@+)?(?<dollar>\$+)?(?<hashTag>\#+)?(?<caret>\^+)?/g;
    let match = regex.exec(input);
    console.log(match);
}
solve('@@@@^^^^^^$$@@@@@@^^')