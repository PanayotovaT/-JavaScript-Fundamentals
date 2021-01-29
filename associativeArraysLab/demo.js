let name = 'John Smith';

let myAssocArr = {
    [name]: '+358 675 4658'
}
console.log(myAssocArr);
console.log(myAssocArr[name]);
console.log(myAssocArr['John Smith']);

name = 'George Harris';
console.log(myAssocArr);
console.log(myAssocArr[name]);
console.log(myAssocArr['George Harris']);
console.log(myAssocArr['John Smith']);

let aArr = {};
aArr['One'] = 1;
aArr['Two'] = 2;
aArr['Three'] = 3;

console.log(aArr.hasOwnProperty('One'));
console.log(aArr.hasOwnProperty('Four'));

// delete aArr.Two;
// let k = 'Two';
// delete aArr['Two'];
// delete aArr[k];
// console.log(aArr);

for (let [key, value] of Object.entries(aArr)) {
    console.log(`Key ${key} ---- Value ${value}`);
}


for (let key of Object.keys(aArr)) {
    console.log(`${key} => ${aArr[key]}`);
}
console.log(`--------------`);
for (let key in aArr) {
    console.log(`${key} => ${aArr[key]}`);
}
console.log(`--------------`);
Object.keys(aArr).forEach(key => console.log(`${key} => ${aArr[key]}`));

let contacts = {
    'Tim': {
        phone: '0876566344',
        address: 'Doe Crossing'
    },
    'Bill': {
        phone: '0896543112',
        address: 'Aelson Place'
    }
};
let billsContact = contacts['Bill']; // Get reference
console.log(billsContact.phone); // '0896543112'
console.log(`--------`);
let sortCont = Object.entries(contacts);
sortCont.sort(([nameA, valueA], [nameB, valueB]) => {
    return valueA.address.localeCompare(valueB.address);
})
console.log(sortCont);
