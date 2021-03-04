function solve(input) {

    input = input.toString();
    let regex = /(?<ticket>.[^\s,]+)/g;
    let match = input.match(regex);
    match.forEach(x => {
        x = x.trim();
     
        if (x.length < 20 || x.lenth > 20) {
            console.log(`invalid ticket`);
        } else if(x.length == 20){
            let firstHalf = x.slice(0, 10);
            let lastHalf = x.slice(10, 20);

            let groupRegex = /(?<at>\@+)?(?<dollar>\$+)?(?<hashTag>\#+)?(?<caret>\^+)?/g;
            let groupRegex2 = /(?<at>\@+)?(?<dollar>\$+)?(?<hashTag>\#+)?(?<caret>\^+)?/g;
            let dollarsF = 0;
            let atF = 0;
            let caret = 0;
            let hashTag = 0;
            let firstMatch = groupRegex.exec(firstHalf);
            while(firstMatch !== null) {
                
                firstMatch = groupRegex.exec(firstHalf);
            }

            

            console.log(firstMatch);
            console.log(lastMatch);
            

        }
    })

}
solve(['$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey, @@@@^^^^^^$$@@@@@@^^']);