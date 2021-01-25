// function cityInfo(input) {

//     let keys = Object.keys(input);
//     for(let element of keys){
//         let value = input[element]
//         console.log(`${element} -> ${value}`);
//     }

// }

// let obj = {
//     name: "Sofia",
//     area: 492,
//     population: 1238438,
//     country: "Bulgaria",
//     postCode: "1000"
// }

// cityInfo(obj)

function city(obj) {

    // let keys = Object.keys(obj);
    // for(let el of keys) {
    //     // let value = obj[el];
    //     // console.log(`${el} - > ${value}`);
    //     console.log(`${el} - > ${obj[el]}`);
    // }
    let entries = Object.entries(obj);
    for (let[property, value] of entries) {
        console.log(`${property} - > ${value}`)
    }

}

let input = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
city(input);